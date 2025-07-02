"use client";

import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { TapeSection } from "./sections/TapeSection";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { ContactForm } from "./components/ContactForm";
import { useState } from "react";

export default function Home() {

  const [showCForm, setCForm] = useState(false);

  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <AboutSection />
      <ContactSection onOpen={() => setCForm(true)} />
      <FooterSection />


      {showCForm && <ContactForm onClose={() => setCForm(false)} />}



    </div>
  )
}