import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Director & Research Assistant Professor",
      organization: "The Pennsylvania State University",
      subtitle: "USAID Innovation Lab for Current & Emerging Threats to Crops",
      period: "October 2021 – Present",
      location: "State College, Pennsylvania",
      highlights: [
        "Lead strategic direction and partnership development for climate resilience initiatives across 12 Sub-Saharan African countries",
        "Oversee $15+ million portfolio across USAID, NORAD, Gates Foundation, and bilateral donors",
        "Manage cross-functional teams of 50+ staff including agronomists, M&E specialists, and field coordinators",
        "Core team member on $39 million USAID Feed the Future Innovation Lab proposal",
      ],
    },
    {
      title: "Digital Agriculture Extension Officer & Post-Doctoral Scholar",
      organization: "The Pennsylvania State University – PlantVillage / FAO",
      subtitle: "Desert Locust Emergency Response",
      period: "January 2020 – September 2021",
      location: "East Africa & West/Central Africa",
      highlights: [
        "Coordinated FAO Desert Locust emergency response protecting 2+ million households",
        "Deployed AI-powered surveillance systems and crop disease diagnostic applications",
        "Supported agricultural livelihood interventions for 15,000+ internally displaced populations",
      ],
    },
    {
      title: "Agriculture Research Technologist",
      organization: "The Pennsylvania State University",
      period: "June 2014 – December 2019",
      location: "State College, PA & Burkina Faso",
      highlights: [
        "Conducted agricultural research on viral diseases affecting vegetable and root crop production",
        "Developed diagnostic protocols adopted by national plant protection organizations in 5 countries",
        "Built research partnerships and trained 100+ local researchers",
      ],
    },
    {
      title: "Research Assistant",
      organization: "CNRST/INERA – Institut de l'Environnement et de Recherches Agricoles",
      period: "February 2010 – March 2014",
      location: "Ouagadougou, Burkina Faso",
      highlights: [
        "Conducted field research on crop diseases in smallholder vegetable production systems",
        "Engaged with farming communities across 8 provinces for participatory research",
      ],
    },
  ];

  const education = [
    {
      degree: "Doctor of Philosophy (PhD)",
      field: "Rural Development & Plant Pathology",
      institution: "Université Nazi Boni, Bobo-Dioulasso, Burkina Faso",
      note: "Co-supervised by The Pennsylvania State University, USA",
      year: "2019",
    },
    {
      degree: "Master of Science",
      field: "Microbial and Cellular Biotechnologies",
      institution: "Université Joseph Ki-Zerbo, Ouagadougou, Burkina Faso",
      year: "2012",
    },
    {
      degree: "Bachelor of Science",
      field: "Biochemistry and Applied Microbiology",
      institution: "Université Joseph Ki-Zerbo, Ouagadougou, Burkina Faso",
      year: "2009",
    },
  ];

  return (
    <section id="experience" className="bg-background">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">Experience & Education</h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
              <Briefcase className="w-5 h-5 text-primary" />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative pl-6 border-l-2 border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                  
                  <h4 className="font-serif text-lg font-medium text-foreground">
                    {exp.title}
                  </h4>
                  <p className="text-primary font-medium text-sm mt-1">
                    {exp.organization}
                  </p>
                  {exp.subtitle && (
                    <p className="text-muted-foreground text-sm">{exp.subtitle}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  
                  <ul className="mt-3 space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="p-4 bg-card rounded-lg border border-border/50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-serif font-medium text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-primary mt-1">{edu.field}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {edu.institution}
                      </p>
                      {edu.note && (
                        <p className="text-xs text-muted-foreground italic mt-1">
                          {edu.note}
                        </p>
                      )}
                    </div>
                    <span className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">
                      {edu.year}
                    </span>
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

export default Experience;
