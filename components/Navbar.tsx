"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP & MAIN NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-charcoal/95 backdrop-blur-md py-4 border-b border-gray-800 shadow-xl" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Denis Craft Technologies Logo" 
              width={300} 
              height={100} 
              className="object-contain h-14 w-auto md:h-20"
              priority
            />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <Link href="/about" className="hover:text-brand-blue transition-colors">About Us</Link>
            
            {/* Services Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-brand-blue transition-colors focus:outline-none">
                Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-charcoal-dark border border-gray-800 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
                <Link href="/services/3d-signage" className="px-5 py-3 hover:bg-charcoal hover:text-brand-blue text-sm text-gray-300 transition-colors border-b border-gray-800/50">
                  3D Signage & Shopfronts
                </Link>
                <Link href="/services/office-branding" className="px-5 py-3 hover:bg-charcoal hover:text-brand-blue text-sm text-gray-300 transition-colors border-b border-gray-800/50">
                  Corporate & Office Branding
                </Link>
                <Link href="/services/vehicle-branding" className="px-5 py-3 hover:bg-charcoal hover:text-brand-blue text-sm text-gray-300 transition-colors">
                  Fleet & Vehicle Branding
                </Link>
              </div>
            </div>

            <Link href="/#quote" className="hover:text-brand-blue transition-colors">Portfolio</Link>
            <Link href="/#quote" className="hover:text-brand-blue transition-colors">Why Us</Link>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+254700000000" 
              className="flex items-center gap-2 text-sm font-semibold text-white border border-gray-700 hover:border-brand-blue px-4 py-2 rounded-sm transition-colors"
            >
              <Phone size={16} className="text-brand-blue" />
              <span>Call Us</span>
            </a>
            <a 
              href="/#quote" 
              className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold text-sm px-5 py-2.5 rounded-sm transition-all"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-charcoal-dark border-b border-gray-800 px-6 py-6 flex flex-col gap-4 shadow-2xl">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-brand-blue"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-brand-blue"
            >
              About Us
            </Link>
            
            {/* Mobile Services section */}
            <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-800 my-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Services</span>
              <Link 
                href="/services/3d-signage" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-brand-blue"
              >
                3D Signage & Shopfronts
              </Link>
              <Link 
                href="/services/office-branding" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-brand-blue"
              >
                Corporate & Office Branding
              </Link>
              <Link 
                href="/services/vehicle-branding" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-brand-blue"
              >
                Fleet & Vehicle Branding
              </Link>
            </div>

            <Link 
              href="/#quote" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-brand-blue"
            >
              Get a Quote
            </Link>
            <a 
              href="tel:+254700000000" 
              className="flex items-center justify-center gap-2 bg-brand-blue text-white font-bold py-3 rounded-sm mt-4"
            >
              <Phone size={18} /> Call Sales Team
            </a>
          </div>
        )}
      </nav>
    </>
  );
}