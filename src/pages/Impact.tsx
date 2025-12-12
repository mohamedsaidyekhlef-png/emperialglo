import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import CountUp from 'react-countup';
import { FileText, Play } from 'lucide-react';

const metrics = [
  { value: 5000, label: 'Jobs Facilitated', suffix: '+' },
  { value: 20000, label: 'Learners Certified', suffix: '+' },
  { value: 5, label: 'Year GDP Projection', suffix: 'B+' }, // Abstract representation
];

export const Impact = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative bg-navy py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1565514020176-db7933f3815b?auto=format&fit=crop&q=80&w=2070" 
            alt="Guyana Industry" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6">
            From Training to <span className="text-lime">Transformation.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            EMPORIA is more than an LMS—it’s a nation-building tool that drives real outcomes: jobs, safety, and prosperity.
          </p>
        </div>
      </div>

      {/* Metrics */}
      <Section background="white" className="-mt-20 pt-0 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-x divide-gray-100">
            {metrics.map((m, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-navy mb-2 font-heading">
                  <CountUp end={m.value} duration={2.5} separator="," />{m.suffix}
                </div>
                <div className="text-gray-500 font-medium uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Every trained learner creates ripple effects—boosting productivity, ensuring compliance, and uplifting communities. EMPORIA turns training into measurable impact.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section background="cool-grey">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy">Success Stories</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
            <div className="h-64 bg-gray-200 relative">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2069" className="w-full h-full object-cover" alt="Ministry Official" />
               <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-current" />
                 </div>
               </div>
            </div>
            <div className="p-8">
              <blockquote className="text-xl font-medium text-navy mb-6">
                “Through EMPORIA, our ministry rolled out compliance training to over 2,000 staff in under two months.”
              </blockquote>
              <div className="font-bold text-gray-900">Ministry Official</div>
              <div className="text-lime-600 text-sm">Government of Guyana</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
            <div className="h-64 bg-gray-200 relative">
               <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="University Dean" />
               <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-current" />
                 </div>
               </div>
            </div>
            <div className="p-8">
              <blockquote className="text-xl font-medium text-navy mb-6">
                “EMPORIA helped us align our curriculum with industry demand, making students career-ready.”
              </blockquote>
              <div className="font-bold text-gray-900">University Dean</div>
              <div className="text-lime-600 text-sm">Higher Education</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
