import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Get in Touch
          </h2>
          
          <p className="text-primary-foreground/80 mb-10">
            Interested in collaboration, research partnerships, or speaking engagements?
            I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:rimserge@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-full hover:opacity-90 transition-opacity font-medium"
            >
              <Mail className="w-4 h-4" />
              rimserge@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/rimnoma-s-ouedraogo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 transition-colors font-medium"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Pennsylvania, USA | Burkina Faso
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +1-814-933-6534
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
