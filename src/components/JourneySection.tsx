import { useState } from "react";
import { Trophy, Star, GraduationCap, Rocket } from "lucide-react";
import achievementCertificates from "@/assets/achievement-certificates.jpeg";
import achievementCeremony from "@/assets/achievement-ceremony.jpeg";
import firstHackathon from "@/assets/first-hackathon.png";

type FilterType = "all" | "education" | "achievements";

interface JourneyItem {
  id: string;
  type: "education" | "achievement";
  year: string;
  title: string;
  organization: string;
  description: string;
  skills: string[];
  highlights: string[];
  images?: string[];
  icon: React.ReactNode;
}

const journeyItems: JourneyItem[] = [
  {
    id: "btech",
    type: "education",
    year: "2024 - 2028",
    title: "B.E. Computer Science & Design",
    organization: "Easwari Engineering College",
    description: "Pursuing a specialized degree focusing on the intersection of computer science and design thinking. Building strong foundations in algorithms, data structures, software engineering, and user-centered design principles.",
    skills: ["Java", "Python", "DSA", "UI/UX Design"],
    highlights: [
      "Maintained consistent academic performance",
      "Active participation in technical events",
      "Completed multiple hands-on projects"
    ],
    icon: <GraduationCap className="h-5 w-5" />
  },
  {
    id: "idea-hunt",
    type: "achievement",
    year: "2025",
    title: "Project Pitch Selection",
    organization: "Team Collaboration",
    description: "Collaborated with a team to pitch a project idea, which was selected among multiple proposals for execution. Demonstrated strong teamwork, clear communication, and innovative thinking.",
    skills: ["Team Leadership", "Innovation", "Communication"],
    highlights: [
      "Selected among 15+ project proposals",
      "Led the presentation and demo",
      "Enhanced project planning skills"
    ],
    images: [achievementCeremony, achievementCertificates],
    icon: <Trophy className="h-5 w-5" />
  },
  {
    id: "first-hackathon",
    type: "achievement",
    year: "2025",
    title: "My First Hackathon",
    organization: "Easwari Engineering College",
    description: "An insightful and exciting experience that was deeply impactful on my career journey. This hackathon sparked my motivation, built my confidence, and ignited a passion for building real-world solutions.",
    skills: ["Problem Solving", "Team Work", "Innovation", "Time Management"],
    highlights: [
      "Sparked motivation for tech innovation",
      "Built confidence in competitive environments",
      "Discovered passion for real-world solutions"
    ],
    images: [firstHackathon],
    icon: <Rocket className="h-5 w-5" />
  }
];

const JourneySection = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredItems = journeyItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "education") return item.type === "education";
    if (filter === "achievements") return item.type === "achievement";
    return true;
  });

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Education", value: "education" },
    { label: "Achievements", value: "achievements" },
  ];

  return (
    <section id="journey" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 italic">
            My Journey
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From curious beginner to passionate developer - here's how I got here
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f.value
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line - centered */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-accent" />

          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-12 md:mb-16 pl-12 md:pl-0 ${
                index % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
              }`}
            >
              {/* Timeline node */}
              <div className={`absolute w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${
                item.type === "education" 
                  ? "from-primary to-primary/70" 
                  : "from-amber-500 to-orange-500"
              } rounded-full flex items-center justify-center text-white shadow-lg z-10 left-0 md:left-1/2 md:-translate-x-1/2`}>
                {item.icon}
              </div>

              {/* Card */}
              <div className={`bg-card/90 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 ${
                index % 2 === 0 ? "md:mr-8" : "md:ml-8"
              }`}>
                {/* Year badge */}
                <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
                  item.type === "education"
                    ? "bg-primary/20 text-primary"
                    : "bg-amber-500/20 text-amber-400"
                }`}>
                  {item.year}
                </div>

                <h3 className={`font-heading text-xl font-bold mb-2 ${
                  item.type === "education" ? "text-primary" : "text-foreground"
                }`}>
                  {item.title}
                </h3>
                
                <p className="text-primary/80 text-sm font-medium mb-3">
                  {item.organization}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full border border-primary/30 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-4" />

                {/* Highlights */}
                <div className="space-y-2">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm">
                      <Star className="h-3.5 w-3.5 text-yellow-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Images - Only for achievements */}
                {item.images && item.images.length > 0 && (
                  <div className={`grid gap-3 mt-4 ${item.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {item.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="overflow-hidden rounded-lg border border-border group/img"
                      >
                        <img
                          src={image}
                          alt={`${item.title} - Image ${imgIndex + 1}`}
                          className="w-full h-24 object-cover group-hover/img:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
