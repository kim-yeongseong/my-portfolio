import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Studies from "@/components/Studies";
import EducationSection from "@/components/EducationSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Studies />
      <EducationSection />
      <Contact />
      <Footer />
    </div>
  );
}
