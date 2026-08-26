"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  MapPin, 
  ImageIcon, 
  PenTool, 
  Diamond, 
  Settings, 
  Hammer, 
  Map, 
  Clock, 
  Headset,
  CheckCircle,
  UploadCloud,
  Send,
  MessageSquare,
  Ruler,
  Monitor,
  CheckSquare,
  Wrench,
  Truck,
  Building2,
  HeartPulse,
  Briefcase,
  Coffee,
  ShoppingCart,
  Home as HomeIcon
} from "lucide-react";

// --- DUMMY DATA FOR PORTFOLIO ---
const categories = ["All", "3D Signage", "Shopfronts", "Offices", "Vehicles", "Printing", "Corporate Branding"];

const projects = [
  { id: 1, title: "Illuminated Channel Letters", category: "3D Signage" },
  { id: 2, title: "Modern Office Reception", category: "Offices" },
  { id: 3, title: "Fleet Delivery Van Wrap", category: "Vehicles" },
  { id: 4, title: "Retail Shopfront Makeover", category: "Shopfronts" },
  { id: 5, title: "Large Format Billboard", category: "Printing" },
  { id: 6, title: "Premium Acrylic Logo", category: "3D Signage" },
];

// --- DATA FOR TRUST SECTION ---
const features = [
  { title: "Professional Design", icon: PenTool, desc: "In-house experts bringing your brand vision to life." },
  { title: "Quality Materials", icon: Diamond, desc: "Premium acrylics, metals, and vinyls built to last." },
  { title: "Custom Fabrication", icon: Settings, desc: "Precision engineering tailored to your exact specs." },
  { title: "Expert Installation", icon: Hammer, desc: "Seamless and safe installation by experienced technicians." },
  { title: "Nationwide Service", icon: Map, desc: "Delivering top-tier signage across Kenya and beyond." },
  { title: "Fast Quotations", icon: Clock, desc: "Quick turnaround on pricing to keep your project moving." },
  { title: "After-Sales Support", icon: Headset, desc: "Ongoing maintenance and support long after installation." },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-charcoal text-white selection:bg-brand-blue selection:text-white pb-20 md:pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark to-charcoal/80 z-0" />
        <div className="relative z-10 max-w-4xl pt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            MAKE YOUR BRAND <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light">VISIBLE.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Premium Signage & Branding Solutions for Businesses. From concept to installation, we make your brand impossible to ignore.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#quote" className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-bold px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105">
              GET A FREE QUOTE
              <ArrowRight size={20} />
            </a>
            <a href="#quote" className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-brand-blue hover:text-brand-blue bg-transparent text-white font-bold px-8 py-4 rounded-sm transition-all duration-300">
              REQUEST SITE VISIT
              <MapPin size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR WORK (PORTFOLIO) SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">OUR WORK</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-brand-blue text-white"
                      : "bg-charcoal border border-gray-700 text-gray-300 hover:border-brand-blue hover:text-brand-blue"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="w-full h-64 bg-charcoal flex flex-col items-center justify-center border border-gray-800 rounded-sm mb-4 group-hover:border-brand-blue/50 transition-colors overflow-hidden relative">
                    <ImageIcon size={48} className="text-gray-600 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                       <span className="text-brand-blue font-semibold flex items-center gap-2">View Project <ArrowRight size={16}/></span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-sm text-brand-blue mt-1 uppercase tracking-wider">{project.category}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3. HOW WE WORK (PROCESS) SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">HOW WE WORK</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A rigorous, standardized engineering and fabrication pipeline from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-charcoal-dark border border-gray-800 p-8 rounded-sm hover:border-brand-blue/40 transition-colors relative">
              <div className="text-brand-blue/20 font-black text-6xl absolute top-4 right-6 z-0">01</div>
              <MessageSquare className="text-brand-blue mb-6 relative z-10" size={32} />
              <h3 className="text-xl font-bold mb-3 relative z-10">Project Inquiry</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">We begin by understanding your brand vision, corporate guidelines, and specific project requirements.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-charcoal-dark border border-gray-800 p-8 rounded-sm hover:border-brand-blue/40 transition-colors relative">
              <div className="text-brand-blue/20 font-black text-6xl absolute top-4 right-6 z-0">02</div>
              <Ruler className="text-brand-blue mb-6 relative z-10" size={32} />
              <h3 className="text-xl font-bold mb-3 relative z-10">Site Assessment</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">Our technical team conducts detailed site visits to capture precise measurements and evaluate installation surfaces.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-charcoal-dark border border-gray-800 p-8 rounded-sm hover:border-brand-blue/40 transition-colors relative">
              <div className="text-brand-blue/20 font-black text-6xl absolute top-4 right-6 z-0">03</div>
              <Monitor className="text-brand-blue mb-6 relative z-10" size={32} />
              <h3 className="text-xl font-bold mb-3 relative z-10">3D Engineering & Costing</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">We develop accurate 3D renders and technical specifications alongside a transparent, detailed quotation.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-charcoal-dark border border-gray-800 p-8 rounded-sm hover:border-brand-blue/40 transition-colors relative">
              <div className="text-brand-blue/20 font-black text-6xl absolute top-4 right-6 z-0">04</div>
              <CheckSquare className="text-brand-blue mb-6 relative z-10" size={32} />
              <h3 className="text-xl font-bold mb-3 relative z-10">Client Sign-Off</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">You review the prototypes and costs. Production commences immediately upon your final approval and deposit.</p>
            </div>

            {/* Step 5 */}
            <div className="bg-charcoal-dark border border-gray-800 p-8 rounded-sm hover:border-brand-blue/40 transition-colors relative">
              <div className="text-brand-blue/20 font-black text-6xl absolute top-4 right-6 z-0">05</div>
              <Wrench className="text-brand-blue mb-6 relative z-10" size={32} />
              <h3 className="text-xl font-bold mb-3 relative z-10">Custom Fabrication</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">Utilizing CNC routing and premium materials, our production team meticulously crafts your signage in-house.</p>
            </div>

            {/* Step 6 */}
            <div className="bg-brand-blue p-8 rounded-sm text-white relative shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="text-white/20 font-black text-6xl absolute top-4 right-6 z-0">06</div>
              <Truck className="text-white mb-6 relative z-10" size={32} />
              <h3 className="text-xl font-bold mb-3 relative z-10">Professional Installation</h3>
              <p className="text-blue-100 text-sm leading-relaxed relative z-10">Our certified technicians ensure a safe, flawless, and highly durable installation on-site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">INDUSTRIES WE SERVE</h2>
              <p className="text-gray-400 max-w-xl text-lg">Delivering high-impact corporate visibility across all major sectors in Kenya.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Banking & Finance", icon: Building2 },
              { name: "Healthcare", icon: HeartPulse },
              { name: "Corporate Offices", icon: Briefcase },
              { name: "Hospitality", icon: Coffee },
              { name: "Retail & Malls", icon: ShoppingCart },
              { name: "Real Estate", icon: HomeIcon },
            ].map((industry, i) => {
              const Icon = industry.icon;
              return (
                <div key={i} className="bg-charcoal border border-gray-800 p-6 rounded-sm flex flex-col items-center justify-center text-center hover:bg-brand-blue/10 hover:border-brand-blue/50 transition-all group cursor-pointer aspect-square">
                  <Icon className="text-gray-500 group-hover:text-brand-blue mb-4 transition-colors" size={36} />
                  <span className="font-semibold text-sm text-gray-300 group-hover:text-white">{industry.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. TRUST SECTION (WHY DENIS CRAFT) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">WHY DENIS CRAFT TECHNOLOGIES?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We don&apos;t just print signs; we engineer visibility. Here is why top businesses trust us with their branding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-charcoal-dark border border-gray-800 p-8 rounded-sm hover:border-brand-blue/30 transition-colors">
                  <Icon className="text-brand-blue mb-6" size={32} />
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
            
            <div className="bg-brand-blue p-8 rounded-sm flex flex-col justify-center items-start text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to stand out?</h3>
              <a href="#quote" className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                Start Your Project <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-16 text-center">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-8 font-semibold">Trusted by Growing Businesses</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xl font-bold text-gray-600">
                  <CheckCircle size={24} /> Brand {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEAD GENERATION FORM */}
      <section id="quote" className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal-dark border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">GET A FREE QUOTE</h2>
            <p className="text-gray-400 text-lg">
              Fill out the details below and our team will get back to you with pricing or to schedule a site visit.
            </p>
          </div>

          <form 
            action="https://formspree.io/f/mnpaewkr" 
            method="POST" 
            encType="multipart/form-data"
            className="bg-charcoal border border-gray-800 p-8 md:p-12 rounded-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                <input type="text" name="name" className="w-full bg-charcoal-dark border border-gray-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder="John Doe" required />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Business Name</label>
                <input type="text" name="business_name" className="w-full bg-charcoal-dark border border-gray-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder="Your Company Ltd" />
              </div>

              {/* Phone/WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone / WhatsApp *</label>
                <input type="tel" name="phone" className="w-full bg-charcoal-dark border border-gray-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder="+254 7XX XXX XXX" required />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location *</label>
                <input type="text" name="location" className="w-full bg-charcoal-dark border border-gray-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder="e.g., Westlands, Nairobi" required />
              </div>

              {/* Service Required */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service Required *</label>
                <select name="service" defaultValue="" className="w-full bg-charcoal-dark border border-gray-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors appearance-none" required>
                  <option value="" disabled>Select a service...</option>
                  <option value="3d-signage">3D Signage & Shopfronts</option>
                  <option value="office-branding">Corporate & Office Branding</option>
                  <option value="vehicle-branding">Vehicle Branding</option>
                  <option value="promotional">Promotional Branding</option>
                  <option value="printing">Digital & Large-Format Printing</option>
                  <option value="design">Design & Brand Development</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range (Optional)</label>
                <select name="budget" defaultValue="" className="w-full bg-charcoal-dark border border-gray-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                  <option value="" disabled>Select budget...</option>
                  <option value="under-50k">Under KES 50,000</option>
                  <option value="50k-100k">KES 50,000 - 100,000</option>
                  <option value="100k-500k">KES 100,000 - 500,000</option>
                  <option value="over-500k">Over KES 500,000</option>
                </select>
              </div>
            </div>

            {/* Additional Details */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Approximate Size & Extra Details</label>
              <textarea name="details" className="w-full bg-charcoal-dark border border-gray-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors min-h-[120px]" placeholder="Tell us about the size of the sign or specific requirements..."></textarea>
            </div>

            {/* File Upload Zone */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-2">Upload Logo or Photo of Premises</label>
              <div className="border-2 border-dashed border-gray-700 bg-charcoal-dark rounded-sm p-8 text-center hover:border-brand-blue transition-colors cursor-pointer group relative">
                <UploadCloud className="mx-auto text-gray-500 group-hover:text-brand-blue mb-3 transition-colors" size={32} />
                <p className="text-sm text-gray-400 group-hover:text-gray-300">Click to <span className="text-brand-blue font-medium">browse</span> your files</p>
                <p className="text-xs text-gray-600 mt-2">Supports JPG, PNG, PDF</p>
                <input type="file" name="attachment" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              </div>
            </div>

            {/* Request Site Visit Checkbox */}
            <div className="mb-8 flex items-center gap-3">
              <input type="checkbox" id="siteVisit" name="request_site_visit" value="Yes" className="w-5 h-5 accent-brand-blue cursor-pointer" />
              <label htmlFor="siteVisit" className="text-gray-300 text-sm cursor-pointer select-none">
                Yes, I would like to request a site visit for accurate measurements.
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue-light text-white font-bold text-lg px-8 py-4 rounded-sm transition-all duration-300 flex justify-center items-center gap-2 transform hover:scale-[1.02]">
              Submit Enquiry <Send size={20} />
            </button>

          </form>
        </div>
      </section>
      
    </main>
  );
}