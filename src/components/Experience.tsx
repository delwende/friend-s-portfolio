import { Briefcase, GraduationCap, Calendar, MapPin, Heart } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Director & Research Assistant Professor",
      organization: "The Pennsylvania State University",
      subtitle: "USAID Innovation Lab for Current & Emerging Threats to Crops",
      period: "October 2021 – Present",
      location: "State College, Pennsylvania (frequent travel to Sub-Saharan Africa)",
      highlights: [
        "Lead strategic direction, programme implementation, and partnership development for climate resilience initiatives spanning 12 Sub-Saharan African countries",
        "Oversee $39+ million portfolio across USAID, NORAD, Gates Foundation, and bilateral donors",
        "Manage cross-functional teams of 50+ staff including agronomists, M&E specialists, and field coordinators",
        "Core team member on $39 million USAID Feed the Future Innovation Lab proposal, contributing to technical design and partnership strategy",
        "Secured $15M+ in additional competitive funding through subsequent proposals (75% success rate)",
        "Maintained 100% donor compliance across all managed portfolios; implemented results-based management systems",
        "Delivered technical presentations to IFAD West Africa Division and World Bank Sahel teams on climate-smart agricultural innovations",
        "Established strategic partnerships with INERA-Burkina Faso, INRAN-Niger, CSIR-Ghana and CGIAR centers (CIP, IITA, CIMMYT)",
        "Scaled climate-smart agricultural technologies reaching 500,000+ smallholder farmers across 7 countries",
      ],
    },
    {
      title: "Digital Agriculture Extension Officer & Post-Doctoral Scholar",
      organization: "The Pennsylvania State University – PlantVillage / FAO",
      subtitle: "Desert Locust Emergency Response",
      period: "January 2020 – September 2021",
      location: "East Africa & West/Central Africa (multi-country)",
      highlights: [
        "Coordinated FAO Desert Locust emergency response deployment of AI-powered surveillance systems protecting agricultural assets for 2+ million households",
        "Partnered with Mercy Corps Kenya to integrate digital early warning systems with humanitarian response programming",
        "Supported PlantVillage-Burkina Faso on agricultural livelihood interventions for 15,000+ internally displaced populations",
        "Leveraged AI-powered crop disease diagnostic applications adopted by 50,000+ farmers and extension agents across 8 countries",
        "Collaborated with VITA Ethiopia on climate resilience programming supporting vulnerable farming communities",
      ],
    },
    {
      title: "Agriculture Research Technologist",
      organization: "The Pennsylvania State University",
      period: "June 2014 – December 2019",
      location: "State College, PA & Burkina Faso",
      highlights: [
        "Conducted agricultural research across Burkina Faso and Côte d'Ivoire focused on viral diseases affecting vegetable and root crop production",
        "Developed diagnostic protocols for plant diseases adopted by national plant protection organizations in 5 countries",
        "Built research partnerships with INERA Burkina Faso and regional institutions, contributing to capacity building of 100+ local researchers",
        "Authored peer-reviewed publications on plant pathology and sustainable agriculture practices",
      ],
    },
    {
      title: "Research Assistant",
      organization: "CNRST/INERA – Institut de l'Environnement et de Recherches Agricoles",
      period: "February 2010 – March 2014",
      location: "Ouagadougou, Burkina Faso",
      highlights: [
        "Conducted field research on crop diseases affecting smallholder vegetable production systems",
        "Collaborated with Ministry of Agriculture on agricultural extension programming",
        "Engaged with rural farming communities across 8 provinces for participatory research and technology adoption",
      ],
    },
  ];

  const volunteerExperience = [
    {
      title: "Technical Advisor & Volunteer Trainer",
      organization: "UFED-Relwende Women's Cooperative",
      period: "2018 – Present",
      location: "Kaya & Sanmatenga Province, Burkina Faso",
      highlights: [
        "Provide technical and business development support to women-led cooperative of 200+ members specializing in non-timber forest product transformation",
        "Designed training modules on product transformation, quality control, and market linkage strategies",
        "Supported internally displaced women in conflict-affected Centre-Nord region in establishing livelihood activities",
        "Enhanced market access through participation in regional trade fairs, resulting in 40% revenue increase",
      ],
    },
    {
      title: "Worker-Member",
      organization: "PlantVillage+ Inc. Cooperative",
      period: "January 2026 – Present",
      location: "International",
      highlights: [
        "Contributing member of an international cooperative focused on digital agriculture solutions and sustainable farming systems innovation",
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

  const professionalDevelopment = [
    { course: "Science and Engineering of Climate Change", institution: "EDHEC Business School", year: "2025" },
    { course: "Knowledge Management for Emergency Programming", institution: "FAO", year: "2025" },
    { course: "International Organizations Management", institution: "Université de Genève", year: "2025" },
    { course: "Results-Based Management for Development Programmes", institution: "UNDP", year: "2024" },
    { course: "Climate Risk Assessment and Adaptation Planning", institution: "World Bank Institute", year: "2023" },
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

            {/* Volunteer Experience */}
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6 mt-12">
              <Heart className="w-5 h-5 text-primary" />
              Volunteer Experience
            </h3>
            
            <div className="space-y-8">
              {volunteerExperience.map((exp, index) => (
                <div 
                  key={index}
                  className="relative pl-6 border-l-2 border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary/60" />
                  
                  <h4 className="font-serif text-lg font-medium text-foreground">
                    {exp.title}
                  </h4>
                  <p className="text-primary font-medium text-sm mt-1">
                    {exp.organization}
                  </p>
                  
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

          {/* Education & Professional Development */}
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

            {/* Professional Development */}
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6 mt-10">
              <GraduationCap className="w-5 h-5 text-primary" />
              Professional Development
            </h3>
            
            <div className="space-y-3">
              {professionalDevelopment.map((item, index) => (
                <div 
                  key={index}
                  className="p-3 bg-card rounded-lg border border-border/50"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.course}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground shrink-0">
                      {item.year}
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
