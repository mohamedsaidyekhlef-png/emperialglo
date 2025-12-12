import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Shield, BarChart, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-cool-grey py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-heading font-bold text-navy mb-6">Who We Are.</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A movement to create blue-zones of prosperity through skills, innovation, and opportunity.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=2070" 
               alt="Guyana Students" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>

      {/* Story & Mission */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-heading font-bold text-navy mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-12">
            Founded by Mark Wright and collaborators across Guyana and the diaspora, EMPORIA is more than a platform—it’s a vision for transformation. We unify training, certifications, and career pathways to ensure every citizen can thrive in the 21st-century economy.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 text-left bg-navy text-white p-10 rounded-3xl">
            <div>
              <h3 className="text-xl font-bold text-lime mb-4">Our Mission</h3>
              <p className="text-gray-300">To empower Guyana’s workforce through innovation, education, and opportunity—creating a model that inspires the Caribbean and the world.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-lime mb-4">Our Vision</h3>
              <p className="text-gray-300">A Guyana where every individual has access to training, technology, and opportunities to prosper.</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: 'Security-first', desc: 'Your data and learners are protected.' },
            { icon: BarChart, title: 'Data-driven', desc: 'We track impact, not just activity.' },
            { icon: Heart, title: 'People-centered', desc: 'Everything we build is for people first.' }
          ].map((val, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-16 h-16 bg-cool-grey rounded-full flex items-center justify-center mx-auto mb-6 text-navy">
                <val.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
