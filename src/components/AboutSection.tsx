import { GraduationCap, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
                <img
                  src={profilePhoto}
                  alt="Preethi.S - Computer Science Student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Computer Science & Design Student
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about creating things that make life easier, more enjoyable, or just a little more interesting. I love turning ideas into real solutions, learning new skills along the way, and taking on challenges that help me grow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every project I work on is an opportunity to explore, experiment, and make a meaningful impact. I enjoy collaborating with others, sharing ideas, and finding creative ways to solve problems while continuously learning and improving.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Problem Solver", "Team Player", "Quick Learner", "Detail-Oriented"].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                >
                  {trait}
                </span>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* University Card */}
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/80 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-default group">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">Easwari Engineering College</p>
                  <p className="text-xs text-muted-foreground">B.E. Computer Science & Design - 2nd Year</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/80 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-default group">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">Chennai, India</p>
                  <p className="text-xs text-muted-foreground">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
