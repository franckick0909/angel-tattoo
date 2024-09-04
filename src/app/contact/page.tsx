"use client";
import { motion } from "framer-motion";
import {
  containerVariants,
  titleVariants,
  socialLinks,
} from "@/components/data";
import Image from "next/image";
import BoxReveal from "@/components/magicui/box-reveal";
import Form from "@/components/form";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="relative flex flex-col gap-32 w-full min-h-screen py-28 px-4 md:px-8 lg:px-16 xl:px-20"
    >
      <div className="flex flex-col lg:flex-row gap-16 md:gap-8 items-center justify-between w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={containerVariants}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center justify-center overflow-hidden flex-1"
        >
          <motion.h2
            className="text-neutral-600 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal mb-12 text-center flex flex-wrap items-center justify-center"
            style={{ lineHeight: "0.9" }}
          >
            <motion.span
              variants={titleVariants}
              className="font-extralight text-white"
            >
              dites nous
            </motion.span>
            <motion.span variants={titleVariants} className="block w-full">
              bonjour
            </motion.span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/images/bg.png"
            alt="contact"
            width={580}
            height={432}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col items-start justify-start gap-4 w-full md:items-end md:justify-end">
          {socialLinks.map((link) => (
            <div key={link.id} className="flex flex-col md:items-end w-full">
              <div className="flex lg:flex-col lg:justify-end lg:items-end items-center justify-between md:justify-end gap-x-4">
                <motion.a
                  href={link.href}
                  className="text-neutral-600 text-3xl md:text-3xl lg:text-4xl xl:text-5xl hover:text-white transition-all duration-300 ease-in-out flex items-center justify-start leading-[0.8]"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ lineHeight: "0.7" }}
                >
                  {link.name}
                </motion.a>
                <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[0.8]">
                  {link.href}
                </p>
              </div>
              <div className="h-[0.5px] bg-neutral-400 w-full mt-2 md:w-8 md:mt-3 " />
            </div>
          ))}
        </div>
      </div>

      <div className="h-1 w-full max-w-[1200px] bg-white rounded-full mx-auto" />

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center justify-start">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase text-center"
            style={{ lineHeight: "0.9" }}
          >
            <BoxReveal
              boxColor="rgb(17, 255, 17)"
              duration={0.5}
              stagger={0.1}
              originX={0}
            >
              <span>Tu veux</span>
              <span>un tatouage</span>
              <span className="text-neutral-600">fait par un</span>
              <span>artiste ?</span>
              <span className="text-neutral-600">contactez nous !</span>
            </BoxReveal>
          </motion.h2>
        </div>

        <div className="flex flex-col items-center justify-start">
          <Form />
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-3xl text-white mb-4">Notre emplacement</h3>

        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5250.282956045124!2d2.340424076755864!3d48.85551250090857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e007755671%3A0xa87f37e47609b971!2s36%20Quai%20des%20Orf%C3%A8vres%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1725435324519!5m2!1sfr!2sfr"
          width="100%"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
        ></motion.iframe>
        <p className="text-white mt-2">
          36 Quai des Orfèvres, 75001 Paris, France
        </p>
      </div>
    </section>
  );
}
