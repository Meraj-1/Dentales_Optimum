import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MessageSquare, Star, ArrowUpRight, Award, ShieldCheck } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for the image section
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#fcfdfe] overflow-hidden">
      
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-32 z-0" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT CONTENT (6 Columns) */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.15em]">Now Accepting New Patients</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-6xl md:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight"
          >
            Elevating the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Standard of Dental</span> Excellence.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-xl leading-relaxed font-light"
          >
            A bespoke dental experience focusing on precision, aesthetics, and your ultimate comfort. Where clinical expertise meets luxury care.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-5 pt-4"
          >
            <a href="#contact" className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all hover:bg-indigo-600 shadow-xl shadow-slate-200">
              Reserve Visit
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <a href="tel:+919999" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:border-indigo-600 transition-all">
              <MessageSquare size={18} className="text-indigo-600" />
              Consultation
            </a>
          </motion.div>

          {/* Social Proof Stripe */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-8 pt-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" />
                </div>
              ))}
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-indigo-600 text-indigo-600" />)}
              </div>
              <p className="text-xs font-bold text-slate-800 mt-1">Over 2,500+ 5-Star Reviews</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUALS (5 Columns) */}
        <div className="lg:col-span-5 relative">
          <motion.div style={{ y: y1 }} className="relative z-10">
            {/* Master Image Frame */}
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                alt="Elite Clinic"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Elite Badge */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -right-8 top-20 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white z-20"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
                  <Award size={24} />
                </div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter text-center">National Award <br/> Winner 2024</p>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-12 bottom-20 bg-slate-900 text-white p-6 rounded-[2rem] shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <ShieldCheck size={32} className="text-indigo-400" />
                <div>
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Years of Trust</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}