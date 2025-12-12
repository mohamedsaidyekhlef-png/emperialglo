import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { useBooking } from '../context/BookingContext';
import { BarChart3, ShieldCheck, GraduationCap, Globe2, Zap, Award } from 'lucide-react';

const stats = [
  { label: 'Learners Empowered', value: 20000, suffix: '+' },
  { label: 'Jobs Created', value: 5000, suffix: '+' },
  { label: 'Satisfaction', value: 96, suffix: '%' },
  { label: 'G2 Rating', value: 4.9, suffix: '/5' },
];

const features = [
  {
    icon: GraduationCap,
    title: 'All-in-One Training',
    desc: 'Courses, credentials, and career pathways in one cloud.'
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    desc: 'Real-time dashboards to measure ROI and impact.'
  },
  {
    icon: ShieldCheck,
    title: 'Scalable & Secure',
    desc: 'Built for governments, enterprises, and communities.'
  }
];

const partners = [
  "University of Guyana", "Technical Institutes", "Citizens Bank", "ExxonMobil", "Banks DIH", "CARICOM"
];

export const Home = () => {
  const navigate = useNavigate();
  const { openBooking } = useBooking();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background - Simulating Video with Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2070" 
            alt="Guyana workforce and innovation" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
              Skills. <br/>
              <span className="text-lime">Innovation.</span> <br/>
              Opportunity.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed font-light">
              Empowering Guyana’s workforce for tomorrow’s economy.
            </p>
            <p className="text-gray-300 mb-10 max-w-lg">
              EMPORIA is Guyana’s flagship skills, innovation, and technology hub. We bring together training, credentials, and career opportunities on a modern platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-10" onClick={() => navigate('/contact')}>Start Free Pilot</Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white/10 hover:text-white"
                onClick={openBooking}
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-12 relative z-20 -mt-0 border-b border-white/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-2">
                <div className="text-4xl lg:text-5xl font-bold text-lime mb-2 font-heading">
                  <CountUp end={stat.value} duration={2.5} separator="," decimals={stat.value % 1 !== 0 ? 1 : 0} />
                  {stat.suffix}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Preview */}
      <Section background="cool-grey">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
            One Platform. Endless Possibilities.
          </h2>
          <p className="text-lg text-gray-600">
            EMPORIA simplifies learning, skills certification, and workforce readiness. No more stitching together multiple tools—we unify it all in one secure, scalable platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-6 text-navy group-hover:bg-lime group-hover:text-navy transition-colors">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works (3-Step Process) */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
            Simple to Start. Scalable for All.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-0" />

          {[
            { 
              step: 1, 
              title: "Launch a Pilot", 
              desc: "Quick setup with your training and learners in as little as 6-8 weeks.",
              icon: Zap
            },
            { 
              step: 2, 
              title: "Certify & Track", 
              desc: "Award digital credentials and measure progress with real-time dashboards.",
              icon: Award
            },
            { 
              step: 3, 
              title: "Scale Nationally", 
              desc: "Expand to schools, enterprises, and ministries with multi-tenant architecture.",
              icon: Globe2
            }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-lime rounded-full flex items-center justify-center mb-6 shadow-lg">
                <item.icon className="w-10 h-10 text-navy" />
              </div>
              <div className="bg-navy text-lime text-xs font-bold px-3 py-1 rounded-full mb-4">STEP {item.step}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-gray-600 max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Transformation Stories (Testimonials) */}
      <Section background="navy" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-lime/5 skew-x-12" />
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-12">
            From Training to Transformation
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
            <blockquote className="text-2xl lg:text-4xl font-heading font-medium text-white leading-tight mb-8">
              "EMPORIA will give our youth the tools to upskill and connect them directly with employers. This isn’t just training—it’s nation-building."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center text-navy font-bold text-xl">
                C
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-lg">Community Leader</div>
                <div className="text-lime text-sm">Georgetown, Guyana</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Partner Logos */}
      <Section background="white" className="py-16">
        <div className="text-center mb-10">
          <h3 className="text-navy/60 font-semibold uppercase tracking-widest text-sm">
            Trusted by Leaders in Education, Enterprise & Government
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, i) => (
            <div key={i} className="text-xl font-heading font-bold text-navy">
              {partner}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Row */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
           <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070" 
            alt="Students" 
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to transform your workforce?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let’s build Guyana’s future together—one skill at a time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-lg px-12 shadow-lg shadow-lime/20" onClick={() => navigate('/contact')}>Start Free Pilot</Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-12 text-white border-white hover:bg-white hover:text-navy"
                onClick={openBooking}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
