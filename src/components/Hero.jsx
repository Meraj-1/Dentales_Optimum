import { motion } from "framer-motion";
import { Calendar, MessageSquare, Star, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-[#fafbff] overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[300px] h-[300px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 mb-6">
            <Star size={14} className="fill-indigo-600" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Top Rated Clinic in Mumbai</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight">
            Advanced Dental Care for a <span className="text-indigo-600">Perfect Smile.</span>
          </h1>
          
          <p className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed">
            Experience world-class dental treatments with our expert specialists. 
            We combine technology and care to give you the smile you deserve.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
            >
              <Calendar size={18} />
              Book Appointment
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919999999999" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
            >
              <MessageSquare size={18} className="text-emerald-500" />
              WhatsApp Us
            </motion.a>
          </div>

          {/* Quick Trust Badges */}
          <div className="mt-12 flex flex-wrap gap-6 border-t border-slate-100 pt-8">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-indigo-600" size={20} />
              <span className="text-sm font-medium text-slate-500">Painless Procedure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-indigo-600" size={20} />
              <span className="text-sm font-medium text-slate-500">Expert Dentists</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUALS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Main Image Wrapper */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
              alt="Professional Dentist"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card 1: Patients */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-50 z-20 hidden sm:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                10k+
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Happy Patients</p>
                <p className="text-sm font-bold text-slate-800">Trusted Worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2: Rating */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 z-20 hidden sm:block"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-xs font-black text-slate-800">4.9/5 Rating</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}