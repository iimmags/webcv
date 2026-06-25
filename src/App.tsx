import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { profile } from "./data/cv";

export default function App() {
  return (
    <div className="mx-auto max-w-6xl px-1 sm:px-4">
      <Hero />
      <main>
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name} · Built with React, TypeScript &amp; Tailwind CSS
      </footer>
    </div>
  );
}
