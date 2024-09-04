"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "./data";
import Image from "next/image";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Accueil");

    const topVariants = {
        open: { rotate: 135, y: 6, width: "70%", transition: { type: "spring", stiffness: 100, damping: 20 } },
        close: { rotate: 0, y: 0, width: "100%", transition: { type: "spring", stiffness: 100, damping: 20 } },
      };
      
      const bottomVariants = {
        open: { rotate: -135, y: -6, width: "70%", transition: { type: "spring", stiffness: 100, damping: 20 } },
        close: { rotate: 0, y: 0, width: "100%", transition: { type: "spring", stiffness: 100, damping: 20 } },
      };

      const desktopNavVariants = {
        open: { y: 0, transition: { when: "beforeChildren", staggerChildren: 0.1, ease: "easeInOut" } },
        close: { y: "-100%", transition: { when: "afterChildren", staggerChildren: 0.1, staggerDirection: -1, ease: "easeInOut" } },
      };

      const desktopNavItemVariants = {
        open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
        close: { opacity: 0, x: -50, transition: { type: "spring", stiffness: 300, damping: 20 } },
      };

    const handleLinkClick = (href: string) => {
        setActiveSection(href);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.href));
            const scrollPosition = window.scrollY;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;

                    if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                        setActiveSection(navLinks[index].href);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="">

            {/* BURGER BUTTON */}
            <div className="fixed right-4 md:right-8 lg:right-16 xl:right-20 top-4 flex items-center justify-center md:w-14 md:h-14 w-12 h-12 z-[100]">
            <button
                type="button"
                aria-label="Toggle menu"
                className="w-14 h-8 flex flex-col items-center justify-center gap-2 relative"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <motion.div
                  variants={topVariants}
                  animate={isOpen ? "open" : "close"}
                  className="max-w-14 w-full h-[3px] rounded bg-custom-green"
                ></motion.div>

                <motion.div
                  variants={bottomVariants}
                  animate={isOpen ? "open" : "close"}
                  className="max-w-14 w-full h-[3px] rounded bg-custom-green"

                ></motion.div>
              </button>
            </div>

            {/* DESKTOP NAVIGATION */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={desktopNavVariants}
                        initial="close"
                        animate="open"
                        exit="close"
                        className="fixed inset-0 w-full h-full bg-black flex-col md:flex-row flex items-center justify-between gap-8 p-4 md:p-8 lg:p-16 xl:p-24 py-16 z-50"
                    >
                        <motion.div
                            className="flex flex-col items-center space-y-0 md:-space-y-1 lg:-space-y-2  xl:-space-y-6"
                        >
                            {navLinks.map((item) => (
                                <motion.div
                                    variants={desktopNavItemVariants}
                                    className="w-full h-full flex items-center justify-start flex-1" 
                                    key={item.id}
                                >
                                    <Link 
                                        href={`/#${item.href}`} 
                                        className={`w-full text-5xl md:text-7xl lg:text-8xl xl:text-9xl hover:text-white transition-all duration-300 ${activeSection === item.href ? "text-white" : "text-neutral-600"}`}
                                        onClick={() => handleLinkClick(item.href)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="w-full h-full flex items-center justify-center flex-1">
                            <Image 
                                src="/images/tatouage.jpg" 
                                alt="image de tatouage" 
                                width={500} 
                                height={500} 
                                className="object-cover w-auto h-auto" 
                            />
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
}