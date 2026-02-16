import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, Sparkles, ShieldCheck, Smile, ArrowRight, MousePointer2 } from "lucide-react";

const services = [
  {
    title: "Root Canal",
    id: "01",
    icon: Zap,
    color: "#6366f1",
    details: "Micro-Surgical Precision",
    desc: "Using advanced 3D imaging for pain-free endodontics."
  },
  {
    title: "Whitening",
    id: "02",
    icon: Sparkles,
    color: "#a855f7",
    details: "Laser Brightening",
    desc: "Achieve a 5-shade brighter smile in 45 minutes."
  },
  {
    title: "Implants",
    id: "03",
    icon: ShieldCheck,
    color: "#0f172a",
    details: "Swiss Bio-Tech",
    desc: "Titanium roots that integrate with your bone naturally."
  },
  {
    title: "Aligners",
    id: "04",
    icon: Smile,
    color: "#10b981",
    details: "Clear Straightening",
    desc: "AI-designed invisible aligners for perfect results."
  }
];

export default function PulseServices() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // PC Parallax Effect: Cards horizontally move karenge scroll par
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Decorative Title */}
        <div className="absolute left-10 top-20 select-none opacity-[0.03]">
          <h2 className="text-[20vw] font-black leading-none">SERVICES</h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col ml-10 lg:ml-20 absolute z-20 pointer-events-none">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-indigo-600 font-bold tracking-[0.4em] text-xs uppercase mb-4"
          >
            Evolutionary Dentistry
          </motion.p>
          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter">
            The New <br /> Standard.
          </h2>
          <div className="mt-10 flex items-center gap-2 text-slate-400">
             <MousePointer2 size={16} className="animate-bounce" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to explore</span>
          </div>
        </div>

        {/* The Horizontal Service Slider */}
        <motion.div style={{ x }} className="flex gap-8 pl-[40vw]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -20 }}
              className="relative h-[450px] w-[350px] lg:h-[550px] lg:w-[450px] shrink-0 overflow-hidden rounded-[4rem] bg-slate-50 border border-slate-100 group cursor-pointer"
            >
              {/* Image/Gradient Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${service.color}20, transparent)` }}
              />

              <div className="relative p-12 h-full flex flex-col justify-between">
                <div>
                  <span className="text-7xl font-black text-slate-200/50 group-hover:text-indigo-100 transition-colors">
                    {service.id}
                  </span>
                  <div className={`mt-8 w-16 h-16 rounded-3xl bg-white shadow-lg flex items-center justify-center text-slate-900 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500`}>
                    <service.icon size={30} strokeWidth={1.5} />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">{service.details}</p>
                  <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-[280px]">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200 group-hover:bg-indigo-200 transition-colors" />
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final Call to Action Slide */}
          <div className="h-[450px] w-[350px] lg:h-[550px] lg:w-[450px] shrink-0 rounded-[4rem] bg-indigo-600 p-12 flex flex-col justify-center items-center text-center text-white">
             <h4 className="text-4xl font-bold mb-6 italic">Ready to start?</h4>
             <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                Book Consultation
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}