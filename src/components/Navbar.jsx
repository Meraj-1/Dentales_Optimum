import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Sparkles, Shield, Clock, MapPin, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const serviceLinks = [
  { name: "General Dentistry", href: "#general", icon: Shield, desc: "Routine checkups" },
  { name: "Cosmetic Surgery", href: "#cosmetic", icon: Sparkles, desc: "Smile makeovers" },
  { name: "Emergency Care", href: "#emergency", icon: Clock, desc: "24/7 Support" },
];

const navLinks = [
  { name: "About Clinic", href: "#about" },
  { name: "Patient Reviews", href: "#testimonials" },
  { name: "Get in Touch", href: "#contact" },
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

  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } },
    exit: { opacity: 0, y: 10 }
  };

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[150] origin-left" style={{ scaleX }} />

      <nav className={`fixed w-full z-[140] transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5">
          
          {/* Logo */}
          <a href="/" className="relative z-[160] flex items-center gap-2">
            <motion.div 
              layout
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-black transition-colors shadow-lg ${
                isOpen ? "bg-white text-blue-600" : "bg-blue-600 text-white"
              }`}
            >
              S
            </motion.div>
            <span className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? "text-white" : "text-slate-800"}`}>
              Smile<span className="text-blue-600 font-extrabold">Care</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">{link.name}</a>
            ))}
            <a href="#book" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition-all">Book Now</a>
          </div>

          {/* Mobile Toggle */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative z-[160] p-2.5 rounded-xl transition-all ${
              isOpen ? "bg-white/10 text-white" : "bg-slate-100 text-slate-900"
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>

        {/* --- PROFESSIONAL MOBILE OVERLAY --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950 z-[150] lg:hidden flex flex-col pt-24 pb-10 px-6"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none" />

              <motion.div 
                variants={containerVars} 
                initial="initial" 
                animate="animate" 
                className="flex flex-col h-full"
              >
                {/* Section 1: Services Grid */}
                <motion.div variants={itemVars} className="mb-8">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-blue-400 text-xs font-black uppercase tracking-widest">Specialties</h3>
                    <span className="text-[10px] text-slate-500 uppercase">Swipe for more</span>
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                    {serviceLinks.map((service) => (
                      <a 
                        key={service.name} 
                        href={service.href} 
                        onClick={() => setIsOpen(false)}
                        className="min-w-[140px] p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3"
                      >
                        <service.icon className="text-blue-500" size={20} />
                        <div>
                          <p className="text-white text-sm font-bold leading-tight">{service.name}</p>
                          <p className="text-slate-500 text-[10px] mt-1">{service.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Section 2: Main Navigation Links */}
                <motion.div variants={itemVars} className="space-y-2 mb-8">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 text-slate-200 border border-slate-800/50 active:bg-blue-600/10 active:border-blue-600/30 transition-all"
                    >
                      <span className="font-semibold">{link.name}</span>
                      <ArrowRight size={16} className="text-slate-600" />
                    </a>
                  ))}
                </motion.div>

                {/* Section 3: Bottom Action Dashboard */}
                <motion.div variants={itemVars} className="mt-auto space-y-4">
                  <div className="bg-blue-600 rounded-3xl p-5 shadow-xl shadow-blue-900/20 relative overflow-hidden group">
                    <div className="relative z-10 flex justify-between items-center">
                      <div>
                        <p className="text-blue-100 text-xs font-bold uppercase tracking-tighter">Instant Access</p>
                        <p className="text-white text-lg font-black tracking-tight leading-tight">Book an <br/>Appointment</p>
                      </div>
                      <Calendar size={32} className="text-white/40" />
                    </div>
                    <button className="w-full mt-4 bg-white text-blue-600 py-3 rounded-xl font-bold text-sm shadow-inner active:scale-95 transition-transform">
                      Check Available Slots
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a href="tel:+919999" className="flex items-center justify-center gap-2 bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm active:bg-slate-700 transition-colors">
                      <Phone size={18} /> Call Clinic
                    </a>
                    <a href="https://wa.me/123" className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-2xl font-bold text-sm active:scale-95 transition-transform">
                      <MessageSquare size={18} /> WhatsApp
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-slate-600 text-[10px] font-medium tracking-wide">
                    <MapPin size={10} />
                    <span>CENTRAL MUMBAI • OPEN TILL 8:00 PM</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}