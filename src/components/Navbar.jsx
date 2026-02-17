import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import BookingForm from "./BookingForm";

const navLinks = [
  { name: "About Clinic", href: "#about" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    document.body.style.overflow = (isOpen || isModalOpen) ? "hidden" : "unset";
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, isModalOpen]);

  return (
    <>
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-indigo-600 z-[200] origin-left" style={{ scaleX }} />

      <nav className={`fixed top-0 w-full z-[150] transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl py-3 shadow-lg border-b border-slate-200/50" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <a href="/" className="relative z-[1001] flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black shadow-lg">S</div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? "text-white" : "text-slate-900"}`}>SmileCare</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[11px] uppercase tracking-widest font-bold text-slate-500 hover:text-indigo-600 transition-colors">
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-slate-900 text-white px-8 py-3 rounded-full text-[11px] font-black tracking-widest hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-95"
            >
              BOOK APPOINTMENT
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden relative z-[1001] p-2 rounded-full ${isOpen ? "bg-white/10 text-white" : "bg-slate-100 text-slate-900"}`}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- ELITE BOOKING MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden z-[2001]"
            >
              <BookingForm onClose={() => setIsModalOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-slate-900 z-[999] lg:hidden flex flex-col pt-32 pb-10 px-8"
          >
            <div className="space-y-8">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                  key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                  className="block text-4xl font-bold text-white tracking-tighter hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <button 
                onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                className="w-full bg-indigo-600 text-white py-6 rounded-2xl font-black text-sm tracking-widest shadow-2xl active:scale-95 transition-all"
              >
                BOOK CONSULTATION
              </button>
              <div className="grid grid-cols-2 gap-3 font-bold text-[11px] tracking-wider uppercase text-white">
                <a href="tel:+91" className="flex items-center justify-center gap-2 bg-white/10 py-4 rounded-2xl border border-white/10"><Phone size={14} /> Call Now</a>
                <a href="#" className="flex items-center justify-center gap-2 bg-emerald-500 py-4 rounded-2xl"><MessageSquare size={14} /> WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}