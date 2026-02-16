import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12">
        
        {/* Logo */}
        <a href="/" className="group flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-6 transition-transform">
            S
          </div>
          <span className="text-2xl font-extrabold text-slate-800 tracking-tight">
            Smile<span className="text-blue-600">Care</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-blue-600 font-semibold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-blue-100 transition-all active:scale-95"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden p-2 text-slate-800 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100" />
              <a
                href="tel:+919999999999"
                className="flex justify-center items-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-bold"
              >
                <Phone size={20} />
                Call +91 99999 99999
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}