import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin } from 'lucide-react';

const footerLinks = {
  Solutions: [
    { name: 'Workforce Upskilling', href: '/solutions' },
    { name: 'Civil-Service Academies', href: '/solutions' },
    { name: 'HSE & Compliance', href: '/solutions' },
    { name: 'Job-Matching', href: '/solutions' },
  ],
  Platform: [
    { name: 'AI Professor', href: '/ai-professor' },
    { name: 'LMS Deep-dive', href: '/platform' },
    { name: 'Digital Credentials', href: '/platform' },
    { name: 'Analytics & ROI', href: '/platform' },
  ],
  Company: [
    { name: 'About Us', href: '/company' },
    { name: 'Careers', href: '/company' },
    { name: 'Press Room', href: '/resources' },
    { name: 'Contact Us', href: '/contact' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'SLA', href: '#' },
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-lime rounded-lg flex items-center justify-center">
                 <span className="text-navy font-bold text-xl">E</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Emporia
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-sm leading-relaxed">
              One cloud. Endless possibilities. Unite learning, credentialing, analytics and career placement in a single, scalable platform.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lime hover:text-navy transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold text-lg mb-6 text-lime">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © 2026 Emporia Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-lime" />
                <span>CARICOM Region</span>
             </div>
             <div className="flex gap-4 text-sm text-gray-400">
                <span>English (US)</span>
                <span>USD ($)</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
