import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Zap, Sparkles, ShieldCheck, Smile, ArrowUpRight, Activity, Users, Award } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Root Canal Treatment",
    desc: "Micro-endodontic precision using advanced 3D imaging for a quiet, painless, and rapid recovery.",
    icon: Zap,
    stat: "99% Success Rate",
    size: "lg:col-span-2 lg:row-span-1",
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "02",
    title: "Laser Whitening",
    desc: "Organic whitening for sensitive teeth.",
    icon: Sparkles,
    stat: "Instant Results",
    size: "lg:col-span-1",
    color: "from-indigo-600 to-purple-600",
  },
  {
    id: "03",
    title: "Dental Implants",
    desc: "Titanium roots that feel natural.",
    icon: ShieldCheck,
    stat: "Lifetime Warranty",
    size: "lg:col-span-1",
    color: "from-slate-700 to-slate-900",
  },
  {
    id: "04",
    title: "Smart Aligners",
    desc: "Invisible, AI-designed aligners for a seamless smile correction journey without traditional braces.",
    icon: Smile,
    stat: "1000+ Smiles Fixed",
    size: "lg:col-span-2",
    color: "from-indigo-600 to-blue-700",
  }
];

function ServiceCard({ service, index }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-[3rem] border border-slate-200/60 bg-white p-10 transition-all hover:shadow-[0_40px_80px_-15px_rgba(79,70,229,0.15)] ${service.size}`}
    >
      {/* --- ELITE SPOTLIGHT EFFECT --- */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(79, 70, 229, 0.07),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <div className={`w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500`}>
              <service.icon size={28} strokeWidth={1.5} />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 w-fit">
              <Activity size={12} className="text-indigo-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{service.stat}</span>
            </div>
          </div>
          <span className="text-4xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">
            {service.id}
          </span>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-700 transition-colors">
            {service.title}
          </h3>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed font-medium max-w-[400px]">
            {service.desc}
          </p>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            Explore Treatment 
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
      {/* Decorative Elite Gradients */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[120px]" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-blue-100/40 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER - POLISHED */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-6"
            >
              <div className="h-px w-12 bg-indigo-600" />
              Elite Medical Services
            </motion.div>
            <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tighter">
              World-class Care, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 italic">Redefined.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-xl text-slate-500 font-medium leading-relaxed border-l-2 border-indigo-100 pl-6">
              Merging surgical precision with a hospitality-first approach to transform your dental journey.
            </p>
          </div>
        </div>

        {/* BENTO GRID - POLISHED */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}

          {/* ELITE CALL-TO-ACTION CARD */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="lg:col-span-1 bg-slate-900 rounded-[3rem] p-10 flex flex-col justify-between text-white relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <div className="flex -space-x-3 mb-8">
                {[1, 2, 3].map((i) => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-slate-900" src={`https://i.pravatar.cc/150?img=${i+20}`} alt="user" />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-slate-900 bg-indigo-600 flex items-center justify-center text-[10px] font-bold">
                  +2k
                </div>
              </div>
              <h4 className="text-3xl font-bold mb-4 leading-tight">Join our community of happy smiles.</h4>
              <p className="text-slate-400 font-medium text-sm">Experience the future of dentistry with our award-winning team.</p>
            </div>

            <button className="relative z-10 mt-12 w-full bg-white text-slate-900 py-5 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-indigo-500 hover:text-white transition-all active:scale-95">
              Book Your Visit
            </button>

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}