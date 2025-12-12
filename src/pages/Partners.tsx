import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Handshake, Download } from 'lucide-react';

const partners = [
  "Ministry of Education",
  "University of Guyana",
  "Technical Institutes",
  "Citizens Bank",
  "ExxonMobil",
  "Banks DIH",
  "CARICOM"
];

export const Partners = () => {
  return (
    <div className="pt-20">
      <div className="bg-navy text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           {/* Abstract Network Graphic Placeholder */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-20 h-20 bg-lime rounded-full flex items-center justify-center mx-auto mb-8 text-navy">
            <Handshake className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-6">Powered by Partnerships.</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            EMPORIA thrives through collaboration with government, enterprises, NGOs, and international organizations.
          </p>
        </div>
      </div>

      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">Featured Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Together, we’re building Guyana’s workforce for the future. EMPORIA connects local institutions with global partners to deliver world-class skills training.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((p, i) => (
            <div key={i} className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 hover:border-lime transition-colors group">
              <span className="font-heading font-bold text-navy/50 group-hover:text-navy text-center px-4">{p}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button size="lg">Become a Partner</Button>
          <Button variant="outline" size="lg">
            <Download className="w-4 h-4 mr-2" />
            Download Partnership Kit
          </Button>
        </div>
      </Section>
    </div>
  );
};
