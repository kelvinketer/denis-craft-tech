import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Truck, Shield, Zap, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Fleet & Vehicle Branding in Nairobi | Denis Craft Technologies",
  description: "High-impact vehicle branding, delivery van wraps, and corporate car decals in Nairobi, Kenya. Turn your fleet into mobile billboards. Get a quote today.",
};

const vehicleSolutions = [
  { title: "Full Vehicle Wraps", desc: "Complete coverage transformations using premium cast vinyl that turn your cars or trucks into moving masterpieces." },
  { title: "Partial Wraps & Graphics", desc: "Cost-effective branding combining strategic door decals, hood logos, and rear panel information." },
  { title: "Fleet Delivery Vans", desc: "Uniform branding across your distribution fleet to maximize local exposure during every delivery route." },
  { title: "Reflective Safety & Striping", desc: "NTSA-compliant reflective chevron markings and commercial branding decals for heavy trucks and pickups." },
  { title: "One-Way Vision Window Film", desc: "Perforated window graphics for rear windshields that display your brand clearly outside while maintaining visibility inside." },
  { title: "Magnetic Vehicle Signs", desc: "Removable magnetic door panels—ideal for personal vehicles used for business part-time." },
];

export default function VehicleBrandingPage() {
  return (
    <main className="pt-24 min-h-screen bg-charcoal text-white selection:bg-brand-blue selection:text-charcoal-dark pb-20 md:pb-0">
      
      {/* HERO */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 border-b border-gray-800 bg-charcoal-dark">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-light mb-8 transition-colors text-sm font-semibold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            FLEET & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light">VEHICLE BRANDING</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Turn your daily transit into high-impact mobile advertising. We wrap delivery vans, corporate cars, and commercial fleets with durable, UV-protected vinyl across Kenya.
          </p>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile Branding Solutions</h2>
            <p className="text-gray-400">High-visibility wraps engineered to withstand harsh weather and long highway miles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicleSolutions.map((item, index) => (
              <div key={index} className="bg-charcoal-dark border border-gray-800 p-8 rounded-sm hover:border-brand-blue/50 transition-colors group">
                <CheckCircle className="text-brand-blue mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VEHICLE BRANDING */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal-dark border-y border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Most Cost-Effective Outdoor Advertising</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Unlike static billboards, your branded vehicles go where your customers are. Every traffic jam and delivery stop becomes an opportunity to generate new leads for your business.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Truck className="text-brand-blue shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg">Thousands of Daily Impressions</h4>
                  <p className="text-sm text-gray-400">Expose your brand to thousands of motorists and pedestrians daily across Nairobi and nationwide.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Zap className="text-brand-blue shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg">Paint Protection</h4>
                  <p className="text-sm text-gray-400">Cast vinyl wraps act as a protective shield against minor scratches, stone chips, and sun fading.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Shield className="text-brand-blue shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg">Professional Finish</h4>
                  <p className="text-sm text-gray-400">Expert application around curves, door handles, and rivets for a seamless, painted-on look.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="aspect-square bg-charcoal border border-gray-800 rounded-sm flex items-center justify-center p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-charcoal to-charcoal"></div>
            <h3 className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 relative z-10 text-center leading-tight">
              MOBILE <br /> BILLBOARDS <br /> ON WHEELS
            </h3>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto bg-brand-blue rounded-sm p-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to brand your fleet?</h2>
          <p className="text-blue-100 text-lg mb-8 font-medium">
            Send us your vehicle model and logo to get a precise quotation today.
          </p>
          <Link href="/#quote" className="inline-flex items-center gap-2 bg-charcoal-dark text-white hover:bg-charcoal font-bold px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105">
            Get a Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}