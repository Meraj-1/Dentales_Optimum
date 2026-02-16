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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* Subtle Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-indigo-600 z-[1000] origin-left" style={{ scaleX }} />

      <nav className={`fixed top-0 w-full z-[150] transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-slate-100" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          
          {/* Logo */}
          <a href="/" className={`relative z-[1001] flex items-center gap-2.5`}>
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold transition-all duration-300 ${isOpen ? "bg-white text-indigo-900" : "bg-indigo-600 text-white shadow-md"}`}>
              S
            </div>
            <span className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${isOpen ? "text-white" : "text-slate-900"}`}>
              Smile<span className="text-indigo-600">Care</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[13px] uppercase tracking-widest font-bold text-slate-500 hover:text-indigo-600 transition-colors">{link.name}</a>
            ))}
            <button className="bg-slate-900 text-white px-7 py-2.5 rounded-full text-xs font-bold hover:bg-indigo-700 transition-all shadow-sm active:scale-95">
              BOOK APPOINTMENT
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative z-[1001] p-2 transition-all duration-300 ${
              isOpen ? "text-white" : "text-slate-900"
            }`}
          >
            {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* --- ELITE MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-slate-900 z-[999] lg:hidden flex flex-col pt-32 pb-10 px-8"
          >
            {/* Minimalist Background Detail */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="flex flex-col h-full relative z-10">
              
              {/* Services List */}
              <div className="mb-10">
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Medical Specialties</p>
                <div className="space-y-5">
                  {serviceLinks.map((s, i) => (
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={s.name}
                      href={s.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 group-active:border-indigo-500 group-active:text-indigo-500 transition-colors">
                          <s.icon size={20} strokeWidth={1.2} />
                        </div>
                        <div>
                          <p className="text-white text-base font-medium">{s.name}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{s.desc}</p>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-slate-700 group-active:text-indigo-500" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Links Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-4 px-4 rounded-xl bg-slate-800/40 text-slate-300 text-xs font-semibold border border-slate-800 transition-all active:bg-slate-800 active:text-white"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Bottom Actions - Ergonomic & Clean */}
              <div className="mt-auto space-y-4">
                <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg active:scale-[0.98] transition-all">
                  BOOK CONSULTATION
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:+919999" className="flex items-center justify-center gap-2.5 bg-white text-slate-900 py-4 rounded-xl font-bold text-xs active:bg-slate-100 transition-all">
                    <Phone size={14} /> DIRECT CALL
                  </a>
                  <a href="https://wa.me/123" className="flex items-center justify-center gap-2.5 bg-emerald-600/10 text-emerald-500 border border-emerald-500/20 py-4 rounded-xl font-bold text-xs active:bg-emerald-600/20 transition-all">
                    <MessageSquare size={14} /> WHATSAPP
                  </a>
                </div>

                <div className="pt-4 flex items-center justify-center gap-2 text-slate-500 text-[9px] font-bold tracking-[0.2em] uppercase">
                  <MapPin size={10} /> MUMBAI • MON - SAT 09:00 - 20:00
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}