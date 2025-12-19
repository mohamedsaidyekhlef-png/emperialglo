import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useBooking } from '../context/BookingContext';
import { 
  Brain, 
  Globe2, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Languages, 
  UserCog, 
  GraduationCap, 
  CheckCircle2,
  ArrowRight,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';

const techFeatures = [
  {
    icon: Brain,
    title: "Digital Faculty Modeling Engine",
    desc: "Creates a 'faculty model' from a real professor’s qualifications, teaching philosophy, and course materials to ensure authentic academic authority."
  },
  {
    icon: Globe2,
    title: "Multilingual Delivery Engine",
    desc: "Instantly translates and culturally adapts content into 40+ languages, including English, Spanish, Mandarin, and Hindi."
  },
  {
    icon: Sparkles,
    title: "Adaptive Learning Intelligence",
    desc: "Assesses knowledge levels, identifies struggles, and modifies pace and depth automatically for a personalized classroom experience."
  },
  {
    icon: ShieldCheck,
    title: "Human-in-the-Loop Oversight",
    desc: "Real faculty review content and set standards. The AI Professor extends human reach without replacing academic integrity."
  }
];

const studentSteps = [
  {
    step: 1,
    title: "Choose Your Path",
    icon: Users,
    desc: "Select between scheduled live lectures with a Real-Life Professor or 24/7 on-demand learning with an AI Professor."
  },
  {
    step: 2,
    title: "Select Language",
    icon: Languages,
    desc: "Choose your primary learning language from 40+ options, with the ability to switch mid-lesson for difficult concepts."
  },
  {
    step: 3,
    title: "Design AI Avatar",
    icon: UserCog,
    desc: "Customize your AI Professor's appearance—from a 'Professional Academic' to a 'Futuristic Mentor' or 'Cultural Variation'."
  },
  {
    step: 4,
    title: "Choose Profile",
    icon: GraduationCap,
    desc: "Select the academic persona: Analytical, Encouraging, Research-based, or Industry Expert."
  },
  {
    step: 5,
    title: "Begin Learning",
    icon: Cpu,
    desc: "Engage with adaptive modules, instant Q&A, and personalized assessments tracked in real-time."
  }
];

export const AiProfessor = () => {
  const { openBooking } = useBooking();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2065" 
            alt="AI Technology" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/10 text-lime border border-lime/20 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">New Technology</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              The <span className="text-lime">AI Professor</span> System
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              An advanced educational platform that merges the expertise of real, credentialed professors with next-generation artificial intelligence to deliver high-quality, multilingual, adaptive learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={openBooking}>Experience the Demo</Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-navy">
                Download Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Two Pathways */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
            One Platform. Two Powerful Pathways.
          </h2>
          <p className="text-gray-600 text-lg">
            Instead of relying solely on one mode of instruction, Emporia offers a hybrid framework allowing institutions to benefit from human guidance enhanced by AI scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Path A */}
          <div className="bg-cool-grey rounded-2xl p-8 border border-gray-200 hover:border-navy transition-colors">
            <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center text-white mb-6">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Real-Life Professor</h3>
            <ul className="space-y-3">
              {['Scheduled live lectures', 'Live Q&A sessions', 'Direct human mentorship', 'Instructor-led grading'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Path B */}
          <div className="bg-navy rounded-2xl p-8 border border-navy text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime/10 rounded-full blur-3xl group-hover:bg-lime/20 transition-colors" />
            <div className="w-14 h-14 bg-lime rounded-xl flex items-center justify-center text-navy mb-6 relative z-10">
              <Brain className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">AI Professor</h3>
            <ul className="space-y-3 relative z-10">
              {['On-demand responses 24/7', 'Unlimited explanations', 'Personalized tutoring', 'AI-graded assessments'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Technology Behind It */}
      <Section background="cool-grey">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
              The Technology Behind the AI Professor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Every AI Professor reflects authentic academic quality and subject authority, powered by four core engines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techFeatures.map((tech, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-navy shrink-0">
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">{tech.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Student Journey */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
            How Students Interact
          </h2>
          <p className="text-gray-600 text-lg">
            A seamless onboarding process designed for clarity and empowerment.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-[27px] top-8 bottom-8 w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {studentSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-8 md:items-start group">
                {/* Number Bubble */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-lime text-navy font-bold text-xl shrink-0 z-10 shadow-sm group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-lime/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className="w-6 h-6 text-navy" />
                    <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section background="navy" className="text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Enhancing the Educational Ecosystem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-lime mb-6">For Instructors</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <span className="text-gray-300">Reduces repetitive explanation time</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <span className="text-gray-300">Focus on deeper mentorship & research</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <span className="text-gray-300">Clearer insights into comprehension</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-lime mb-6">For Institutions</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <span className="text-gray-300">Enables rapid scaling of programs</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <span className="text-gray-300">Supports multilingual recruitment</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <span className="text-gray-300">Reduces faculty overload</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-lime mb-6">For Students</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <span className="text-gray-300">Choice & Flexibility</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <span className="text-gray-300">24/7 Personalized support</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <span className="text-gray-300">Affordable learning options</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Final Summary CTA */}
      <Section background="white" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-navy mb-6">
            A Global Teaching Revolution
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            The AI Professor ensures that education becomes personalized, inclusive, and globally accessible — without losing the integrity of real academic expertise.
          </p>
          <Button size="lg" onClick={openBooking}>
            Schedule a Demo
          </Button>
        </div>
      </Section>
    </div>
  );
};
