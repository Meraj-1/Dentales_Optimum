import { motion } from "framer-motion";
import { Zap, Sparkles, ShieldCheck, Smile, ArrowUpRight, Activity, Plus } from "lucide-react";

const services = [
  {
    title: "Root Canal",
    desc: "Painless micro-surgery using 3D imaging for instant relief.",
    icon: Zap,
    stat: "High Precision",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Laser Whitening",
    desc: "Achieve a 5-shade brighter smile in just one 45-min session.",
    icon: Sparkles,
    stat: "45 Min Session",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Dental Implants",
    desc: "Permanent titanium roots with life-like aesthetic crowns.",
    icon: ShieldCheck,
    stat: "Lifetime Bond",
    color: "from-slate-500/20 to-slate-800/20",
    border: "border-slate-200",
    iconColor: "text-slate-700"
  },
  {
    title: "Aligners",
    desc: "Clear, invisible aligners for comfortable teeth straightening.",
    icon: Smile,
    stat: "Top Aesthetic",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-100",
    iconColor: "text-emerald-600"
  }
];

export default function UnifiedServices() {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-[#fcfdfe] overflow-hidden">
      
      {/* Dynamic Background Shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Responsive Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[2px] bg-indigo-600"></span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600">Our Expertise</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tighter">
            We specialize in making <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Smiles Remarkable.</span>
          </h2>
        </div>

        {/* Adaptive Grid: 1 Col (Mobile), 2 Col (Tablet), 4 Col (PC) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative p-8 rounded-[2.5rem] bg-white border ${service.border} shadow-sm hover:shadow-xl hover:shadow-indigo-50 transition-all duration-500 overflow-hidden`}
            >
              {/* Gradient Corner Decor */}
              <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${service.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Service Meta */}
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center ${service.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                  <Activity size={10} className="text-slate-400" />
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{service.stat}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
                  {service.desc}
                </p>
                
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 hover:gap-3 transition-all">
                  Consult Now <ArrowUpRight size={16} />
                </button>
              </div>

              {/* Unique Number Indicator (Backdrop) */}
              <span className="absolute -bottom-6 -right-2 text-8xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Global CTA - Responsive */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 lg:mt-24 p-10 lg:p-16 rounded-[3rem] bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden"
        >
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready for a transformation?</h3>
            <p className="text-slate-400 max-w-md font-medium">
              Book a consultation today and discover why we are the top-rated clinic for advanced dental solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full lg:w-auto">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
              Secure Appointment
            </button>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold transition-all">
              Live Chat
            </button>
          </div>

          {/* Abstract Shape Decor */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500 opacity-10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500 opacity-10 rounded-full blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
}