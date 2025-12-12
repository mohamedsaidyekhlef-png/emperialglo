import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Platform', href: '/platform' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Impact', href: '/impact' },
  { name: 'Resources', href: '/resources' },
  { name: 'Partners', href: '/partners' },
  { name: 'Company', href: '/company' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleStartPilot = () => {
    navigate('/contact');
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
               <span className="text-lime font-bold text-xl">E</span>
            </div>
            <span className={cn("font-heading font-bold text-2xl tracking-tight", isScrolled ? "text-navy" : "text-navy")}>
              Emporia
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location.pathname === '/' && !isScrolled ? "text-white/90 hover:text-white" : "text-navy/80 hover:text-navy"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn("hidden xl:flex gap-2", location.pathname === '/' && !isScrolled ? "text-white hover:bg-white/10" : "")}
            >
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </Button>
            <a href="https://app.emporia.co" target="_blank" rel="noreferrer">
               <Button 
                 variant="ghost" 
                 size="sm"
                 className={cn(location.pathname === '/' && !isScrolled ? "text-white hover:bg-white/10" : "")}
               >
                 Log in
               </Button>
            </a>
            <Button onClick={handleStartPilot}>Start Free Pilot</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <Menu className={cn("w-6 h-6", location.pathname === '/' && !isScrolled ? "text-white" : "text-navy")} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white z-40 pt-24 px-6 pb-6 lg:hidden flex flex-col overflow-y-auto"
            >
              <nav className="flex flex-col gap-6 mb-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-2xl font-heading font-semibold text-navy"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-4">
                 <a href="https://app.emporia.co" className="w-full">
                  <Button variant="outline" className="w-full justify-center">Log in</Button>
                 </a>
                <Button className="w-full justify-center" onClick={handleStartPilot}>Start Free Pilot</Button>
                <Button variant="ghost" className="w-full justify-center" onClick={() => setIsDemoModalOpen(true)}>Book a Demo</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Demo Modal */}
      <Modal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
        title="Book a Demo"
      >
        <div className="text-center">
          <div className="mb-6">
            <Calendar className="w-12 h-12 text-lime mx-auto mb-4" />
            <p className="text-gray-600 mb-4">
              Schedule a 30-minute walkthrough with our sector experts. We'll show you how Emporia can transform your workforce.
            </p>
          </div>
          
          {/* Simulated Calendly Widget Placeholder */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
             <div className="text-center">
               <div className="animate-pulse text-navy font-semibold mb-2">Loading Scheduler...</div>
               <p className="text-sm text-gray-500">(This is a demo placeholder for the Calendly widget)</p>
             </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
