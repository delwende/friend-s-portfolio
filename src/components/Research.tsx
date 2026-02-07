import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Image, Presentation, ExternalLink } from "lucide-react";

interface ResearchItem {
  id: string;
  title: string;
  description: string;
  type: "paper" | "photo" | "presentation";
  year?: string;
  link?: string;
  image?: string;
}

const Research = () => {
  // Placeholder data - your friend can update this
  const [items] = useState<ResearchItem[]>([
    {
      id: "1",
      title: "Climate-Smart Agricultural Technologies for Smallholder Resilience",
      description: "Technical presentations delivered to IFAD West Africa Division and World Bank Sahel teams on climate-smart agricultural innovations for smallholder resilience in Burkina Faso, Niger, Chad, Mali, and Côte d'Ivoire.",
      type: "presentation",
      year: "2023",
    },
    {
      id: "2",
      title: "Viral Diseases in Vegetable and Root Crop Production Systems",
      description: "Research conducted across Burkina Faso and Côte d'Ivoire focused on viral diseases affecting vegetable and root crop production systems. Diagnostic protocols developed were adopted by national plant protection organizations in 5 countries.",
      type: "paper",
      year: "2019",
    },
    {
      id: "3",
      title: "AI-Powered Crop Disease Diagnostic Applications",
      description: "Collaborative work with WAVE network leveraging AI-powered crop disease diagnostic applications adopted by 50,000+ farmers and extension agents across 8 countries.",
      type: "paper",
      year: "2021",
    },
    {
      id: "4",
      title: "Bio-Circular Economy Models for Agricultural Waste",
      description: "Development of bio-circular economy models valorizing agricultural waste (crop residues, cashew husks, cocoa pods) for biochar production, reducing pesticide dependency by 35% while creating income opportunities.",
      type: "presentation",
      year: "2022",
    },
    {
      id: "5",
      title: "Desert Locust Emergency Response - FAO",
      description: "Coordination of FAO Desert Locust emergency response deployment of AI-powered surveillance systems protecting agricultural assets for 2+ million households in Kenya, Ethiopia, and Uganda.",
      type: "photo",
      year: "2020",
    },
  ]);

  const papers = items.filter((item) => item.type === "paper");
  const presentations = items.filter((item) => item.type === "presentation");
  const photos = items.filter((item) => item.type === "photo");

  const ResearchCard = ({ item }: { item: ResearchItem }) => (
    <div className="group p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {item.type === "paper" && <FileText className="w-4 h-4 text-primary" />}
            {item.type === "presentation" && <Presentation className="w-4 h-4 text-accent" />}
            {item.type === "photo" && <Image className="w-4 h-4 text-primary" />}
            {item.year && (
              <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                {item.year}
              </span>
            )}
          </div>
          <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="research" className="bg-background">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">Research</h2>
        
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Explore my research work including publications, presentations, and field documentation 
          from projects across Sub-Saharan Africa.
        </p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 bg-secondary/50">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              All
            </TabsTrigger>
            <TabsTrigger value="papers" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <FileText className="w-4 h-4 mr-2" />
              Papers
            </TabsTrigger>
            <TabsTrigger value="presentations" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Presentation className="w-4 h-4 mr-2" />
              Presentations
            </TabsTrigger>
            <TabsTrigger value="photos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Image className="w-4 h-4 mr-2" />
              Photos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {items.map((item) => (
              <ResearchCard key={item.id} item={item} />
            ))}
          </TabsContent>

          <TabsContent value="papers" className="space-y-4">
            {papers.length > 0 ? (
              papers.map((item) => <ResearchCard key={item.id} item={item} />)
            ) : (
              <p className="text-muted-foreground text-center py-8">No papers added yet.</p>
            )}
          </TabsContent>

          <TabsContent value="presentations" className="space-y-4">
            {presentations.length > 0 ? (
              presentations.map((item) => <ResearchCard key={item.id} item={item} />)
            ) : (
              <p className="text-muted-foreground text-center py-8">No presentations added yet.</p>
            )}
          </TabsContent>

          <TabsContent value="photos" className="space-y-4">
            {photos.length > 0 ? (
              photos.map((item) => <ResearchCard key={item.id} item={item} />)
            ) : (
              <p className="text-muted-foreground text-center py-8">No photos added yet.</p>
            )}
          </TabsContent>
        </Tabs>

        {/* Note for adding content */}
        <div className="mt-12 p-6 bg-secondary/30 rounded-xl border border-dashed border-primary/30">
          <p className="text-sm text-muted-foreground text-center">
            💡 <span className="font-medium text-foreground">Adding content:</span> Update the research items in 
            <code className="mx-1 px-2 py-0.5 bg-secondary rounded text-xs">src/components/Research.tsx</code>
            to add your papers, presentations, and photos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
