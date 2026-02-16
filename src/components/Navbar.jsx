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
      {/* Scroll Progress Bar - Highest Priority */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[1000] origin-left" style={{ scaleX }} />

      <nav className={`fixed top-0 w-full z-[150] transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          
          {/* Logo - Always stays on top of the overlay */}
          <a href="/" className={`relative z-[1001] flex items-center gap-2`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-lg transition-all duration-300 ${isOpen ? "bg-white text-blue-600" : "bg-blue-600 text-white"}`}>
              S
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-white" : scrolled ? "text-slate-900" : "text-slate-800"}`}>
              Smile<span className="text-blue-600 font-extrabold">Care</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-bold transition-colors ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-700 hover:text-blue-900"}`}>{link.name}</a>
            ))}
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all active:scale-95">
              Book Appointment
            </button>
          </div>

          {/* Mobile Toggle Button - Forced z-index to stay above everything */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative z-[1001] p-3 rounded-2xl transition-all duration-300 ${
              isOpen ? "bg-white/10 text-white rotate-90" : scrolled ? "bg-blue-50 text-blue-600" : "bg-white/20 backdrop-blur-sm text-slate-800 border border-white/50"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY: Fixed outside the Nav tag to break parent constraints --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950 z-[999] lg:hidden flex flex-col pt-32 pb-10 px-6"
          >
            {/* Background Glows for Premium Look */}
            <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-5%] left-[-5%] w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col h-full relative z-10 overflow-y-auto no-scrollbar"
            >
              {/* 1. Services Section */}
              <div className="mb-8">
                <p className="text-blue-400 text-[11px] font-black uppercase tracking-[0.2em] mb-4">Our Services</p>
                <div className="grid grid-cols-1 gap-3">
                  {serviceLinks.map((s, i) => (
                    <a
                      key={s.name}
                      href={s.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 active:bg-blue-600/20 transition-all"
                    >
                      <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400"><s.icon size={22}/></div>
                      <div>
                        <p className="text-white font-bold">{s.name}</p>
                        <p className="text-slate-500 text-xs">{s.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* 2. Nav Links Section */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-5 px-2 text-center rounded-2xl bg-slate-900 text-slate-200 text-sm font-bold border border-slate-800 active:border-blue-500 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* 3. Bottom Dashboard (Ergonomic Zone) */}
              <div className="mt-auto space-y-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 shadow-2xl shadow-blue-900/40">
                  <div className="flex justify-between items-start mb-6">
                    <p className="text-white font-black text-xl leading-tight tracking-tight">Schedule Your <br/> Visit Today</p>
                    <Calendar className="text-white/30" size={32} />
                  </div>
                  <button className="w-full bg-white text-blue-700 py-4 rounded-2xl font-black text-sm shadow-xl active:scale-95 transition-transform uppercase tracking-wider">
                    Book Appointment
                  </button>
                </div>

                <div className="flex gap-3">
                  <a href="tel:+919999" className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-4 rounded-2xl font-bold active:scale-95 transition-all">
                    <Phone size={18} /> Call Us
                  </a>
                  <a href="https://wa.me/123" className="p-4 bg-[#25D366] text-white rounded-2xl active:scale-95 transition-all">
                    <MessageSquare size={24} />
                  </a>
                </div>

                <p className="text-center text-[10px] text-slate-600 font-bold tracking-widest flex items-center justify-center gap-2">
                  <MapPin size={12} /> MUMBAI • OPEN 09:00 - 21:00
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}