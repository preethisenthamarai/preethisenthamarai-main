import { Code, Globe, Lightbulb, Wrench, Database, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "C", "C++", "Basic Python"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "Basic JavaScript"],
  },
  {
    title: "Concepts",
    icon: Lightbulb,
    skills: ["Object-Oriented Programming (OOP)", "Data Structures (Basics)"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL (Basics)"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Time Management", "Team Collaboration"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I've been working with
          </p>
        </div>

        {/* Orbital Skills Layout */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Rotating Orbital */}
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] flex-shrink-0">
              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-accent opacity-80 blur-xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                <Code className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground" />
              </div>

              {/* Orbit Ring 1 */}
              <div className="absolute inset-[60px] md:inset-[80px] rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]">
                {skillCategories.slice(0, 3).map((category, i) => {
                  const angle = (i * 120) * (Math.PI / 180);
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);
                  return (
                    <div
                      key={category.title}
                      className="absolute w-12 h-12 md:w-14 md:h-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-card border border-border shadow-lg flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform animate-[spin_20s_linear_infinite_reverse]"
                      style={{ left: `${x}%`, top: `${y}%` }}
                      title={category.title}
                    >
                      <category.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                  );
                })}
              </div>

              {/* Orbit Ring 2 */}
              <div className="absolute inset-[15px] md:inset-[20px] rounded-full border border-accent/20 animate-[spin_30s_linear_infinite_reverse]">
                {skillCategories.slice(3, 6).map((category, i) => {
                  const angle = (i * 120 + 60) * (Math.PI / 180);
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);
                  return (
                    <div
                      key={category.title}
                      className="absolute w-12 h-12 md:w-14 md:h-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-card border border-border shadow-lg flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform animate-[spin_30s_linear_infinite]"
                      style={{ left: `${x}%`, top: `${y}%` }}
                      title={category.title}
                    >
                      <category.icon className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Skill Cards */}
            <div className="flex-1 grid sm:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="bg-card/80 backdrop-blur-sm p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-sm">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
