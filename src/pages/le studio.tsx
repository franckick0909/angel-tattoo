"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import NumberTicker from "@/components/magicui/number-ticker";
import BoxReveal from "@/components/magicui/box-reveal";

export default function LeStudio() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], [-500, 0, 450]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [-300, 0, 200]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const springY1 = useSpring(y1, { stiffness: 200, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 200, damping: 30 });
  const springScaleY = useSpring(scaleY, { stiffness: 200, damping: 30 });

  return (
    <section id="Le studio" className="w-full h-full min-h-[120vh] py-28">
      <div
        ref={ref}
        className="grid place-items-center h-full w-full relative px-4 md:px-8 lg:px-16 xl:px-20 "
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-20 z-10 mt-20">
        
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase text-center"
            style={{ lineHeight: "0.9" }}
          >
            <BoxReveal boxColor="rgb(17, 255, 17)" duration={0.5} stagger={0.1} originX={1}>
              <span>Le studio</span>
              <span>vous accueille</span>
              <span className="text-neutral-600">avec les meilleurs</span>
              <span>artistes</span>
              <span className="text-neutral-600">tatoueurs</span>
            </BoxReveal>
          </motion.h1>
          
          <div className="border-[1px] border-white h-44 rounded-full" />

          <a
            href="#Equipe"
            className="text-slate-950 text-xl md:text-2xl hover:text-white transition-all duration-300 ease-in-out bg-white hover:bg-transparent border-2 border-white px-24 py-6 mb-32"
          >
            Qui sommes-nous ?
          </a>
        </div>

        

        <motion.div
          className="absolute top-10 md:left-[10%] z-0 max-w-[600px]"
          style={{ y: springY1, scaleY: springScaleY }}
        >
          <Image
            src="/studio/living-room.jpg"
            alt="studio"
            width={1000}
            height={666}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-auto h-auto"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute top-32 left-[60%] z-0 max-w-[400px]"
          style={{ y: springY2, scaleY: springScaleY }}
        >
          <Image
            src="/studio/3003.jpg"
            alt="studio"
            width={667}
            height={1000}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-auto h-auto"
          />
        </motion.div>

        <div className="w-full h-auto max-w-7xl">
          <Statistique />
        </div>
      </div>
    </section>
  );
}

const number = [
  {
    value: 300,
    card: "+",
    label: "Clients satisfaits",
  },
  {
    value: 4,
    card: "",
    label: "Experts tatoueurs",
  },
  {
    value: 400,
    card: "+",
    label: "Tatouages réalisés",
  },
];

const Statistique = () => {
  return (
    <div className="w-full h-full grid md:grid-cols-3 place-items-center place-content-center gap-4 z-10">
      {number.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <h2 className="whitespace-pre-wrap text-[100px] md:text-[120px] lg:text-[130px] xl:text-[150px] font-medium tracking-tight text-neutral-600">
            <span className="text-neutral-400">{item.card}&nbsp;</span>
            <NumberTicker
              value={item.value}
              className="whitespace-pre-wrap tracking-normal text-neutral-600"
            />
          </h2>
          <p className="text-white font-inter text-sm md:text-base lg:text-lg xl:text-2xl">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};
