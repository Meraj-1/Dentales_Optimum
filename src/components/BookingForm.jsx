import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Phone, Calendar as CalIcon, Clock, ChevronRight, 
  CheckCircle2, X, Sparkles, ShieldCheck, 
  ArrowRight, Activity, BadgeCheck, Star, ChevronLeft,
  Crown, Smartphone, Globe
} from "lucide-react";

export default function BookingForm({ onClose }) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Consultation",
    date: "",
    time: "10:00 AM"
  });

  const services = [
    { id: "Consultation", label: "Consultation", desc: "Expert assessment", price: "Free", icon: <Activity size={18}/>, color: "bg-blue-500" },
    { id: "Cleaning", label: "Deep Cleaning", desc: "Advanced hygiene", price: "$49+", icon: <Sparkles size={18}/>, color: "bg-emerald-500" },
    { id: "Whitening", label: "Whitening", desc: "Laser brightening", price: "$199", icon: <Star size={18}/>, color: "bg-amber-400" },
    { id: "Implant", label: "Dental Implant", desc: "Permanent solution", price: "Quote", icon: <BadgeCheck size={18}/>, color: "bg-indigo-600" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Luxury delay for status check simulation
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 2200);
  };

  return (
    <div className="relative bg-white max-h-[90vh] w-full max-w-lg mx-auto flex flex-col overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] rounded-[3rem] border border-slate-100/50">
      
      {/* --- PREMIUM FLOATING HEADER --- */}
      <div className="sticky top-0 z-50 px-8 pt-10 pb-4 bg-white/80 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 mb-1">
               <div className="p-1.5 bg-indigo-600 rounded-lg text-white">
                 <Crown size={14} strokeWidth={2.5}/>
               </div>
               <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">
                 Elite<span className="text-indigo-600">Smile</span>
               </h3>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.25em] ml-1">Signature Concierge</p>
          </motion.div>
          
          <button 
            onClick={onClose} 
            className="w-11 h-11 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-all active:scale-95"
          >
            <X size={20} />
          </button>
        </div>

        {/* Dynamic Step Indicator */}
        {step < 3 && (
          <div className="flex items-center gap-3 px-1">
            <div className="flex-1 flex gap-1.5">
              {[1, 2].map((i) => (
                <div key={i} className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: step >= i ? "100%" : "0%" }}
                    className="h-full bg-indigo-600"
                  />
                </div>
              ))}
            </div>
            <span className="text-[11px] font-black text-slate-900 tracking-tighter uppercase tabular-nums">
              Step 0{step}
            </span>
          </div>
        )}
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 overflow-y-auto px-8 pb-10 no-scrollbar">
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div 
              key="step1" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8 pt-4"
            >
              <section className="space-y-4">
                <div className="flex justify-between items-end px-1">
                  <h4 className="text-[11px] font-black text-indigo-600 uppercase tracking-widest">Available Treatments</h4>
                  <span className="text-[10px] text-slate-400 font-bold italic underline underline-offset-4">View Gallery</span>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {services.map((item) => (
                    <motion.div 
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileActive={{ scale: 0.98 }}
                      onClick={() => setFormData({...formData, service: item.id})}
                      className={`relative cursor-pointer p-5 rounded-[2rem] border-2 transition-all flex items-center gap-4 ${
                        formData.service === item.id 
                        ? "border-indigo-600 bg-indigo-50/20 shadow-lg shadow-indigo-100/50" 
                        : "border-slate-50 bg-slate-50/50 hover:border-slate-200"
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl ${item.color} ${formData.service === item.id ? "scale-110" : "opacity-80"} transition-all duration-500`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-black text-slate-900">{item.label}</p>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">{item.desc}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`text-[10px] font-black px-2 py-1 rounded-md ${formData.service === item.id ? "bg-indigo-600 text-white" : "bg-white text-slate-400"}`}>
                          {item.price}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h4 className="text-[11px] font-black text-indigo-600 uppercase tracking-widest px-1">Guest Particulars</h4>
                <div className="space-y-3">
                  <div className="relative group">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                    <input 
                      required name="name" onChange={handleChange} value={formData.name}
                      placeholder="Enter Full Name" 
                      className="w-full pl-16 pr-6 py-6 bg-slate-50 border-transparent rounded-[1.5rem] focus:bg-white focus:ring-[6px] focus:ring-indigo-50 outline-none text-sm font-bold placeholder:text-slate-300 transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <Smartphone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                    <input 
                      required name="phone" onChange={handleChange} value={formData.phone}
                      type="tel" placeholder="Mobile Number" 
                      className="w-full pl-16 pr-6 py-6 bg-slate-50 border-transparent rounded-[1.5rem] focus:bg-white focus:ring-[6px] focus:ring-indigo-50 outline-none text-sm font-bold placeholder:text-slate-300 transition-all"
                    />
                  </div>
                </div>
              </section>

              <motion.button 
                whileHover={{ y: -2 }}
                whileActive={{ scale: 0.98 }}
                onClick={() => setStep(2)} 
                disabled={!formData.name || !formData.phone}
                className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xs tracking-[0.2em] shadow-2xl shadow-slate-200 hover:bg-indigo-600 disabled:bg-slate-200 transition-all flex items-center justify-center gap-4 group"
              >
                PROCEED TO SCHEDULE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-8 pt-4"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between px-1">
                   <h4 className="text-[11px] font-black text-indigo-600 uppercase tracking-widest">Select Date & Time</h4>
                   <button onClick={() => setStep(1)} className="text-[10px] font-black text-slate-400 flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
                      <ChevronLeft size={14}/> CHANGE DETAILS
                   </button>
                </div>
                
                <div className="relative group p-1 bg-slate-50 rounded-[2rem]">
                  <input 
                    required type="date" name="date" onChange={handleChange}
                    className="w-full px-8 py-6 bg-transparent outline-none text-sm font-black text-slate-900 cursor-pointer" 
                  />
                  <CalIcon className="absolute right-8 top-1/2 -translate-y-1/2 text-indigo-600 pointer-events-none" size={20} />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {["09:00 AM", "12:00 PM", "04:30 PM"].map((t) => (
                    <button 
                      key={t} type="button" onClick={() => setFormData({...formData, time: t})}
                      className={`py-5 rounded-[1.5rem] text-[10px] font-black transition-all ${formData.time === t ? "bg-indigo-600 text-white shadow-xl shadow-indigo-100" : "bg-slate-50 text-slate-400 hover:bg-slate-100"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Luxury Glass Ticket */}
              <div className="relative p-8 rounded-[2.5rem] bg-slate-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl -mr-10 -mt-10" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[9px] font-black text-indigo-400 tracking-widest uppercase mb-1">Reservation Quote</p>
                      <h5 className="text-xl font-black text-white tracking-tight">{formData.service}</h5>
                    </div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10">
                      <Activity className="text-indigo-400" size={24} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/50 border-t border-white/5 pt-4">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-bold uppercase tracking-tighter">Client</span>
                      <span className="text-xs font-bold text-white uppercase">{formData.name || 'Guest'}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[8px] font-bold uppercase tracking-tighter">Priority</span>
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Express</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileActive={{ scale: 0.98 }}
                onClick={handleSubmit} 
                disabled={isLoading || !formData.date}
                className="w-full bg-indigo-600 text-white py-6 rounded-[2rem] font-black text-xs tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(79,70,229,0.3)] hover:bg-indigo-700 disabled:bg-slate-100 disabled:text-slate-300 transition-all flex items-center justify-center gap-4"
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="animate-pulse">VERIFYING...</span>
                  </div>
                ) : "SECURE MY SPOT"}
              </motion.button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-4"
            >
              <div className="relative w-32 h-32 mx-auto mb-10">
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1.2, opacity: 0 }} transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-emerald-400 rounded-full"
                />
                <div className="absolute inset-0 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 shadow-inner">
                  <CheckCircle2 size={64} strokeWidth={1} />
                </div>
              </div>
              
              <div className="space-y-4 mb-10">
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase leading-none">Status: <span className="text-emerald-500">Booked</span></h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">
                  A concierge specialist has been assigned to your request. Welcome to <b>Elite Smile</b>, {formData.name.split(' ')[0]}.
                </p>
              </div>

              <button 
                onClick={onClose} 
                className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xs tracking-[0.25em] hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200"
              >
                RETURN TO DASHBOARD
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* --- REFINED FOOTER --- */}
      <div className="px-10 py-8 bg-slate-50/80 backdrop-blur-md flex items-center justify-between border-t border-slate-100">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-2">
             <ShieldCheck size={14} className="text-indigo-600" />
             <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">ISO 27001</span>
           </div>
           <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Data protected by AES-256</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-xl border-2 border-white bg-slate-200 shadow-sm overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-400" />
                </div>
              ))}
           </div>
           <span className="text-[9px] font-black text-slate-400 italic">4k+ Booked</span>
        </div>
      </div>
    </div>
  );
}