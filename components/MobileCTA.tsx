import { MessageSquare, PhoneCall, FileText } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal-dark/95 backdrop-blur-md border-t border-gray-800 px-4 py-3 flex items-center justify-around md:hidden shadow-2xl">
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/254700000000?text=Hello,%20I%20would%20like%20to%20inquire%20about%20signage%20and%20branding%20services." 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-gray-300 hover:text-brand-blue transition-colors"
      >
        <MessageSquare size={20} className="text-green-500" />
        <span className="text-[10px] uppercase font-semibold tracking-wider">WhatsApp</span>
      </a>

      {/* Direct Call Button */}
      <a 
        href="tel:+254700000000" 
        className="flex flex-col items-center gap-1 text-gray-300 hover:text-brand-blue transition-colors"
      >
        <PhoneCall size={20} className="text-brand-blue" />
        <span className="text-[10px] uppercase font-semibold tracking-wider">Call Now</span>
      </a>

      {/* Quote Button */}
      <a 
        href="#quote" 
        className="flex items-center gap-1.5 bg-brand-blue text-charcoal-dark font-bold text-xs px-4 py-2 rounded-sm shadow-md"
      >
        <FileText size={16} />
        <span>Get Quote</span>
      </a>
    </div>
  );
}