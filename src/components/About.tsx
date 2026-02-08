import { Globe, Users, Sprout, Award, Target, Handshake, BarChart3, BookOpen } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Globe,
      label: "12+ Countries",
      description: "Program reach across Sub-Saharan Africa",
    },
    {
      icon: Users,
      label: "500,000+",
      description: "Smallholder farmers impacted directly",
    },
    {
      icon: Sprout,
      label: "13+ Years",
      description: "Experience in agricultural development",
    },
    {
      icon: Award,
      label: "$39M+",
      description: "Portfolio under management",
    },
  ];

  const competencies = [
    "Programme Design & Implementation",
    "Climate-Smart Agriculture",
    "Value Chain Development",
    "M&E Frameworks",
    "Crisis Response Programming",
    "Stakeholder Engagement",
    "Capacity Strengthening",
    "Resource Mobilization",
    "Donor Compliance & Reporting",
    "Knowledge Management",
  ];

  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">About</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Bio */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              Multilingual agricultural research-for-development professional with 13+ years of experience leading 
              <span className="text-primary font-medium"> climate-smart agriculture programmes</span>, 
              technology transfer, and partnership development across Sub-Saharan Africa.
            </p>
            
            <p className="text-base leading-relaxed text-muted-foreground">
              As Associate Director of a USAID Innovation Lab, managed $39+ million multi-country research 
              portfolios spanning 12 countries, coordinating partnerships with CGIAR centers (CIP, IITA, CIMMYT), 
              national agricultural research systems, and UN agencies. Proven experience collaborating with 
              IFAD West and Central Africa Division and World Bank Sahel teams on climate resilience technologies 
              and rural development approaches.
            </p>
            
            <p className="text-base leading-relaxed text-muted-foreground">
              Track record of translating agricultural research into scalable development solutions, with 
              technologies reaching directly over 500,000 smallholder farmers and 100% donor compliance across 
              USAID, World Bank, NORAD, and Gates Foundation funding streams. Expertise in knowledge management, 
              evidence generation, capacity strengthening of research partners, and crisis response programming 
              in conflict-affected settings. Native French speaker with extensive field experience across 
              francophone and anglophone Africa. Dual Burkinabè-American nationality.
            </p>

            {/* Core Competencies */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {competencies.map((comp) => (
                  <span 
                    key={comp} 
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["French (Native)", "English (Fluent – C1)", "Mooré (Native)", "Bambara/Dioula (Proficient)"].map((lang) => (
                  <span 
                    key={lang} 
                    className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-border/50"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item) => (
              <div 
                key={item.label}
                className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
