import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-xl">🦷</span>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white leading-tight">Bright Smile Dental</h2>
                <p className="text-[10px] uppercase tracking-widest text-white/70">Your trusted dental care</p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Providing modern, compassionate dental care for your whole family.
              Our mission is to give you a smile you'll love through personalized treatment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors border border-white/5">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors border border-white/5">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors border border-white/5">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Our Clinic</Link></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Meet the Team</a></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))} className="text-gray-400 hover:text-white transition-colors underline underline-offset-4">Book Online</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Specialties</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Teeth Whitening</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Orthodontics</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Dental Implants</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Kid's Dentistry</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/5">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-400 text-sm">Abuja, Nigeria</span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-400 text-sm">0814 069 5734</span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-400 text-sm">hello@brightsmile.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} BRIGHT SMILE DENTAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
