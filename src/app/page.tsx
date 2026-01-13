import Hero from "@/components/sections/Hero";
import Programs from "@/components/sections/Programs";
import Membership from "@/components/sections/Membership";
import Trainers from "@/components/sections/Trainers";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        {/* <Membership /> */}
        <Trainers />
        <Testimonials />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
}