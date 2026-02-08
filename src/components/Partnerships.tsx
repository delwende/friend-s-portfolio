import { Globe, Building2, Users, Handshake } from "lucide-react";

const Partnerships = () => {
  const partnerships = [
    {
      category: "UN Agencies",
      partners: ["FAO", "IFAD", "UNDP", "WFP"],
      icon: Globe,
    },
    {
      category: "Multilateral Development Banks",
      partners: ["World Bank"],
      icon: Building2,
    },
    {
      category: "Regional Organizations",
      partners: ["African Union-IAPSC", "CORAF/ECOWAS"],
      icon: Users,
    },
    {
      category: "CGIAR Centers",
      partners: ["CIP", "IITA", "CIMMYT"],
      icon: Handshake,
    },
    {
      category: "Bilateral Donors",
      partners: ["USAID", "NORAD"],
      icon: Building2,
    },
    {
      category: "Foundations",
      partners: ["Bill & Melinda Gates Foundation"],
      icon: Handshake,
    },
    {
      category: "National Research Institutions",
      partners: ["INERA (Burkina Faso)", "INRAN (Niger)", "CSIR (Ghana)", "TPHPA (Tanzania)", "RECA (Niger)", "KEPHIS (Kenya)", "TARI (Tanzania)"],
      icon: Building2,
    },
    {
      category: "NGO Partners",
      partners: ["Mercy Corps", "VITA", "CARE International"],
      icon: Users,
    },
  ];

  const geographicExpertise = {
    "West Africa": ["Burkina Faso", "Côte d'Ivoire", "Niger", "Mali", "Ghana"],
    "Central Africa": ["Democratic Republic of Congo", "Chad", "Cameroon", "Gabon"],
    "East Africa": ["Kenya", "Uganda", "Tanzania", "Ethiopia"],
    "Southern Africa": ["Mozambique", "Madagascar"],
    "Other": ["Honduras", "Nepal"],
  };

  return (
    <section id="partnerships" className="bg-secondary/30">
      <div className="section-container">
        <div className="section-divider" />
        <h2 className="section-title">Partnerships & Geographic Expertise</h2>

        {/* Key Partnerships */}
        <div className="mb-12">
          <h3 className="font-serif text-xl font-medium text-foreground mb-6">
            Key Institutional Partnerships
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnerships.map((group) => (
              <div
                key={group.category}
                className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <group.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {group.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.partners.map((partner) => (
                    <span
                      key={partner}
                      className="px-2 py-0.5 bg-secondary text-xs text-muted-foreground rounded"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Expertise */}
        <div>
          <h3 className="font-serif text-xl font-medium text-foreground mb-6">
            Geographic Expertise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.entries(geographicExpertise).map(([region, countries]) => (
              <div
                key={region}
                className="p-4 bg-card rounded-xl border border-border/50"
              >
                <h4 className="text-sm font-semibold text-primary mb-3">
                  {region}
                </h4>
                <ul className="space-y-1">
                  {countries.map((country) => (
                    <li key={country} className="text-sm text-muted-foreground">
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
