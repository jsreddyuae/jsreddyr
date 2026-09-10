import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SOC from "@/components/SOC";
import AIArchitecture from "@/components/AIArchitecture";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Hairline() {
  return <hr className="wrap hide-in-recruiter" style={{ border: "none", borderTop: "1px solid var(--line)" }} />;
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Hairline />
      <Skills />
      <Hairline />
      <div className="hide-in-recruiter">
        <SOC />
        <Hairline />
        <AIArchitecture />
        <Hairline />
      </div>
      <Projects />
      <Hairline />
      <Experience />
      <Hairline />
      <Certifications />
      <Hairline />
      <div className="hide-in-recruiter">
        <GitHubSection />
        <Hairline />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
