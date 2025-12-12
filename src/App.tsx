import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Platform } from './pages/Platform';
import { Solutions } from './pages/Solutions';
import { Impact } from './pages/Impact';
import { Partners } from './pages/Partners';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Resources } from './pages/Resources';
import { Checkout } from './pages/Checkout';

// Fallback for 404
const NotFound = () => (
  <div className="min-h-screen pt-32 pb-20 bg-cool-grey flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-5xl font-heading font-bold text-navy mb-6">404</h1>
    <p className="text-xl text-gray-600 max-w-2xl">
      Hmm, looks like a dropped packet from the Atlantic cable. Try again?
    </p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/company" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/checkout" element={<Checkout />} />
            
            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
