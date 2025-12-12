import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    desc: 'For small teams getting started.',
    price: { monthly: 499, annual: 399 },
    features: ['Up to 100 Learners', 'Basic LMS Features', 'Email Support', 'Standard Analytics'],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    id: 'pro',
    name: 'Pro',
    desc: 'For growing organizations.',
    price: { monthly: 899, annual: 749 },
    features: ['Up to 500 Learners', 'Advanced Reporting', 'API Access', 'Priority Support', 'Custom Branding'],
    cta: 'Get Started',
    popular: false
  },
  {
    id: 'nation',
    name: 'Nation',
    desc: 'For large scale deployments.',
    price: { monthly: 'Custom', annual: 'Custom' },
    features: ['Unlimited Learners', 'Dedicated CSM', 'On-premise Options', 'SLA Guarantees', 'White-labeling'],
    cta: 'Contact Sales',
    popular: true
  }
];

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();

  const handlePlanSelect = (planId: string) => {
    if (planId === 'nation') {
      navigate('/contact');
    } else {
      navigate(`/checkout?plan=${planId}`);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-cool-grey min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-navy mb-6">
            Simple, transparent pricing.
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Choose the plan that fits your scale. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("font-medium", !isAnnual ? "text-navy" : "text-gray-400")}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-navy rounded-full p-1 relative transition-colors"
            >
              <motion.div 
                animate={{ x: isAnnual ? 32 : 0 }}
                className="w-6 h-6 bg-lime rounded-full shadow-sm"
              />
            </button>
            <span className={cn("font-medium", isAnnual ? "text-navy" : "text-gray-400")}>
              Annual <span className="text-lime-600 text-xs font-bold bg-lime/20 px-2 py-1 rounded-full ml-1">SAVE 20%</span>
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={cn(
                "relative bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col",
                plan.popular ? "border-navy shadow-2xl scale-105 z-10" : "border-gray-200 shadow-lg hover:shadow-xl"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy text-lime px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-navy mb-2">{plan.name}</h3>
              <p className="text-gray-500 mb-6 h-10">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-navy">
                  {typeof plan.price.annual === 'number' 
                    ? `$${isAnnual ? plan.price.annual : plan.price.monthly}` 
                    : plan.price.annual}
                </span>
                {typeof plan.price.annual === 'number' && (
                  <span className="text-gray-500">/mo</span>
                )}
              </div>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full mb-8"
                onClick={() => handlePlanSelect(plan.id)}
              >
                {plan.cta}
              </Button>

              <div className="space-y-4 mt-auto">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-lime-600 shrink-0" />
                    <span className="text-gray-600 text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Have questions about procurement?</h3>
          <p className="text-gray-600 mb-8">
            Check out our procurement guide or download our RFP template.
          </p>
          <a href="#" className="text-navy font-semibold underline hover:text-lime-600">
            View Procurement FAQ
          </a>
        </div>
      </div>
    </div>
  );
};
