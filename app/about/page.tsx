import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denis Craft Technologies | Making Your Brand Visible",
  description: "Nairobi's premier partner for premium signage, corporate branding, promotional products, and event activations.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950">
      
      {/* Hero Section - Added pt-40 to push content below the navbar */}
      <main className="flex flex-col items-center justify-center min-h-[85vh] pt-40 pb-16 px-4 sm:px-6 text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8 max-w-5xl leading-[1.1]">
            We don't just print your logo. <br className="hidden md:block" />
            We bring your brand to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">life.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Premium signage, corporate branding, printing, and event activation solutions engineered for powerful visibility.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/about" 
              className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 w-full sm:w-auto"
            >
              Our Story & Promise
            </Link>
            <Link 
              href="#services" 
              className="bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </main>

      {/* Quick Services Strip */}
      <section id="services" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Signage & 3D", desc: "Illuminated, Reception & Neon Signs" },
            { title: "Branding & Printing", desc: "Banners, Wraps & Corporate Wear" },
            { title: "Premium UV Gifts", desc: "Executive Merchandise & Bespoke Sets" },
            { title: "Event Activation", desc: "Exhibition Stands & Pop-up Displays" }
          ].map((service, index) => (
            <div key={index} className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50 hover:border-amber-500/30 transition-colors text-center sm:text-left group">
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-amber-500 transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}