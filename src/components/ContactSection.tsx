import { Mail, Linkedin, Github, Briefcase, Code2, Users, MessageSquare, Sparkles, Lightbulb } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Let's Connect
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  I'd love to hear from you!
                </p>

                {/* Available For */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      Available For:
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl border border-border">
                      <div className="p-2 bg-orange-500/10 rounded-lg">
                        <Briefcase className="h-4 w-4 text-orange-500" />
                      </div>
                      <span className="text-sm text-foreground font-medium">Internship Opportunities</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl border border-border">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Code2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground font-medium">Project Collaboration</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl border border-border">
                      <div className="p-2 bg-pink-500/10 rounded-lg">
                        <Users className="h-4 w-4 text-pink-500" />
                      </div>
                      <span className="text-sm text-foreground font-medium">Tech Communities</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl border border-border">
                      <div className="p-2 bg-violet-500/10 rounded-lg">
                        <MessageSquare className="h-4 w-4 text-violet-500" />
                      </div>
                      <span className="text-sm text-foreground font-medium">Mentorship</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Links */}
              <div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-4">
                  Reach me via:
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:preethisenthamarai23@gmail.com"
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/80 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-orange-500 rounded-xl shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">preethisenthamarai23@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/preethi-23122006-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/80 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-blue-500 rounded-xl shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">preethi-23122006-tech</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/preethisenthamarai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/80 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">GitHub</p>
                      <p className="text-sm text-muted-foreground">preethisenthamarai</p>
                    </div>
                  </a>
                </div>

                {/* Quick Response Note */}
                <div className="mt-6 p-4 bg-secondary/30 rounded-xl border border-border flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Quick Response:</span> I typically respond within 24-48 hours. Looking forward to connecting with you!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Tagline */}
          <p className="text-center text-muted-foreground mt-8">
            Open to opportunities • Available for collaboration • Let's build something amazing together ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
