import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Preethi.S | B.E. Computer Science & Design Student Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Preethi.S, a B.E. Computer Science and Design student at Easwari Engineering College. Skilled in Java, C++, web development, and passionate about building meaningful applications."
        />
        <meta
          name="keywords"
          content="Preethi.S, portfolio, computer science, web developer, Java, software development, Easwari Engineering College"
        />
        <link rel="canonical" href="https://preethi-portfolio.lovable.app" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <JourneySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
