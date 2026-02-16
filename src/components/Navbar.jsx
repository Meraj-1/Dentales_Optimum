import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Sparkles, Shield, Clock } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const serviceLinks = [
  { name: "General Dentistry", href: "#general", icon: Shield },
  { name: "Cosmetic Surgery", href: "#cosmetic", icon: Sparkles },
  { name: "Emergency Care", href: "#emergency", icon: Clock },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[110] origin-left" 
        style={{ scaleX }} 
      />

      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12">
          
          {/* Logo Section */}
          <a href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="w-11 h-11 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-blue-200 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                S
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-800 leading-none tracking-tight">SmileCare</span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">Dental Clinic</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-all">
                Services <ChevronDown size={16} className={`transition-transform ${activeDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-2xl p-2 mt-2"
                  >
                    {serviceLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-xl transition-colors group"
                      >
                        <item.icon size={18} className="text-slate-400 group-hover:text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">{item.name}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right mr-2 hidden xl:block">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Emergency 24/7</p>
              <p className="text-sm font-bold text-slate-800">+91 99999 99999</p>
            </div>
            <a
              href="#booking"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-bold shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-800 bg-slate-50 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm lg:hidden"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl lg:hidden p-8 z-[120]"
              >
                <div className="flex justify-between items-center mb-10">
                  <span className="font-bold text-xl">Navigation</span>
                  <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={20}/></button>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Main Menu</p>
                  {[...serviceLinks, ...navLinks].map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <a
                    href="tel:+919999999999"
                    className="flex items-center justify-center gap-3 bg-slate-900 text-white w-full py-4 rounded-2xl font-bold"
                  >
                    <Phone size={20} /> Call Clinic
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}