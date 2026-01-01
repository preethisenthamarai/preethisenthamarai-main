import { Heart, Shield, Ambulance, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import heartDiseaseScreenshot from "@/assets/heart-disease-screenshot.jpeg";
import emergencyMedicalScreenshot from "@/assets/emergency-medical-screenshot.png";
import policeRecordScreenshot from "@/assets/police-record-screenshot.png";

const projects = [
  {
    title: "Heart Disease Prediction using ML",
    description:
      "A machine learning application that predicts heart disease risk based on patient health data. Analyzes vital signs and medical history to provide early detection insights.",
    icon: Heart,
    tags: ["Python", "AI/ML", "Jupyter Notebook", "CSV", "Bash"],
    github: "https://github.com/preethisenthamarai",
    screenshot: heartDiseaseScreenshot,
  },
  {
    title: "Police Record Management System",
    description:
      "A comprehensive system to efficiently store and manage police records. Streamlines FIR management, criminal records, and officer tracking for law enforcement.",
    icon: Shield,
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/preethisenthamarai/officer-logbook",
    screenshot: policeRecordScreenshot,
  },
  {
    title: "Emergency Medical Aid App",
    description:
      "An app providing quick medical assistance during emergencies. Connects users with medical resources, volunteer dashboards, and healthcare providers.",
    icon: Ambulance,
    tags: ["Glide", "No-Code"],
    github: "https://github.com/preethisenthamarai/medical-app",
    screenshot: emergencyMedicalScreenshot,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl border border-border overflow-hidden card-glow"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Screenshot */}
              <div className="relative h-48 overflow-hidden bg-secondary/50">
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
