"use client";
import {
  reviewsData,
  containerVariants,
  titleVariants,
} from "@/components/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonial() {

    const cardVariants = {
        initial: { opacity: 0, y: 30 },
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
    
      const containerCardVariants = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.15,
            },
        },
      };

  return (
    <section
      id="Testimonial"
      className="relative w-full min-h-screen py-10 px-4 md:px-8 lg:px-16 xl:px-20"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.h2
          className="text-neutral-600 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal mb-12 text-center flex flex-wrap items-center justify-center"
          style={{ lineHeight: "0.9" }}
        >
          <motion.span
            variants={titleVariants}
            className="font-extralight text-white"
          >
            on parle de
          </motion.span>
          <motion.span variants={titleVariants} className="block w-full">
            nous
          </motion.span>
        </motion.h2>
      </motion.div>

      <p className="text-center text-neutral-400 text-lg font-inter">
        Nous n&apos;aimons pas nous vanter, mais cela ne nous dérange pas de
        laisser nos clients le faire à notre place. <br />
        Voici quelques belles choses que les gens ont dites sur nos tatouages au
        fil des ans.
      </p>

      <motion.div
        initial="initial"
        whileInView="animate"
        variants={containerCardVariants}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-20"
      >
        {reviewsData.reviews.map((review, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-neutral-900 p-6 rounded-lg shadow-md relative"
          >
            <div className="absolute top-2 right-2 w-14 h-14 md:w-16 md:h-16 overflow-hidden rounded-full border-2 border-white">
              <Image
                src={review.images}
                alt={`Photo de ${review.author_name}`}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-lg mb-2 text-white">{review.author_name}</p>
            <p className="text-yellow-500 mb-2">{"★".repeat(review.rating)}</p>
            <p className="text-neutral-300 font-inter text-sm md:text-base">
              {review.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex flex-col items-center justify-center">
        <div className="border-[1px] border-white h-44 rounded-full" />
      </div>
    </section>
  );
}
