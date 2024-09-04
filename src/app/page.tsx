import Header from "@/components/header";
import Gallery from "@/pages/gallery";
import Hero from "@/pages/hero";
import LeStudio from "@/pages/le studio";
import Testimonial from "@/pages/testimonial";
import Contact from "./contact/page";
import Footer from "@/components/footer";
import Equipe from "@/app/equipe";
import ProjetRecent from "@/pages/projetRecent";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Header />
      <Hero />
      <LeStudio />
      <Gallery />
      <Equipe />
      <ProjetRecent />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
