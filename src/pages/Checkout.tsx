import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ShieldCheck, CreditCard, CheckCircle2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get('plan') || 'starter';
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<'details' | 'success'>('details');

  // Plan Details
  const plans: Record<string, { name: string; price: string; period: string }> = {
    starter: { name: 'Starter Plan', price: '$499', period: '/month' },
    pro: { name: 'Pro Plan', price: '$899', period: '/month' },
    nation: { name: 'Nation Plan', price: 'Custom', period: '' }
  };

  const selectedPlan = plans[plan] || plans.starter;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 2000);
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen pt-20 bg-cool-grey flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full"
        >
          <div className="w-20 h-20 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-lime-600" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">Payment Successful!</h2>
          <p className="text-gray-600 mb-8">
            Welcome to Emporia. Your <strong>{selectedPlan.name}</strong> has been activated. Check your email for login instructions.
          </p>
          <Button onClick={() => navigate('/')} className="w-full">
            Go to Dashboard
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-cool-grey">
      <Section background="cool-grey">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          
          {/* Order Summary */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-navy mb-4">Order Summary</h3>
              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <div>
                  <div className="font-bold text-navy">{selectedPlan.name}</div>
                  <div className="text-sm text-gray-500">Billed monthly</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-navy">{selectedPlan.price}</div>
                  <div className="text-xs text-gray-500">{selectedPlan.period}</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-4">
                <div className="font-bold text-navy">Total due today</div>
                <div className="font-bold text-2xl text-navy">{selectedPlan.price}</div>
              </div>
              
              <div className="mt-6 bg-navy/5 p-4 rounded-xl flex gap-3">
                <ShieldCheck className="w-5 h-5 text-navy shrink-0" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  Your payment is secure. We use 256-bit encryption to protect your data.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-heading font-bold text-navy">Secure Checkout</h2>
                <div className="flex gap-2">
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-500">VISA</div>
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-500">MC</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                      <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                      <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input required type="email" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                <div className="border-t border-gray-100 my-6" />

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Payment Details</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input required type="text" placeholder="0000 0000 0000 0000" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Expiration (MM/YY)</label>
                      <input required type="text" placeholder="MM/YY" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">CVC</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input required type="text" placeholder="123" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all" />
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full mt-8"
                  isLoading={isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Pay ${selectedPlan.price}`}
                </Button>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  By clicking "Pay", you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
