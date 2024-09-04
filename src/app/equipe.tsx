"use client";

import Image from "next/image";
import Link from "next/link";
import { teamData, containerVariants, titleVariants, containerBoxVariants, boxVariants } from "@/components/data";
import { motion } from "framer-motion";

export default function Equipe() {
  return (
    <section
      id="Equipe"
      className="relative w-full min-h-screen px-4 md:px-8 lg:px-16 xl:px-20 py-28"
    >
      <motion.div
        initial="initial"
        whileInView={containerVariants ? "animate" : "initial"}
        variants={containerVariants}
        className="flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.h2
          variants={titleVariants}
          className="text-neutral-600 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal mb-8 text-center max-w-[600px] flex flex-wrap items-center justify-center mx-auto leading-[0.7]"
          style={{ lineHeight: "0.9" }}
        >
          <motion.span
            variants={titleVariants}
            className="font-extralight text-white lg:-ml-32"
          >
            rencontrez{" "}
          </motion.span>
          &nbsp;notre équipe
        </motion.h2>
      </motion.div>

      <div className="py-16">
        <p className="text-neutral-200 mb-8 font-extralight font-inter text-base md:text-lg lg:text-xl">
          L&apos;équipe de{" "}
          <span className="bg-white text-black px-2 py-1 rounded-sm tracking-tight font-normal">
            ANGEL TATTOO
          </span>{" "}
          est composée de professionnels qualifiés et expérimentés, travaillant
          en étroite collaboration pour offrir des solutions sur mesure.
        </p>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={containerBoxVariants}
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full"
        >
          {teamData.team.map((team) => (
            <motion.div 
              key={team.id} 
              className="flex flex-col"
              variants={boxVariants}
            >
              <Link
                href={`/equipe/${team.id}`}
                className="block relative overflow-hidden bg-neutral-500 shadow-lg transform transition duration-300 group"
              >
                <div className="relative w-full pt-[100%] overflow-hidden bg-neutral-500 shadow-lg transform transition duration-300 group hover:scale-90">
                  <Image
                    src={team.images}
                    alt={team.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-300 group-hover:scale-80"
                  />
                </div>
              </Link>
              <div className="mt-4">
                <Link
                  href={`/equipe/${team.id}`}
                  className="text-neutral-500 hover:text-white text-xl md:text-2xl lg:text-3xl font-extralight transition duration-300 inline-block"
                >
                  {team.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
