"use client";
import { motion } from "framer-motion";
import { teamData } from "../../../components/data";
import Header from "@/components/header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";
import { TfiInstagram } from "react-icons/tfi";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BoxReveal from "@/components/magicui/box-reveal";

export default function WillPage() {
  const router = useRouter();
  const member = teamData.team.find((m) => m.id === "teamWill");

  if (!member) {
    return <div>Membre non trouvé</div>;
  }

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Naviguez vers la page d'accueil avec l'ancre #Contact
    router.push("/#Contact");
  };

  // Définissez les variantes ici
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full min-h-screen py-36 px-4 md:px-8 lg:px-16 xl:px-20">
      <Header />
      {/* LOGO */}
      <Link
        href="/"
        className="absolute top-4 left-4 md:left-8 lg:left-16 xl:left-20 text-2xl flex-shrink-0 flex items-center mt-4 z-20"
      >
        <p className="text-neutral-600 ">
          ANGEL <span className="text-white">TATTOO</span>
        </p>
      </Link>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="w-full h-full flex flex-col items-start justify-start gap-4 overflow-hidden">
          <GradualSpacing
            className="text-7xl md:text-8xl lg:text-9xl xl:text-[200px] text-white uppercase flex flex-wrap items-center justify-start w-full tracking-tight font-black"
            text={member.name}
          />

          <motion.h3 initial={{ x: "-100%" }} whileInView={{ x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}  className="text-neutral-600 text-lg md:text-xl xl:text-3xl font-extralight mb-4">
            Artiste Tatoueur
          </motion.h3>

          <motion.ul className="list-none p-0 m-0 flex flex-col gap-2 text-neutral-200 font-light font-inter">
            {Array.isArray(member.description) &&
              member.description.map((item, key) => (
                <BoxReveal
                  key={key}
                  boxColor="rgb(17, 255, 17)"
                  delay={0.3}
                  duration={0.7}
                  stagger={0.1}
                  originX={1}
                >
                  <motion.li className="flex flex-col w-full">
                    {[
                      item.text1,
                      item.text2,
                      item.text3,
                      item.text4,
                      item.text5,
                    ].map(
                      (text, index) =>
                        text && (
                          <div
                            key={index}
                            className="flex items-start gap-4 mb-2"
                          >
                            <div className="h-[2px] bg-white w-8 mt-3 flex-shrink-0"></div>
                            <p
                              className={`${
                                index === 0 ? "uppercase" : ""
                              } text-base lg:text-lg xl:text-xl`}
                            >
                              {index === 2 ? highlightSecondWord(text) : text}
                            </p>
                          </div>
                        )
                    )}
                  </motion.li>
                </BoxReveal>
              ))}
          </motion.ul>
          <motion.div initial={{ scaleY: 0.5, opacity: 0, x: -30 }} whileInView={{ scaleY: 1, opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="py-16">
            {member.description[0].demande && (
              <Link
                href="/#Contact"
                onClick={handleContactClick}
                className="text-slate-950 text-xl md:text-2xl hover:text-white ease-in-out bg-white hover:bg-transparent border-2 border-white hover:border-custom-green px-24 py-6 transition-colors duration-300 my-14"
              >
                {member.description[0].demande}
              </Link>
            )}
          </motion.div>
          <nav className="flex w-full">
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              className="w-full flex items-center justify-start gap-20"
            >
              <motion.li variants={item}>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white text-2xl xl:text-3xl"
                >
                  <FaFacebookF />
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white text-2xl xl:text-3xl"
                >
                  <FaXTwitter />
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white text-2xl xl:text-3xl"
                >
                  <TfiInstagram />
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white text-2xl xl:text-3xl"
                >
                  <FaYoutube />
                </Link>
              </motion.li>
            </motion.ul>
          </nav>
        </div>

        <div className="w-full h-full relative flex-1 flex flex-col items-center justify-center">
          <BlurFade>
            <Image
              src={member.images}
              alt={member.name}
              className="object-cover w-auto min-h-[80dvh]"
              width={700}
              height={700}
              priority={true}
            />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

function highlightSecondWord(text: string) {
  const words = text.split(" ");
  if (words.length < 2) return text;
  return (
    <>
      {words[0] + " "}
      <span className="bg-custom-green text-black px-1 py-1">{words[1]}</span>
      {" " + words.slice(2).join(" ")}
    </>
  );
}
