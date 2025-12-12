import { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useBooking } from '../context/BookingContext';
import { Building2, Globe2, GraduationCap, Users, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const sectors = [
  {
    id: 'gov',
    label: 'Government',
    icon: Building2,
    title: 'National Workforce Upskilling',
    desc: 'Empower civil servants and citizens with a centralized learning hub.',
    points: [
      'Civil service academies',
      'Safety and compliance (HSE, HACCP)',
      'Job-matching and apprenticeships',
      'Grant and scholarship tracking'
    ],
    image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'ent',
    label: 'Enterprise',
    icon: Globe2,
    title: 'Corporate Training at Scale',
    desc: 'Drive performance and compliance across your organization.',
    points: [
      'Onboarding pathways',
      'Sales & service enablement',
      'Skills mapping and succession planning',
      'Vendor/partner academies'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069'
  },
  {
    id: 'edu',
    label: 'Education',
    icon: GraduationCap,
    title: 'Modernizing Higher Ed',
    desc: 'Deliver blended learning and digital credentials.',
    points: [
      'Blended & online learning',
      'Micro-credentials and CE credits',
      'Proctoring & plagiarism tools',
      'Career services integration'
    ],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'ngo',
    label: 'Communities & NGOs',
    icon: Users,
    title: 'Grassroots Impact',
    desc: 'Tools for digital literacy and community development.',
    points: [
      'Digital literacy & entrepreneurship',
      'Youth & re-entry programs',
      'Volunteer training and tracking',
      'Donor impact reporting'
    ],
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2070'
  }
];

export const Solutions = () => {
  const [activeTab, setActiveTab] = useState('gov');
  const activeSector = sectors.find(s => s.id === activeTab) || sectors[0];
  const { openBooking } = useBooking();

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-cool-grey py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold text-navy mb-6">Tailored for Every Sector.</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From ministries to multinationals, EMPORIA adapts to your mission.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <Section background="white">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveTab(sector.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all text-lg",
                activeTab === sector.id 
                  ? "bg-navy text-lime shadow-lg scale-105" 
                  : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
              )}
            >
              <sector.icon className="w-5 h-5" />
              {sector.label}
            </button>
          ))}
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl font-heading font-bold text-navy mb-4">{activeSector.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{activeSector.desc}</p>
                
                <div className="space-y-4 mb-10">
                  {activeSector.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-lime shrink-0" />
                      <span className="text-navy font-medium text-lg">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button onClick={openBooking}>Request Pilot</Button>
                  <Button variant="outline">Download Brief</Button>
                </div>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={activeSector.image} 
                  alt={activeSector.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>
    </div>
  );
};
