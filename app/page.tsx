import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaStrip from "@/components/CtaStrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <About />
        <Pricing />
        <Faq />
        <CtaStrip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
