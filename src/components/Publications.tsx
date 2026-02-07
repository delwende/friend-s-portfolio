import { BookOpen, FileText, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      type: "Peer-Reviewed",
      description: "15+ peer-reviewed and conference papers in international agricultural journals, including Plant Disease, Phytopathology, and Agricultural Systems on viral diseases of crops, climate-smart agriculture, and sustainable farming practices.",
    },
    {
      type: "Technical Reports",
      description: "Technical reports and policy briefs for FAO, USAID, World Bank, and African Union on plant health surveillance, climate resilience programming, and agricultural development.",
    },
    {
      type: "Extension Materials",
      description: "Agricultural extension materials in French, English, Mooré, and Bambara/Dioula for smallholder farmer capacity building (distributed to 100,000+ farmers).",
    },
    {
      type: "Knowledge Products",
      description: "Contributor to IFAD and World Bank knowledge products on climate-smart agriculture and resilience programming in the Sahel region.",
    },
  ];

  return (
    <section id="publications" className="bg-secondary/30">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">Publications & Reports</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub) => (
            <div
              key={pub.type}
              className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {pub.type}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pub.description}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Publications List */}
        <div className="mt-12">
          <h3 className="font-serif text-xl font-medium text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Selected Publications
          </h3>
          
          <div className="space-y-4">
            {/* Placeholder publications - to be filled in */}
            <div className="p-4 bg-card rounded-lg border border-border/50 group hover:border-primary/30 transition-colors">
              <p className="text-muted-foreground text-sm italic">
                Publication entries can be added here. Each entry can include title, authors, journal, year, and DOI link.
              </p>
            </div>
          </div>

          {/* Note for adding publications */}
          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-dashed border-primary/20">
            <p className="text-sm text-muted-foreground">
              💡 <span className="font-medium text-foreground">Tip:</span> Add your specific publications by editing 
              <code className="mx-1 px-2 py-0.5 bg-secondary rounded text-xs">src/components/Publications.tsx</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
