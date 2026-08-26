import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-gray-800 text-gray-300 pt-16 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Denis Craft Technologies Logo" 
              width={180} 
              height={50} 
              className="object-contain h-10 w-auto"
            />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mt-2">
            Premium Signage & Corporate Branding Solutions in Kenya. From concept to installation, we engineer visibility that makes your brand impossible to ignore.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/services/3d-signage" className="hover:text-brand-blue transition-colors">3D Signage & Shopfronts</Link>
            </li>
            <li>
              <Link href="/#quote" className="hover:text-brand-blue transition-colors">Our Portfolio</Link>
            </li>
            <li>
              <Link href="/#quote" className="hover:text-brand-blue transition-colors">Why Choose Us</Link>
            </li>
            <li>
              <Link href="/#quote" className="hover:text-brand-blue transition-colors">Request a Quote</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Core Services */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Our Services</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li className="hover:text-white transition-colors">3D Illuminated Signs</li>
            <li className="hover:text-white transition-colors">Corporate Office Branding</li>
            <li className="hover:text-white transition-colors">Fleet & Vehicle Wraps</li>
            <li className="hover:text-white transition-colors">Retail Shopfront Makeovers</li>
            <li className="hover:text-white transition-colors">Digital & Large-Format Printing</li>
          </ul>
        </div>

        {/* Column 4: Contact & Location */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Get in Touch</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-brand-blue shrink-0" />
              <span>Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-blue shrink-0" />
              <a href="tel:+254700000000" className="hover:text-white transition-colors">+254 700 000 000</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-blue shrink-0" />
              <a href="mailto:info@deniscrafttech.co.ke" className="hover:text-white transition-colors">info@deniscrafttech.co.ke</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar: Copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p>&copy; {new Date().getFullYear()} Denis Craft Technologies. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Engineered for <span className="text-gray-400 font-medium">High-Impact Visibility</span>
        </p>
      </div>
    </footer>
  );
}