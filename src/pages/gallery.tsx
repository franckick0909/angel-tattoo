"use client";
import { useState } from "react";
import { galleryData } from "@/components/data";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";
import BlurFade from "@/components/magicui/blur-fade";
import { motion } from "framer-motion";
import { containerVariants, titleVariants } from "@/components/data";

export default function Gallery() {
  const [filter, setFilter] = useState("Franckick");
  const [index, setIndex] = useState(-1);

  // Créez un tableau de toutes les catégories uniques
  const categories = [
    "tout",
    ...Array.from(
      new Set(galleryData.galleryAll.map((gal) => gal.category)) as Set<string>
    ),
  ];

  // Fonction pour obtenir toutes les images
  const getAllImages = () =>
    galleryData.galleryAll.flatMap((gal) => gal.images);

  // Filtrez les images en fonction du filtre sélectionné
  const filteredImages =
    filter === "tout"
      ? getAllImages()
      : galleryData.galleryAll.find((gal) => gal.category === filter)?.images ||
        [];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const buttonVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const containerButtonVariants = {
	animate: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
    },
  };

  return (
    <section
      id="Galerie"
      className="relative flex flex-col gap-20 w-full min-h-screen py-28 px-4 md:px-8 lg:px-16 xl:px-20"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.h2
          className="text-neutral-500 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal mb-12 text-center flex flex-wrap items-center justify-center"
          style={{ lineHeight: "0.9" }}
        >
          <motion.span
            variants={titleVariants}
            className="font-extralight text-white"
          >
            nos
          </motion.span>
          <motion.span variants={titleVariants} className="block w-full">
            Galeries
          </motion.span>
        </motion.h2>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView={containerButtonVariants ? "animate" : "initial"}
        variants={containerButtonVariants}
        className="w-full flex flex-wrap gap-4 items-center justify-center"
      >
        {categories.map((cat) => (
          <motion.button
            variants={buttonVariants}
            type="button"
            key={cat}
            onClick={() => setFilter(cat)}
            className={`py-3 md:py-6 rounded hover:bg-neutral-600 hover:text-white font-extralight text-base md:text-lg lg:text-xl xl:text-2xl flex-1 flex-wrap px-4 transition-all duration-300 ${
              filter === cat
                ? "bg-neutral-200 text-black"
                : "bg-neutral-900 text-white"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredImages.map((image, idx) => (
          <div key={idx} className="mb-4">
            <BlurFade delay={0.25 + idx * 0.05} inView>
              <Image
                src={image.src}
                alt={`Image ${idx + 1}`}
                width={image.width}
                height={image.height}
                onClick={() => setIndex(idx)}
                className="rounded-lg cursor-pointer w-full h-auto object-cover shadow-sm shadow-neutral-600"
              />
            </BlurFade>
          </div>
        ))}
      </Masonry>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={filteredImages}
      />
    </section>
  );
}
