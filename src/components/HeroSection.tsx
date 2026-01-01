import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/hero-photo.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content - Left Side */}
          <div className="text-center lg:text-left max-w-xl order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
              <span className="text-lg">👋</span>
              <span className="text-sm text-primary font-medium">Welcome to my portfolio</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-2 animate-fade-in opacity-0 italic" style={{ animationDelay: "0.4s" }}>
              Hi, I'm
            </h1>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
              <span className="gradient-text">Preethi.S</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              Computer Science & Design Student
            </p>
            
            <p className="text-muted-foreground mb-8 animate-fade-in opacity-0 leading-relaxed" style={{ animationDelay: "0.8s" }}>
              Crafting digital solutions with passion and creativity. Turning ideas into reality, one line of code at a time ✨
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
              <Button asChild size="lg" className="glow-primary group bg-gradient-to-r from-primary to-accent hover:opacity-90 px-8">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 px-8">
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">3+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">2nd</p>
                <p className="text-sm text-muted-foreground">Year Student</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">6+</p>
                <p className="text-sm text-muted-foreground">Tech Skills</p>
              </div>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="relative animate-fade-in opacity-0 order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Decorative circle behind */}
              <div className="absolute -inset-8 border border-primary/10 rounded-full" />
              <div className="absolute -inset-16 border border-primary/5 rounded-full" />
              
              {/* Main image container */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={heroPhoto}
                  alt="Preethi.S"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Developer badge */}
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-primary-foreground flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Developer
              </div>

              {/* Decorative gradient bar at bottom */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
