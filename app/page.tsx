import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import GamesGrid from "@/components/GamesGrid";
import EventTypes from "@/components/EventTypes";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mesh-bg">
      <Nav />
      <Hero />
      <WhyChooseUs />
      <GamesGrid />
      <EventTypes />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
