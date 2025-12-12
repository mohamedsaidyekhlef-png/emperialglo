import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ArrowRight, Mail } from 'lucide-react';

const articles = [
  {
    title: 'The Future of Workforce Development in Guyana',
    category: 'Thought Leadership',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2070'
  },
  {
    title: 'Digital Credentials: Building Trust in Skills',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070'
  },
  {
    title: 'How Governments Can Scale Training Programs Nationally',
    category: 'Government',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=2089'
  }
];

export const Resources = () => {
  return (
    <div className="pt-20">
      <div className="bg-cool-grey py-24 text-center">
        <h1 className="text-5xl font-heading font-bold text-navy mb-6">Insights & Resources.</h1>
        <p className="text-xl text-gray-600">Thought leadership, case studies, and success stories to inspire transformation.</p>
      </div>

      <Section background="white">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6 h-64">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-lime-600 font-bold text-sm mb-2 uppercase tracking-wider">{article.category}</div>
              <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-lime-600 transition-colors">{article.title}</h3>
              <div className="flex items-center text-navy font-semibold text-sm">
                Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-navy rounded-3xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-lime">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Stay ahead with EMPORIA insights.</h2>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lime"
              />
              <Button className="bg-lime text-navy hover:bg-lime-hover">Subscribe</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
