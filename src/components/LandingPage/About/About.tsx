import { Eye, Shield, Users, Zap } from "lucide-react";

const About: React.FC = () => {
  const principles = [
    {
      icon: Eye,
      title: "Strategic Vision",
      description:
        "Every communication decision backed by deep political insight and market intelligence.",
    },
    {
      icon: Shield,
      title: "Absolute Discretion",
      description:
        "Confidentiality and trust form the foundation of every client relationship.",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description:
        "24/7 crisis support with immediate strategic intervention capabilities.",
    },
    {
      icon: Users,
      title: "Proven Results",
      description:
        "Track record of successful campaigns and reputation management across all political levels.",
    },
  ];
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black/80">
              Every Word Matters in Politics
            </h2>
            <p className="text-muted-foreground mb-8">
              In the high-stakes world of political communications, precision,
              timing, and strategic thinking separate the successful from the
              forgotten.
            </p>

            <div className="space-y-6 mb-8">
              {principles.map((principle, index) => {
                const IconComponent = principle.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-primary/20 border-l-4 border-primary p-6 rounded-r-lg shadow-2xl">
              <p className="text-black/80 font-medium">
                "SPINE doesn't just manage communications – we architect
                political narratives that shape public opinion and drive
                legislative success."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/aboutImg.jpg"
                alt="Professional Political Meeting"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-card shadow-2xl rounded-xl p-6 border border-border">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">17+</div>
                  <div className="text-sm text-muted-foreground">Campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
