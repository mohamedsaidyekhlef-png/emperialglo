import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API submission
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-20">
      <div className="bg-navy py-24 relative overflow-hidden">
         <div className="absolute inset-0">
           <img 
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
             alt="Cityscape" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-navy/80" />
         </div>
         <div className="container mx-auto px-4 relative z-10 text-center text-white">
           <h1 className="text-5xl font-heading font-bold mb-6">Let’s Build the Future of Work Together.</h1>
           <p className="text-xl text-gray-300">Tell us about your goals—we’ll tailor a pilot in under two weeks.</p>
         </div>
      </div>

      <Section background="white" className="-mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-cool-grey p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-navy mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-lime shrink-0" />
                  <div>
                    <div className="font-bold text-navy">Email</div>
                    <div className="text-gray-600">hello@emporia.global</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-lime shrink-0" />
                  <div>
                    <div className="font-bold text-navy">Phone</div>
                    <div className="text-gray-600">+592-694-1226</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-lime shrink-0" />
                  <div>
                    <div className="font-bold text-navy">HQ</div>
                    <div className="text-gray-600">Georgetown, Guyana • Miami, USA</div>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-8">
                <Download className="w-4 h-4 mr-2" />
                Download Prospectus
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h2 className="text-2xl font-bold text-navy mb-8">Send Us a Message</h2>
            
            {formState === 'success' ? (
              <div className="bg-lime/10 p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-navy mb-4">Thanks! We’ll get back to you shortly.</h3>
                <p className="text-gray-600 mb-6">You’re in! Expect our first insight within 24 hours—promise.</p>
                <Button onClick={() => setFormState('idle')} variant="outline">Send Another Message</Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all"></textarea>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="consent" className="rounded border-gray-300 text-lime focus:ring-lime" />
                  <label htmlFor="consent" className="text-sm text-gray-600">Yes, I’d like to receive updates about EMPORIA.</label>
                </div>
                <Button size="lg" className="w-full md:w-auto" isLoading={formState === 'submitting'}>
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};
