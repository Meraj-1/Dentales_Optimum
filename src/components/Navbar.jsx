import { useState, useEffect } from "react";
import { Menu, X, Phone, Shield, Sparkles, Clock, Calendar, MessageSquare, ArrowRight, MapPin } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const serviceLinks = [
  { name: "General Dentistry", href: "#general", icon: Shield, desc: "Routine checkups" },
  { name: "Cosmetic Surgery", href: "#cosmetic", icon: Sparkles, desc: "Smile makeovers" },
  { name: "Emergency Care", href: "#emergency", icon: Clock, desc: "24/7 Support" },
];

const navLinks = [
  { name: "About Clinic", href: "#about" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[210] origin-left" style={{ scaleX }} />

      <nav className={`fixed w-full z-[150] transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5">
          
          {/* Logo Section */}
          <a href="/" className={`relative z-[220] flex items-center gap-2 transition-colors duration-300 ${isOpen ? "text-white" : "text-slate-800"}`}>
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black shadow-lg transition-all ${isOpen ? "bg-white text-blue-600" : "bg-blue-600 text-white"}`}>
              S
            </div>
            <span className="text-lg font-bold tracking-tight">
              Smile<span className="text-blue-600 font-extrabold">Care</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">{link.name}</a>
            ))}
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all active:scale-95">
              Book Appointment
            </button>
          </div>

          {/* Mobile Toggle - Fix: Re-positioned for better layering */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative z-[220] p-2.5 rounded-xl transition-all duration-300 ${
              isOpen ? "bg-white/10 text-white" : "bg-slate-100 text-slate-900"
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* --- FIXED MOBILE OVERLAY --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-950 z-[200] lg:hidden flex flex-col pt-24 pb-10 px-6 overflow-hidden"
            >
              {/* Subtle Gradient Glow Fix */}
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />

              <div className="flex flex-col h-full relative z-10">
                
                {/* 1. Services Section */}
                <div className="mb-8">
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">Our Services</p>
                  <div className="grid grid-cols-1 gap-3">
                    {serviceLinks.map((s, i) => (
                      <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={s.name}
                        href={s.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 active:bg-white/10"
                      >
                        <div className="p-2.5 bg-blue-600/20 rounded-xl text-blue-500"><s.icon size={20}/></div>
                        <div>
                          <p className="text-white text-sm font-bold">{s.name}</p>
                          <p className="text-slate-500 text-[10px]">{s.desc}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* 2. Nav Links Section */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {navLinks.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="py-4 px-2 text-center rounded-2xl bg-slate-900 text-slate-200 text-xs font-bold border border-slate-800"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* 3. Bottom Action Dashboard - Ergonomic Fix */}
                <div className="mt-auto space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-blue-600 rounded-3xl p-5 shadow-2xl shadow-blue-900/30"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-white font-black text-lg leading-tight">Need a Smile <br/> Makeover?</p>
                      <Calendar className="text-white/40" size={28} />
                    </div>
                    <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-transform">
                      Book Now
                    </button>
                  </motion.div>

                  <div className="flex gap-3">
                    <a href="tel:+919999" className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-4 rounded-2xl font-bold text-sm active:scale-95 transition-transform">
                      <Phone size={18} /> Call
                    </a>
                    <a href="https://wa.me/123" className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-2xl font-bold text-sm active:scale-95 transition-transform">
                      <MessageSquare size={18} /> WhatsApp
                    </a>
                  </div>

                  <div className="text-center">
                    <p className="text-[10px] text-slate-600 font-medium tracking-widest flex items-center justify-center gap-1">
                      <MapPin size={10} /> MUMBAI, MAHARASHTRA • OPEN NOW
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}