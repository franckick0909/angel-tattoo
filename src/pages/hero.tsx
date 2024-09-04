"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/components/data";
import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function Hero() {
  return (
    <section
      id="Accueil"
      className="w-full min-h-screen md:min-h-[105vh] lg:min-h-[115vh] xl:min-h-[125vh] relative flex flex-col justify-center md:justify-end pb-32 overflow-hidden z-20 bg-neutral-950"
    >
      <motion.div
        initial={{ clipPath: "circle(0% at 0% 0%)" }}
        whileInView={{ clipPath: "circle(260% at 50% 50%)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 z-10 pb-20"
      >
        <Image
          src="/images/bg2.jpg"
          alt="Accueil"
          fill
          className="object-cover grayscale"
        />
      </motion.div>

      {/* LOGO */}
      <Link
        href="/"
        className="absolute top-4 left-4 md:left-8 lg:left-16 xl:left-20 text-2xl flex-shrink-0 flex items-center mt-4 z-20"
      >
        <p className="text-neutral-950 ">
          ANGEL <span className="text-white">TATTOO</span>
        </p>
      </Link>

      <div className="relative w-full h-full flex-col md:flex-row justify-between items-start px-4 md:px-8 lg:px-16 xl:px-20 z-20">
        <div className="relative w-full h-full flex flex-col items-start justify-start md:justify-end mb-0 md:-mb-10 lg:-mb-20 xl:-mb-44">

          <GradualSpacing delayMultiple={0.04}
            className="text-[110px] md:text-[125px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] text-white uppercase flex flex-col leading-[0.8]"
            text="ANGEL"
          />

          <GradualSpacing delayMultiple={0.04}
            className="text-[110px] md:text-[125px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] text-white uppercase flex flex-col leading-[0.8]"
            text="TATTOO"
          />
          <a
            href="#Le studio"
            className="text-slate-950 text-xl md:text-2xl hover:text-white transition-all duration-300 ease-in-out bg-white hover:bg-transparent border-2 border-white hover:border-custom-green px-28 py-6 my-10 font-extralight w-auto flex items-center justify-center z-10"
          >
            EN SAVOIR PLUS
          </a>
        </div>

        <div className="relative flex flex-col items-start md:items-end justify-end gap-1 -mb-20 w-full h-full">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              key={link.id}
              className="text-white md:text-neutral-600 text-3xl md:text-3xl lg:text-4xl xl:text-5xl hover:text-white transition-all duration-300 ease-in-out"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
