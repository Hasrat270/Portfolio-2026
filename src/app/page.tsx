import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import SkillsAndTools from "@/components/sections/SkillsAndTools";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Education from "@/components/sections/Education";
import Testimonials from "@/components/sections/Testimonials";
import GitHubStats from "@/components/sections/GitHubStats";
import NowPreview from "@/components/sections/NowPreview";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <SkillsAndTools />
      <ExperienceTimeline />
      <Education />
      <Testimonials />
      <GitHubStats />
      <NowPreview />
      <Contact />
    </>
  );
}
