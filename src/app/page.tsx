import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import SkillsAndTools from "@/components/sections/SkillsAndTools";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Testimonials from "@/components/sections/Testimonials";
import GitHubStats from "@/components/sections/GitHubStats";
import NowPreview from "@/components/sections/NowPreview";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <SkillsAndTools />
      <ExperienceTimeline />
      <Testimonials />
      <GitHubStats />
      <NowPreview />
      <Contact />
    </>
  );
}
