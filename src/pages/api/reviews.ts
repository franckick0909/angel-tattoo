import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const key = process.env.GOOGLE_API_KEY;
  const placeId = "tattoo-09-2024";

  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${key}`);
    const data = await response.json();
    
    if (data.result && data.result.reviews) {
      const filteredReviews = data.result.reviews
        .filter((review: any) => review.rating >= 4)
        .slice(0, 3);
      res.status(200).json(filteredReviews);
    } else {
      res.status(404).json({ message: "Aucun avis trouvé" });
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des avis:', error);
    res.status(500).json({ message: "Erreur lors de la récupération des avis" });
  }
}
