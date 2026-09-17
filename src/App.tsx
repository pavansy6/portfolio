import { MotionConfig } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Finance from "./components/Finance";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-[#f5f3ec] dark:bg-[#141210] text-[#1c1917] dark:text-[#ede9e3] font-sans selection:bg-[#c9a96a] selection:text-[#1c1917] dark:selection:bg-[#8a6d1f] dark:selection:text-[#f5f3ec]">
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <Finance />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
