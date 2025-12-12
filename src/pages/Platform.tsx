import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useBooking } from '../context/BookingContext';
import { BookOpen, Award, BarChart2, Gamepad2, Layers, Smartphone, Check } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Learning & Training',
    desc: 'Upload SCORM/xAPI, create pathways, host live classes, or build blended programs.'
  },
  {
    icon: Award,
    title: 'Credentials',
    desc: 'Award badges, certificates, and verifiable transcripts.'
  },
  {
    icon: BarChart2,
    title: 'Analytics',
    desc: 'Dashboards, heatmaps, and ROI tracking to prove program impact.'
  },
  {
    icon: Gamepad2,
    title: 'Gamification',
    desc: 'Boost engagement with points, badges, and leaderboards.'
  },
  {
    icon: Layers,
    title: 'Integrations',
    desc: 'Works with HRIS, payroll, Teams, Zoom, Microsoft, Slack, and more.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    desc: 'Anytime, anywhere access—even offline.'
  }
];

export const Platform = () => {
  const { openBooking } = useBooking();

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-navy text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-lime/30 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6">
            One Cloud. <span className="text-lime">Endless Possibilities.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            EMPORIA unites learning, credentialing, analytics, and career placement—all in a single, scalable platform.
          </p>
          <div className="flex justify-center gap-4">
             <Button size="lg" onClick={openBooking}>Request Demo</Button>
          </div>
        </div>
      </div>

      {/* Overview */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-6">
              No need for multiple tools.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              EMPORIA integrates learning, certification, analytics, and job-matching to create a seamless experience for learners and organizations. Stop stitching together disparate systems and start building a unified workforce strategy.
            </p>
            <ul className="space-y-4">
              {['Unified User Experience', 'Single Sign-On (SSO)', 'Centralized Data Lake'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-lime/20 flex items-center justify-center text-navy">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-navy/5 rounded-3xl transform rotate-3" />
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" 
               alt="Dashboard Analytics" 
               className="relative rounded-2xl shadow-2xl border border-gray-200"
             />
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section background="cool-grey">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy">Platform Capabilities</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-lime mb-6">
                <feat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{feat.title}</h3>
              <p className="text-gray-600">{feat.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy" className="text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-6">See the platform in action.</h2>
        <Button size="lg" className="bg-lime text-navy hover:bg-lime-hover" onClick={openBooking}>Book a Demo</Button>
      </Section>
    </div>
  );
};
