import { motion, useScroll, useSpring } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiActivity, FiArrowUpRight, FiShield } from "react-icons/fi";
import { useRef } from "react";

const services = [
  {
    title: "Root Canal Treatment",
    desc: "Advanced painless root canal using 3D digital imaging and rotary endodontics.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
    tag: "Pain-Free",
    stats: "99% Success",
    color: "indigo"
  },
  {
    title: "Teeth Whitening",
    desc: "Professional laser whitening treatment that brightens your smile up to 5 shades.",
    image: "https://images.unsplash.com/photo-1606813902914-2f5a8f2f8cfa?q=80&w=1600&auto=format&fit=crop",
    tag: "Instant Results",
    stats: "45 Min Session",
    color: "blue"
  },
  {
    title: "Dental Implants",
    desc: "Permanent titanium implants that naturally integrate with your jawbone.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",
    tag: "Lifetime Strength",
    stats: "Swiss Quality",
    color: "slate"
  },
  {
    title: "Invisible Aligners",
    desc: "Clear aligner system designed with AI precision to give you perfectly straight teeth.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1600&auto=format&fit=crop",
    tag: "AI Precision",
    stats: "Top Aesthetic",
    color: "emerald"
  },
];

export default function EnhancedServices() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-white overflow-hidden">
      
      {/* Scroll Progress Bar (Top) */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-50" />

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-indigo-50 to-transparent blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-full blur-[120px] opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Minimal & Modern */}
        <div className="relative mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-bold text-[10px] tracking-[0.3em] uppercase mb-6 flex items-center gap-2"
          >
            <FiShield size={14} /> Certified Excellence
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
            The New <span className="text-indigo-600 italic">Standard</span> <br /> 
            in Oral Care.
          </h2>
          
          <p className="mt-8 text-slate-500 font-medium max-w-xl text-lg leading-relaxed">
            Combining biological precision with luxury aesthetics to create smiles that last a lifetime.
          </p>
        </div>

        {/* The Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              // Bento Logic: Alternate column spans
              className={`relative group overflow-hidden rounded-[3rem] bg-slate-50 border border-slate-100 shadow-sm
                ${index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"} 
                h-[450px] md:h-[600px]`}
            >
              {/* Media Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Labels Layer */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
                <div className="px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                  {service.tag}
                </div>
                <motion.div 
                   whileHover={{ rotate: 45 }}
                   className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 cursor-pointer shadow-xl transition-colors hover:bg-indigo-600 hover:text-white"
                >
                  <FiArrowUpRight size={20} />
                </motion.div>
              </div>

              {/* Text Layer */}
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 text-indigo-400 mb-4">
                     <FiCheckCircle />
                     <span className="text-xs font-bold uppercase tracking-tighter">{service.stats}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-none">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-sm mb-8 transition-all group-hover:text-white">
                    {service.desc}
                  </p>
                  
                  <div className="h-px w-full bg-white/20 mb-8" />
                  
                  <button className="flex items-center gap-4 text-white font-bold text-sm group/btn">
                    EXPLORE PROCEDURE
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-900 transition-all duration-300">
                       <FiArrowRight />
                    </div>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}