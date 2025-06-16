import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { TapeSection } from "./sections/TapeSection";
import { AboutSection } from "./sections/AboutSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <AboutSection />

    </div>
  )
}