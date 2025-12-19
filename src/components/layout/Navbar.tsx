import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';

const navItems = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Platform', href: '/platform' },
  { name: 'AI Professor', href: '/ai-professor' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Impact', href: '/impact' },
  { name: 'Resources', href: '/resources' },
  { name: 'Partners', href: '/partners' },
  { name: 'Company', href: '/company' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between flex-nowrap">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0.5 z-50 shrink-0">
          <span className="font-heading font-bold text-2xl tracking-tight flex items-center">
            <span className="text-lime">E</span>
            <span className={cn("transition-colors", isScrolled ? "text-navy" : "text-white")}>
              MPORIAGLO
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 mx-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors whitespace-nowrap",
                location.pathname === '/' && !isScrolled ? "text-white/90 hover:text-white" : "text-navy/80 hover:text-navy",
                item.name === 'AI Professor' && (location.pathname === '/' && !isScrolled ? "text-lime hover:text-lime-light" : "text-navy font-bold")
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3 shrink-0 whitespace-nowrap">
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
                className={cn("whitespace-nowrap", location.pathname === '/' && !isScrolled ? "text-white hover:bg-white/10" : "")}
              >
                Log in
              </Button>
          </a>
          <Button onClick={handleStartPilot} className="whitespace-nowrap">Start Free Pilot</Button>
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
                  className={cn(
                    "text-2xl font-heading font-semibold",
                    item.name === 'AI Professor' ? "text-lime-600" : "text-navy"
                  )}
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
              <Button variant="ghost" className="w-full justify-center" onClick={() => {
                openBooking();
                setIsMobileMenuOpen(false);
              }}>Book a Demo</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
