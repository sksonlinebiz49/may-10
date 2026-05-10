import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Countries from "@/components/Countries";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy selection:bg-gold selection:text-navy">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Countries />
      <Partners />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
