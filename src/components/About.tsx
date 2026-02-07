import { Globe, Users, Sprout, Award } from "lucide-react";

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
      description: "Smallholder farmers impacted",
    },
    {
      icon: Sprout,
      label: "13+ Years",
      description: "Experience in agricultural development",
    },
    {
      icon: Award,
      label: "$15M+",
      description: "Portfolio under management",
    },
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
              Agricultural development professional with over 13 years of experience in 
              <span className="text-primary font-medium"> climate resilience programming</span>, 
              food systems strengthening, and rural development across Sub-Saharan Africa.
            </p>
            
            <p className="text-base leading-relaxed text-muted-foreground">
              Currently serving as Associate Director of Penn State's USAID-funded Innovation Lab 
              for Current and Emerging Threats to Crops, managing multi-country portfolios across 
              12 African countries. Track record of partnership development with international 
              organizations including FAO, IFAD, World Bank, CGIAR centers, and national research 
              institutions.
            </p>
            
            <p className="text-base leading-relaxed text-muted-foreground">
              Extensive field experience in West, Central, and East Africa, with expertise in 
              crisis response programming and capacity strengthening for vulnerable populations. 
              Native French speaker with proficiency in English, Mooré, and Bambara/Dioula. 
              Dual nationality (Burkina Faso/USA).
            </p>

            {/* Languages */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["French (Native)", "English (Fluent)", "Mooré (Native)", "Bambara/Dioula"].map((lang) => (
                  <span 
                    key={lang} 
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
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
