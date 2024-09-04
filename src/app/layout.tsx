import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "Angel Tattoo",
  description: "Site officiel d'Angel Tattoo, artistes tatoueur à Paris, projet récent, équipe, galerie, studio, contact, avis, tarifs",
};

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`bg-neutral-950 ${bebasNeue.className} ${inter.className} `}>
        {children}
      </body>
    </html>
  );
}
