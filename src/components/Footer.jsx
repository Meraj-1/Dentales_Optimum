import { motion } from "lucide-react"; // Note: Use Framer Motion for animations
import { motion as m } from "framer-motion";
import { 
  Facebook, Instagram, Linkedin, Twitter, 
  Phone, Mail, MapPin, Heart, ArrowRight, 
  ShieldCheck, Globe, Zap 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants for staggered entrance
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <footer className="relative bg-[#020617] text-slate-400 pt-28 pb-10 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION 1: Master Branding & Newsletter */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <m.div 
            {...fadeInUp}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-black text-white tracking-tighter flex items-center gap-2">
                SMILECARE<span className="text-indigo-500 text-5xl leading-none">.</span>
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-md">
                Crafting world-class smiles through <span className="text-white font-medium">biometric precision</span> and compassionate care. Elevating dental standards since 2014.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Facebook, link: "#" },
                { Icon: Instagram, link: "#" },
                { Icon: Twitter, link: "#" },
                { Icon: Linkedin, link: "#" }
              ].map((item, i) => (
                <m.a
                  key={i}
                  href={item.link}
                  whileHover={{ scale: 1.1, backgroundColor: "#4f46e5", color: "#fff" }}
                  className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all shadow-xl"
                >
                  <item.Icon size={20} />
                </m.a>
              ))}
            </div>
          </m.div>

          <m.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative group p-1 rounded-[3rem] bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
              <div className="bg-[#0f172a] rounded-[2.8rem] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4 text-indigo-400">
                  <Zap size={20} className="fill-indigo-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Exclusive Updates</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-6">Join our dental wellness circle</h4>
                <form className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your professional email" 
                    className="w-full px-8 py-5 rounded-2xl bg-slate-800/50 border border-slate-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-white font-medium pr-40"
                  />
                  <button className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 rounded-xl font-bold text-sm transition-all flex items-center gap-2 group">
                    SUBSCRIBE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <p className="mt-4 text-[10px] text-slate-500 italic">No spam. Only clinical insights and smile tips.</p>
              </div>
            </div>
          </m.div>
        </div>

        {/* SECTION 2: Exploded Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          
          {/* Column 1 */}
          <div className="space-y-6">
            <h5 className="text-white font-black text-[10px] uppercase tracking-[0.4em] pb-2 border-b border-slate-800">Practice</h5>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all" />Our Story</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all" />Technology</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all" />Safety Protocols</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all" />Career</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <h5 className="text-white font-black text-[10px] uppercase tracking-[0.4em] pb-2 border-b border-slate-800">Services</h5>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Dental Implants</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Root Canal Expert</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Invisible Aligners</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="col-span-2 space-y-8">
            <h5 className="text-white font-black text-[10px] uppercase tracking-[0.4em] pb-2 border-b border-slate-800">Global Reach</h5>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0"><MapPin size={16} /></div>
                  <p className="text-sm leading-relaxed">Supreme Center, 4th Floor,<br /> Link Road, Mumbai 400053</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0"><Phone size={16} /></div>
                  <p className="text-sm font-bold text-white">+91 (22) 4567 8900</p>
                </div>
              </div>
              
              <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black text-emerald-500 uppercase">Clinic Open</span>
                  </div>
                  <p className="text-xs font-medium text-slate-400">Next available slot: <br /><span className="text-white">Today, 4:30 PM</span></p>
                </div>
                <a href="#" className="text-indigo-400 text-[10px] font-black uppercase mt-4 flex items-center gap-1 hover:gap-2 transition-all">
                  Get Directions <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Legal & Bottom-bar */}
        <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold tracking-widest uppercase">
          <div className="flex items-center gap-8">
            <p className="text-slate-500 italic">© {currentYear} SmileCare Collective</p>
            <div className="hidden md:flex items-center gap-4 text-slate-600">
              <ShieldCheck size={14} /> <span>HIPAA Secured</span>
              <Globe size={14} className="ml-2" /> <span>EN-IN</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            Design with <Heart size={14} className="text-rose-600 fill-rose-600 animate-bounce" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
}