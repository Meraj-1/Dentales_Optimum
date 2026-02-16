import { motion } from "framer-motion";
import { Stethoscope, Sparkles, Smile, ShieldCheck, ArrowRight, Zap } from "lucide-react";

const services = [
  {
    title: "Root Canal",
    desc: "Advanced micro-endodontics for a completely painless experience.",
    icon: Zap,
    color: "bg-blue-500",
  },
  {
    title: "Teeth Whitening",
    desc: "Laser-activated whitening for immediate, long-lasting results.",
    icon: Sparkles,
    color: "bg-indigo-500",
  },
  {
    title: "Dental Implants",
    desc: "Restore your confidence with titanium-grade permanent solutions.",
    icon: ShieldCheck,
    color: "bg-slate-700",
  },
  {
    title: "Aligners & Braces",
    desc: "Invisible aligners designed for maximum comfort and aesthetics.",
    icon: Smile,
    color: "bg-indigo-600",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#FCFDFE] relative overflow-hidden">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 mb-4"
            >
              <Stethoscope size={14} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Our Expertise</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Specialized Care for <br />
              <span className="text-indigo-600 underline decoration-indigo-100 underline-offset-8">Every Smile.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm font-light leading-relaxed">
            Using the latest dental technology to provide precise and comfortable treatments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500"
            >
              {/* Service Icon */}
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={26} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>

              {/* Bottom Action */}
              <a 
                href={service.href} 
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors"
              >
                Learn More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Optional Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-[2.5rem] bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 text-white overflow-hidden relative"
        >
          <div className="relative z-10">
            <h4 className="text-2xl font-bold mb-2">Not sure what you need?</h4>
            <p className="text-slate-400 text-sm">Schedule a free initial consultation with our head dentist.</p>
          </div>
          <button className="relative z-10 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap">
            Book Free Consult
          </button>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
}