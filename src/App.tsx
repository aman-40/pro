import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Hero from './components/Hero';
import ProjectsCard from './components/ProjectsCard';
import SkillsCard from './components/SkillsCard';
import AboutCard from './components/AboutCard';
import ContactModal from './components/ContactModal';
import StatsCard from './components/StatsCard';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        '.bento-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <ParticleBackground />
      <CustomCursor />
      <ContactModal />
      
      {/* 
        Bento Grid Layout 
        To fit everything in 100vh, we use CSS Grid and manage internal padding/spacing tightly.
      */}
      <main 
        ref={containerRef}
        className="relative z-10 w-full h-full max-w-7xl mx-auto p-3 md:p-4 lg:p-5 flex flex-col md:grid md:grid-cols-4 md:grid-rows-[1.2fr_1.1fr_1.1fr_1.2fr] gap-3 md:gap-4"
      >
        {/* Top Hero Section */}
        <section className="bento-item glass rounded-2xl md:rounded-3xl p-4 md:p-5 md:col-span-4 md:row-span-1 flex items-center justify-between">
          <Hero />
        </section>

        {/* Featured Projects */}
        <section className="bento-item glass rounded-2xl md:rounded-3xl p-4 md:p-5 md:col-span-2 md:row-span-3 flex flex-col overflow-hidden">
          <ProjectsCard />
        </section>

        {/* Skills Card */}
        <section className="bento-item glass rounded-2xl md:rounded-3xl p-4 md:p-5 md:col-span-1 md:row-span-2 flex flex-col overflow-hidden">
          <SkillsCard />
        </section>

        {/* About Me Card */}
        <section className="bento-item glass rounded-2xl md:rounded-3xl p-4 md:p-5 md:col-span-1 md:row-span-2 flex flex-col overflow-hidden">
          <AboutCard />
        </section>

        {/* GitHub & Stats Card */}
        <section className="bento-item glass rounded-2xl md:rounded-3xl p-4 md:p-5 md:col-span-2 md:row-span-1 flex flex-col overflow-hidden">
          <StatsCard />
        </section>
      </main>
    </div>
  );
}

export default App;
