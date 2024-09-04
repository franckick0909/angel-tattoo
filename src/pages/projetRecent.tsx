"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import BoxReveal from "@/components/magicui/box-reveal";
import BlurFade from "@/components/magicui/blur-fade";
import { containerVariants, titleVariants } from "@/components/data";

export default function ProjetRecent() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });
  
    const x1 = useTransform(scrollYProgress, [0, 1], [-500, 400]);
    const y1 = useTransform(scrollYProgress, [0, 1], [-500, 1200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-300, 700]);
    const y3 = useTransform(scrollYProgress, [0, 1], [-600, 400]);
    const scaleY = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  
    const springY1 = useSpring(y1, { stiffness: 200, damping: 30 });
    const springY2 = useSpring(y2, { stiffness: 200, damping: 30 });
    const springY3 = useSpring(y3, { stiffness: 200, damping: 30 });
    const springX1 = useSpring(x1, { stiffness: 200, damping: 30 });
    const springScaleY = useSpring(scaleY, { stiffness: 200, damping: 30 });
    const springScale = useSpring(scale, { stiffness: 200, damping: 30 });

  return (
    <section
      ref={ref}
      id="ProjetRecent"
      className="relative w-full min-h-screen py-10 px-4 md:px-8 lg:px-16 xl:px-20"
    >
        <motion.div
        initial="initial"
        whileInView={containerVariants ? "animate" : "initial"}
        variants={containerVariants}
        className="flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.h1
        variants={titleVariants}
        className="text-neutral-600 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal mb-8 text-center max-w-[600px] flex flex-wrap items-center justify-center mx-auto z-20"
        style={{ lineHeight: "0.9" }}
      >
        <motion.span
        variants={titleVariants}
        className="font-extralight text-white">
          nos derniers{" "}
        </motion.span>
          &nbsp;projets
        </motion.h1>
      </motion.div>

      <motion.div className="w-full h-full flex flex-col items-center justify-center py-20 overflow-hidden relative">
        <div className="w-full h-auto flex items-center justify-around gap-8"> 
          <motion.div className="flex flex-col items-start justify-center" style={{ y: springY2, scaleY: springScaleY }}>
            <BlurFade>
              <Image src="/projetrecent/fleur3.jpg" alt="Projet 1" width={667} height={1000} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover w-full h-auto" />
            </BlurFade>
            <p className="text-neutral-500 hover:text-white transition-colors duration-300 text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mt-6 text-start z-0">
              fleur
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-start justify-center" style={{ y: springY1, scaleY: springScaleY }}>
            <BlurFade>  
              <Image src="/projetrecent/papillon1.jpg" alt="Projet 2" width={1000} 
                height={571}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover w-full h-auto" />
            </BlurFade>
            <p className="text-neutral-500 hover:text-white transition-colors duration-300 text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mt-6 text-start">
              papillon
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center py-20 w-full px-4 gap-20">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase text-center"
            style={{ lineHeight: "0.9" }}
          >
            <BoxReveal boxColor="rgb(17, 255, 17)" duration={0.5} stagger={0.1} originX={0} >
              <span>Découvrez</span>
              <span>notre sélection</span>
              <span className="text-neutral-600">de créations récentes,</span>
              <span>alliant innovation </span>
              <span className="text-neutral-600">et esthétique.</span>
            </BoxReveal>
          </motion.h2>
          <div className="border-[1px] border-white h-24 md:h-44 rounded-full" />

<a
  href="#Equipe"
  className="text-slate-950 text-xl md:text-2xl hover:text-white transition-all duration-300 ease-in-out bg-white hover:bg-transparent border-2 border-white px-14 md:px-24 py-6 mb-32"
>
  Voir les membres de l&apos;équipe
</a>
        </div>

        <div className="flex flex-col items-center justify-center py-20 w-full">
          <motion.div className="flex flex-col items-start w-full max-w-[900px]" style={{ x: springX1 }}>
            <BlurFade>
              <Image 
                src="/projetrecent/ornement1.jpg" 
                alt="Projet 3" 
                width={1000} 
                height={571} 
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                className="object-cover w-auto h-auto"
              />
            </BlurFade>
            <p className="text-neutral-500 hover:text-white transition-colors duration-300 text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mt-6 text-start">
              ornement
            </p>
          </motion.div>
        </div>

        <div className="w-full h-auto flex items-center justify-around py-20 gap-8"> 
          <motion.div className="flex flex-col items-start justify-center" style={{ scale: springScale }}>
            <BlurFade> 
              <Image src="/projetrecent/papillon2.jpg" alt="Projet 4" width={800} height={1000} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover w-auto h-auto" />
            </BlurFade>
            <p className="text-neutral-500 hover:text-white transition-colors duration-300 text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mt-6 text-start">
              papillon
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-start justify-center" style={{ y: springY3, scaleY: springScaleY }}>
            <BlurFade> 
              <Image src="/projetrecent/fleur1.jpg" alt="Projet 5" width={675} height={1000} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover w-auto h-auto" />
            </BlurFade>
            <p className="text-neutral-500 hover:text-white transition-colors duration-300 text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mt-6 text-start">
              fleur
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}