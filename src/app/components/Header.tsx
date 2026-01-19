import { Calendar, Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBooking = () => {
    window.dispatchEvent(new CustomEvent('open-booking'));
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg py-2 backdrop-blur-md' : 'bg-[#D1D5DA] py-4 shadow-sm'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#4A90E2] to-[#50C9C3] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-xl">🦷</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#4A90E2]">Raf Dentals</h1>
              <p className="hidden sm:block text-[10px] uppercase tracking-widest text-gray-700">Your trusted dental care</p>
            </div>
          </Link>

          {/* Desktop Navigation - Capsule Style */}
          <nav className={`hidden lg:flex items-center gap-1 px-2 py-1 rounded-full backdrop-blur-md transition-all duration-300 ${isScrolled ? 'bg-gray-100/50' : 'bg-white/30 border border-white/20'}`}>
            <Link to="/" className="px-4 py-2 rounded-full text-sm font-semibold transition-colors text-gray-700 hover:text-[#4A90E2]">
              HOME
            </Link>
            <Link to="/about" className="px-4 py-2 rounded-full text-sm font-semibold transition-colors text-gray-700 hover:text-[#4A90E2]">
              ABOUT
            </Link>
            <Link to="/services" className="px-4 py-2 rounded-full text-sm font-semibold transition-colors text-gray-700 hover:text-[#4A90E2]">
              SERVICES
            </Link>
            <Link to="/dentists" className="px-4 py-2 rounded-full text-sm font-semibold transition-colors text-gray-700 hover:text-[#4A90E2]">
              DENTISTS
            </Link>
            <Link to="/contact" className="px-4 py-2 rounded-full text-sm font-semibold transition-colors text-gray-700 hover:text-[#4A90E2]">
              CONTACT US
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={openBooking}
              className="px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 active:scale-95 bg-[#4A90E2] text-white hover:bg-[#357ABD]"
            >
              SCHEDULE A VISIT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-black/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-6 px-4 bg-white rounded-2xl shadow-2xl border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#4A90E2] font-medium py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#4A90E2] font-medium py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-[#4A90E2] font-medium py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/dentists"
                className="text-gray-700 hover:text-[#4A90E2] font-medium py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dentists
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#4A90E2] font-medium py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="pt-4 mt-2 border-t border-gray-100">
                <button
                  onClick={() => { openBooking(); setMobileMenuOpen(false); }}
                  className="w-full bg-[#4A90E2] text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-all"
                >
                  Book Appointment
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

