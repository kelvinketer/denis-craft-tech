import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Lightbulb, Shield, Ruler, ArrowLeft } from "lucide-react";

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: "3D Signage & Shopfronts in Nairobi | Denis Craft Technologies",
  description: "Premium 3D acrylic letters, LED illuminated signage, and shopfront branding in Nairobi, Kenya. Make your business stand out. Get a free quote today.",
};

const signageTypes = [
  { title: "3D Acrylic Letters", desc: "Sleek, highly customizable, and perfect for modern reception areas and indoor branding." },
  { title: "LED Illuminated Signage", desc: "Ensure your business is visible 24/7 with energy-efficient, edge-lit or backlit LED signs." },
  { title: "Stainless-Steel Letters", desc: "Industrial, durable, and premium. Ideal for outdoor building facades and corporate offices." },
  { title: "Channel Letters", desc: "Bold, three-dimensional letters with deep returns, often illuminated for maximum outdoor impact." },
  { title: "Pylon & Monument Signs", desc: "Large freestanding structures designed to catch the attention of passing highway traffic." },
  { title: "Shopfront Branding", desc: "Complete exterior makeovers including window frosting, custom fascias, and illuminated logos." },
];

export default function SignagePage() {
  return (
    <main className="pt-24 min-h-screen bg-charcoal text-white selection:bg-brand-blue selection:text-charcoal-dark pb-20 md:pb-0">
      
      {/* 1. SERVICE HERO */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 border-b border-gray-800 bg-charcoal-dark">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-light mb-8 transition-colors text-sm font-semibold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            3D SIGNAGE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light">SHOPFRONTS</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Transform your storefront into a professional, highly visible brand landmark. From concept to installation, we deliver premium 3D signage across Nairobi, Kenya.
          </p>
        </div>
      </section>

      {/* 2. TYPES OF SIGNAGE */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Signage Solutions</h2>
            <p className="text-gray-400">Tailored fabrication for every environment and brand identity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signageTypes.map((type, index) => (
              <div key={index} className="bg-charcoal-dark border border-gray-800 p-8 rounded-sm hover:border-brand-blue/50 transition-colors group">
                <CheckCircle className="text-brand-blue mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE DENIS CRAFT DIFFERENCE */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal-dark border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Durability & Impact</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                A great sign does more than just display your name; it communicates trust, quality, and permanence. We use cutting-edge fabrication techniques and weather-resistant materials to ensure your brand looks as good in year five as it does on day one.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Ruler className="text-brand-blue shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Precision Engineering</h4>
                    <p className="text-sm text-gray-400">Laser-cut accuracy for flawless curves and sharp edges.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Lightbulb className="text-brand-blue shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Vibrant Illumination</h4>
                    <p className="text-sm text-gray-400">Evenly diffused LED lighting that eliminates hot spots and shadows.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Shield className="text-brand-blue shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Weatherproof Materials</h4>
                    <p className="text-sm text-gray-400">UV-resistant acrylics and rust-proof metals designed for the Kenyan sun and rain.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Visual Placeholder */}
            <div className="aspect-square bg-charcoal border border-gray-800 rounded-sm flex items-center justify-center p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-charcoal to-charcoal"></div>
              <h3 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 relative z-10 text-center leading-tight shadow-2xl">
                YOUR <br/> LOGO <br/> HERE
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto bg-brand-blue rounded-sm p-12 text-center text-charcoal-dark">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your storefront?</h2>
          <p className="text-charcoal-light/80 text-lg mb-8 font-medium">
            Let's schedule a site visit to take accurate measurements and discuss your vision.
          </p>
          <Link href="/#quote" className="inline-flex items-center gap-2 bg-charcoal-dark text-white hover:bg-charcoal font-bold px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105">
            Get a Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}