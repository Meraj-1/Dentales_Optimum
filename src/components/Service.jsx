import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Sparkles,
  ShieldCheck,
  Smile,
  ArrowRight,
  MousePointer2,
} from "lucide-react";

const services = [
  {
    title: "Root Canal",
    id: "01",
    icon: Zap,
    color: "#6366f1",
    details: "Micro-Surgical Precision",
    desc: "Using advanced 3D imaging for pain-free endodontics.",
  },
  {
    title: "Whitening",
    id: "02",
    icon: Sparkles,
    color: "#a855f7",
    details: "Laser Brightening",
    desc: "Achieve a 5-shade brighter smile in 45 minutes.",
  },
  {
    title: "Implants",
    id: "03",
    icon: ShieldCheck,
    color: "#0f172a",
    details: "Swiss Bio-Tech",
    desc: "Titanium roots that integrate with your bone naturally.",
  },
  {
    title: "Aligners",
    id: "04",
    icon: Smile,
    color: "#10b981",
    details: "Clear Straightening",
    desc: "AI-designed invisible aligners for perfect results.",
  },
];

export default function PulseServices() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-70%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
          alt="Dental Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
      </div>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Decorative Big Text */}
        <div className="absolute left-10 top-24 select-none opacity-[0.04]">
          <h2 className="text-[18vw] font-black leading-none text-slate-900">
            CARE
          </h2>
        </div>

        {/* Left Heading Content */}
        <div className="absolute z-20 ml-10 lg:ml-24 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-indigo-600 font-bold tracking-[0.4em] text-xs uppercase mb-6"
          >
            Advanced Dentistry
          </motion.p>

          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-tight">
            Designed for <br /> Perfect Smiles.
          </h2>

          <div className="mt-12 flex items-center gap-3 text-slate-400">
            <MousePointer2 size={16} className="animate-bounce" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Scroll to explore
            </span>
          </div>
        </div>

        {/* Horizontal Slider */}
        <motion.div style={{ x }} className="flex gap-10 pl-[45vw]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -15 }}
              transition={{ duration: 0.4 }}
              className="relative h-[500px] w-[380px] lg:h-[580px] lg:w-[460px] shrink-0 rounded-[3rem] bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl group overflow-hidden"
            >
              {/* Gradient Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
                style={{
                  background: `radial-gradient(circle at top right, ${service.color}30, transparent 60%)`,
                }}
              />

              <div className="relative p-12 h-full flex flex-col justify-between">
                <div>
                  <span className="text-7xl font-black text-slate-200 group-hover:text-indigo-100 transition">
                    {service.id}
                  </span>

                  <div className="mt-8 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">
                    {service.details}
                  </p>

                  <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed max-w-[280px]">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200 group-hover:bg-indigo-300 transition-colors" />
                  <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final CTA Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-[500px] w-[380px] lg:h-[580px] lg:w-[460px] shrink-0 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-purple-600 p-12 flex flex-col justify-center items-center text-center text-white shadow-2xl"
          >
            <h4 className="text-4xl font-bold mb-6">Ready for Your Smile?</h4>

            <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
              Book Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
