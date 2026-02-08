import { Mail, Linkedin, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-4 tracking-tight">
            Rimnoma Serge Ouedraogo
          </h1>
          
          {/* Title */}
          <p className="text-lg md:text-xl text-primary font-medium mb-2">
            PhD
          </p>
          
          {/* Role */}
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto font-light">
            Climate-Smart Agriculture & Research-for-Development Specialist
          </p>
          
          {/* Affiliation */}
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Associate Director – USAID Innovation Lab for Current & Emerging Threats to Crops
            <br />
            <span className="text-primary font-medium">The Pennsylvania State University</span>
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Pennsylvania, USA | Burkina Faso</span>
          </div>
          
          {/* Contact Links */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="mailto:rimserge@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
            <a 
              href="https://linkedin.com/in/rimnoma-s-ouedraogo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
