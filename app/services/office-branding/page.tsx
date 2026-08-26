import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Briefcase, Shield, Sparkles, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Office Branding in Nairobi | Denis Craft Technologies",
  description: "Transform your workspace with professional office branding, reception wall logos, glass frosting, and wall graphics in Nairobi, Kenya. Get a quote today.",
};

const officeSolutions = [
  { title: "Reception 3D Logos", desc: "Make a striking first impression on clients with dimensional acrylic or metal logos behind your reception desk." },
  { title: "Glass Frosting & Privacy Films", desc: "Sleek etched-glass vinyl designs that offer conference room privacy while enhancing modern interior aesthetics." },
  { title: "Wall Murals & Brand Graphics", desc: "High-resolution printed wall wraps and corporate timelines that turn blank office walls into storytelling assets." },
  { title: "Wayfinding & Door Signs", desc: "Professional office directory boards, room numbering, and directional signage for smooth navigation." },
  { title: "Frosted Window Graphics", desc: "Custom cut-outs of your company patterns or logos applied across office glass partitions." },
  { title: "Boardroom & Meeting Branding", desc: "Custom manifestation and acoustic branding panels tailored for executive collaboration spaces." },
];

export default function OfficeBrandingPage() {
  return (
    <main className="pt-24 min-h-screen bg-charcoal text-white selection:bg-brand-blue selection:text-charcoal-dark pb-20 md:pb-0">
      
      {/* HERO */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 border-b border-gray-800 bg-charcoal-dark">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-light mb-8 transition-colors text-sm font-semibold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CORPORATE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light">OFFICE BRANDING</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Turn your workspace into an immersive brand experience. From executive reception focal points to conference room privacy frosting, we elevate corporate environments across Nairobi.
          </p>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Workspace Branding Solutions</h2>
            <p className="text-gray-400">Designed to inspire employees and impress every visitor who walks through your doors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeSolutions.map((item, index) => (
              <div key={index} className="bg-charcoal-dark border border-gray-800 p-8 rounded-sm hover:border-brand-blue/50 transition-colors group">
                <CheckCircle className="text-brand-blue mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OFFICE BRANDING MATTERS */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal-dark border-y border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Align Your Physical Space with Your Brand Value</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Your office environment speaks volumes before you even say a word. We partner with corporate firms, tech hubs, and agencies to build interiors that reflect professionalism and elite standards.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Briefcase className="text-brand-blue shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg">Client Confidence</h4>
                  <p className="text-sm text-gray-400">Immaculate reception branding reassures partners of your enterprise stability.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Sparkles className="text-brand-blue shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg">Employee Morale</h4>
                  <p className="text-sm text-gray-400">Inspiring wall graphics and custom spaces foster a culture of pride and productivity.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Shield className="text-brand-blue shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg">Seamless Execution</h4>
                  <p className="text-sm text-gray-400">Clean, disruption-free installation scheduled around your business working hours.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="aspect-square bg-charcoal border border-gray-800 rounded-sm flex items-center justify-center p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-charcoal to-charcoal"></div>
            <h3 className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 relative z-10 text-center leading-tight">
              ELEVATE <br /> YOUR <br /> WORKSPACE
            </h3>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto bg-brand-blue rounded-sm p-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your office?</h2>
          <p className="text-blue-100 text-lg mb-8 font-medium">
            Let&apos;s discuss your interior layout and schedule a site assessment today.
          </p>
          <Link href="/#quote" className="inline-flex items-center gap-2 bg-charcoal-dark text-white hover:bg-charcoal font-bold px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105">
            Get a Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}