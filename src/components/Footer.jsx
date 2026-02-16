import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, Heart, ArrowRight } from "lucide-react";

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B0F1A] text-slate-400 pt-24 pb-12 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-black text-white tracking-tighter flex items-center gap-2">
              SmileCare <span className="text-indigo-500">.</span>
            </h3>
            <p className="mt-6 text-lg leading-relaxed max-w-sm">
              Revolutionizing oral healthcare through AI-driven diagnostics and a patient-first philosophy. Your smile is our legacy.
            </p>
            <div className="flex gap-4 mt-8">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, textShadow: "0 0 8px rgb(255,255,255)" }}
                  className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-white hover:bg-indigo-600 transition-all border border-slate-700/50"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700/50 p-8 rounded-[2.5rem]">
              <h4 className="text-white font-bold text-xl mb-2">Subscribe to our Wellness Newsletter</h4>
              <p className="text-sm mb-6 text-slate-400">Get monthly dental tips and exclusive offers directly in your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white"
                />
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
                  Join Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-slate-800/50 mb-16" />

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Navigation</h5>
            <ul className="space-y-4 font-medium">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">Clinic Philosophy</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Advanced Treatments</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Patient Portal</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Specialties</h5>
            <ul className="space-y-4 font-medium">
              <li><span className="hover:text-indigo-400 cursor-pointer transition-colors">Digital Smile Design</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer transition-colors">Laser Endodontics</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer transition-colors">Sedation Dentistry</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer transition-colors">Pediatric Care</span></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Find Us</h5>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin size={18} className="text-indigo-500 shrink-0" />
                  <span>Andheri West, Link Road,<br /> Mumbai, MH 400053</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={18} className="text-indigo-500 shrink-0" />
                  <span>+91 99999 99999</span>
                </div>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
                <p className="text-[10px] font-black uppercase text-indigo-500 mb-2">Emergency Slot</p>
                <p className="text-white font-bold text-sm mb-1">Available Today</p>
                <p className="text-xs">Book before 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Credits */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium text-slate-500">
            © {currentYear} SmileCare Dental. ISO 9001:2015 Certified Clinic.
          </p>
          
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <p className="text-xs flex items-center gap-2">
            Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> for Healthy Smiles
          </p>
        </div>
      </div>
    </footer>
  );
}