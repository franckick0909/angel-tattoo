import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa6";
  
  export const navLinks = [
    {
      id: "Accueil",
      name: "Accueil",
      href: "Accueil",
    },
    {
      id: "Le studio",
      name: "Le studio",
      href: "Le studio",
    },
    {
      id: "Galerie",
      name: "Galerie",
      href: "Galerie",
    },
    {
      id: "Equipe",
      name: "Equipe",
      href: "Equipe",
    },
    {
      id: "ProjetRecent",
      name: "Projet Recent",
      href: "ProjetRecent",
    },
    {
      id: "Testimonial",
      name: "Testimonial",
      href: "Testimonial",
    },
    {
      id: "Contact",
      name: "Contact",
      href: "Contact",
    },
  ];
  
  export const socialLinks = [
    {
      id: 1,
      name: "Instagram",
      href: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
    {
      id: 2,
      name: "Facebook",
      href: "https://www.facebook.com",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      name: "Twitter",
      href: "https://www.twitter.com",
      icon: <FaTwitter />,
    },
    {
      id: 4,
      name: "Linkedin",
      href: "https://www.linkedin.com",
      icon: <FaLinkedin />,
    },
  ];
  
  import { FaArrowRight } from "react-icons/fa6";
  
  export const galleryData = {
    title: "Check my Gallery:",
    btnText: "En voir plus",
    btnIcon: <FaArrowRight />,
    galleryAll: [
      {
        id: "gallery1",
        category: "categorie 1",
        name: "Franck",
        images: [
          {
            src: "/gallery/img1.jpg",
            width: 474,
            height: 710,
            original: "/gallery/img1.jpg",
          },
          {
            src: "/gallery/img2.jpg",
            width: 1000,
            height: 571,
            original: "/gallery/img2.jpg",
          },
          {
            src: "/gallery/img3.jpg",
            width: 667,
            height: 1000,
            original: "/gallery/img3.jpg",
          },
          {
            src: "/gallery/img4.jpg",
            width: 736,
            height: 736,
            original: "/gallery/img4.jpg",
          },
          {
            src: "/gallery/img5.jpg",
            width: 600,
            height: 1042,
            original: "/gallery/img5.jpg",
          },
          {
            src: "/gallery/img6.jpg",
            width: 720,
            height: 1280,
            original: "/gallery/img6.jpg",
          },
        ],
      },
      {
        id: "gallery2",
        category: "categorie 2",
        name: "Chris",
        images: [
          {
            src: "/gallery/img7.jpg",
            width: 720,
            height: 1280,
            original: "/gallery/img7.jpg",
          },
          {
            src: "/gallery/img8.jpg",
            width: 736,
            height: 1308,
            original: "/gallery/img8.jpg",
          },
          {
            src: "/gallery/img9.jpg",
            width: 736,
            height: 1104,
            original: "/gallery/img9.jpg",
          },
          {
            src: "/gallery/img10.jpg",
            width: 640,
            height: 962,
            original: "/gallery/img10.jpg",
          },
          {
            src: "/gallery/img11.jpg",
            width: 640,
            height: 962,
            original: "/gallery/img11.jpg",
          },
          {
            src: "/gallery/img12.jpg",
            width: 640,
            height: 962,
            original: "/gallery/img12.jpg",
          },
        ],
      },
      {
        id: "gallery3",
        category: "categorie 3",
        name: "Nono",
        images: [
          {
            src: "/gallery/img13.jpg",
            width: 6240,
            height: 4160,
            original: "/gallery/img13.jpg",
          },
          {
            src: "/gallery/img14.jpg",
            width: 6000,
            height: 4000,
            original: "/gallery/img14.jpg",
          },
          {
            src: "/gallery/img15.jpg",
            width: 1280,
            height: 1920,
            original: "/gallery/img15.jpg",
          },
          {
            src: "/gallery/img16.jpg",
            width: 640,
            height: 960,
            original: "/gallery/img16.jpg",
          },
          {
            src: "/gallery/img17.jpg",
            width: 1280,
            height: 853,
            original: "/gallery/img17.jpg",
          },
        ],
      },
      {
        id: "gallery4",
        category: "categorie 4",
        name: "Alicia",
        images: [
          {
            src: "/gallery/img18.jpg",
            width: 640,
            height: 960,
            original: "/gallery/img18.jpg",
          },
          {
            src: "/gallery/img19.jpg",
            width: 640,
            height: 960,
            original: "/gallery/img19.jpg",
          },
          {
            src: "/gallery/img20.jpg",
            width: 640,
            height: 877,
            original: "/gallery/img20.jpg",
          },
          {
            src: "/gallery/img21.jpg",
            width: 640,
            height: 1242,
            original: "/gallery/img21.jpg",
          },
          {
            src: "/gallery/img22.jpg",
            width: 5184,
            height: 3456,
            original: "/gallery/img22.jpg",
          },
          {
            src: "/gallery/img23.jpg",
            width: 640,
            height: 960,
            original: "/gallery/img23.jpg",
          },
        ],
      },
    ],
  }

  import { FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";
  import { TfiInstagram } from "react-icons/tfi";
  
  export const teamData = {
    title: "Team",
    twitter: <FaXTwitter />,
    facebook: <FaFacebookF />,
    instagram: <TfiInstagram />,
    youtube: <FaYoutube />,

    team: [
        {
            id: "teamFranck",
            name: "Franckick",
            images: "/equipe/franckick.jpg",
            description: [
              {text1: "Artiste tattoo depuis 2010.",
              text2: "Préfère travailler en noir et blanc.",
              text3: "Style: Realisme.",
              text4: "Crée des croquis personnalisés, en tirant le meilleur parti de son talent créatif et imagination.",
              text5: "Le coût minimum pour un tattoo est de 80€.",
              text6: "Retouches gratuites",
              demande: "Demande de rdv avec moi",
            },
            ]
        },
        {
            id: "teamChris",
            name: "Chris",
            images: "/equipe/chris.jpg",
            description: [
              {text1: "Artiste tattoo depuis 2010",
              text2: "Préfère travailler en couleur",
              text3: "Style: Animaux",
              text4: "Crée des croquis personnalisés, en tirant le meilleur parti de son talent créatif et imagination.",
              text5: "Le coût minimum pour un tattoo est de 90€",
              text6: "Retouches gratuites",
              demande: "Demande de rdv avec moi",
            },
            ],
        },
        {
            id: "teamWill",
            name: "Will",
            images: "/equipe/will.jpg",
            description: [
              {text1: "Artiste tattoo depuis 2010",
              text2: "Préfère travailler en couleur",
              text3: "Style: Floral",
              text4: "Crée des croquis personnalisés, en tirant le meilleur parti de son talent créatif et imagination.",
              text5: "Le coût minimum pour un tattoo est de 80€",
              text6: "Retouches gratuites",
              demande: "Demande de rdv avec moi",
            },
            ],
        },
        {
            id: "teamBabe",
            name: "Babe",
            images: "/equipe/babe.jpg",
            description: [
              {text1: "Artiste tattoo depuis 2010",
              text2: "Préfère travailler en couleur",
              text3: "Style: Néo",
              text4: "Crée des croquis personnalisés, en tirant le meilleur parti de son talent créatif et imagination.",
              text5: "Le coût minimum pour un tattoo est de 80€",
              text6: "Retouches gratuites",
              demande: "Demande de rdv avec moi",
            },
            ],
        },
    ]
  };
  export const tarifData = {
    title: "Tarifs",
    text: "Minimum 80 euros.\nDe 150 à 250 euros de l&apos;heure selon difficulté et positionnement sur le corps.\nAvant chaque tattoo, un devis vous est présenté pour un prix sans surprise.\nLes retouches sont bien entendu gratuites.\nTout rendez-vous sera confirmé par un versement d&apos;arrhes qui sera déduit du prix final.",
  };


export const reviewsData = {
  title: "Avis",
  reviews: [
    {
      id: 1,
      author_name: "John Doe",
      rating: 4,
      text: "Excellent service, très professionnel et qualité/prix correct.",
      images: "/testimonial/test1.jpg",
    },
    {
      id: 2,
      author_name: "Léa",
      rating: 5,
      text: "Super expérience, très professionnel et qualité/prix correct.",
      images: "/testimonial/test2.jpg",
    },
    {
      id: 3,
      author_name: "Cécile",
      rating: 3,
      text: "Bonne expérience, mais un peu cher pour ce que c'est.",
      images: "/testimonial/test3.jpg",
    },
    {
      id: 4,
      author_name: "Jane Smith",
      rating: 4,
      text: "Excellent service, très professionnel et qualité/prix correct.",
      images: "/testimonial/test4.jpg",
    },
    {
      id: 5,
      author_name: "John Doe",
      rating: 4,
      text: "Excellent service, très professionnel et qualité/prix correct.",
      images: "/testimonial/test5.jpg",
    },
    {
      id: 6,
      author_name: "John Doe",
      rating: 4,
      text: "Excellent service, très professionnel et qualité/prix correct.",
      images: "/testimonial/test6.jpg",
    },
    {
      id: 7,
      author_name: "John Doe",
      rating: 4,
      text: "Excellent service, très professionnel et qualité/prix correct.",
      images: "/testimonial/test7.jpg",
    },
    {
      id: 8,
      author_name: "John Doe",
      rating: 4,
      text: "Excellent service, très professionnel et qualité/prix correct.",
      images: "/testimonial/test8.jpg",
    },
  ],
};

export const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};
      
  export const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  export const containerBoxVariants = {
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  export const boxVariants = {
    initial: { 
      clipPath: "inset(0 100% 0 0)",
    },
    animate: {
      clipPath: "inset(0 0 0 0)",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.7,
      },
    },
  };


