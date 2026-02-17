import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Phone, Calendar as CalIcon, Clock, ChevronRight, 
  CheckCircle2, X, Sparkles, ShieldCheck, 
  ArrowRight, Activity, BadgeCheck, Star, ChevronLeft
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
    { id: "Consultation", label: "Consultation", desc: "Expert assessment", price: "Free", icon: <Activity size={16}/> },
    { id: "Cleaning", label: "Deep Cleaning", desc: "Advanced hygiene", price: "$49+", icon: <Sparkles size={16}/> },
    { id: "Whitening", label: "Whitening", desc: "Laser brightening", price: "$199", icon: <Star size={16}/> },
    { id: "Implant", label: "Dental Implant", desc: "Permanent solution", price: "Quote", icon: <BadgeCheck size={16}/> },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 2000);
  };

  return (
    <div className="relative bg-white max-h-[85vh] w-full max-w-lg mx-auto flex flex-col overflow-hidden shadow-2xl rounded-[2.5rem] border border-slate-100">
      
      {/* --- HEADER SECTION --- */}
      <div className="px-8 pt-10 pb-6 bg-gradient-to-b from-slate-50/50 to-transparent">
        <div className="flex justify-between items-start mb-8">
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-slate-900 tracking-tight leading-none mb-2"
            >
              Elite <span className="text-indigo-600 font-extrabold">Smile</span>
            </motion.h3>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-widest">Premium Concierge</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="group p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-slate-900 hover:shadow-md transition-all active:scale-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* High-End Stepper */}
        {step < 3 && (
          <div className="flex items-center gap-4">
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: step === 1 ? "50%" : "100%" }}
                className="h-full bg-indigo-600 rounded-full"
              />
            </div>
            <span className="text-[10px] font-bold text-slate-400 tabular-nums">0{step} / 02</span>
          </div>
        )}
      </div>

      {/* --- BODY SECTION --- */}
      <div className="flex-1 overflow-y-auto px-8 pb-10 no-scrollbar">
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div 
              key="step1" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: 10 }}
              className="space-y-8"
            >
              <section className="space-y-4">
                <h4 className="text-sm font-bold text-slate-800 ml-1">Select Procedure</h4>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((item) => (
                    <motion.div 
                      whileHover={{ y: -2 }} whileActive={{ scale: 0.98 }}
                      key={item.id}
                      onClick={() => setFormData({...formData, service: item.id})}
                      className={`cursor-pointer p-5 rounded-[1.5rem] border-2 transition-all flex items-center justify-between group ${
                        formData.service === item.id 
                        ? "border-indigo-600 bg-indigo-50/30 ring-4 ring-indigo-50" 
                        : "border-slate-50 bg-slate-50/50 hover:border-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${formData.service === item.id ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" : "bg-white text-slate-400 group-hover:text-indigo-500"}`}>
                          {item.icon}
                        </div>
                        <div>
                          <p className={`text-sm font-bold ${formData.service === item.id ? "text-indigo-900" : "text-slate-700"}`}>{item.label}</p>
                          <p className="text-[11px] text-slate-400 font-medium">{item.desc}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-black ${formData.service === item.id ? "text-indigo-600" : "text-slate-400"}`}>{item.price}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 gap-4">
                <div className="group space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Patient Details</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={18} />
                    <input 
                      required name="name" onChange={handleChange} value={formData.name}
                      placeholder="Full Name" 
                      className="w-full pl-14 pr-6 py-5 bg-slate-50 border-transparent rounded-[1.2rem] focus:bg-white focus:border-indigo-600/20 focus:ring-4 focus:ring-indigo-50 outline-none text-sm font-bold transition-all"
                    />
                  </div>
                </div>
                <div className="group relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={18} />
                  <input 
                    required name="phone" onChange={handleChange} value={formData.phone}
                    type="tel" placeholder="Phone Number" 
                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border-transparent rounded-[1.2rem] focus:bg-white focus:border-indigo-600/20 focus:ring-4 focus:ring-indigo-50 outline-none text-sm font-bold transition-all"
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }} whileActive={{ scale: 0.98 }}
                onClick={() => setStep(2)} disabled={!formData.name || !formData.phone}
                className="w-full bg-slate-900 text-white py-6 rounded-[1.5rem] font-bold text-sm tracking-wide shadow-2xl shadow-slate-200 hover:bg-indigo-600 disabled:opacity-20 transition-all flex items-center justify-center gap-3"
              >
                Next Step <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <h4 className="text-sm font-bold text-slate-800 ml-1">Select Schedule</h4>
                   <button onClick={() => setStep(1)} className="text-[10px] font-bold text-indigo-600 uppercase tracking-tight flex items-center gap-1 hover:underline">
                      <ChevronLeft size={14}/> Back to details
                   </button>
                </div>
                
                <div className="relative group">
                  <CalIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none group-focus-within:text-indigo-500 transition-colors" size={18} />
                  <input 
                    required type="date" name="date" onChange={handleChange}
                    className="w-full pl-14 pr-6 py-5 border-2 border-slate-50 bg-slate-50 rounded-[1.2rem] focus:bg-white focus:border-indigo-600 outline-none text-sm font-bold" 
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {["09:00 AM", "01:00 PM", "04:00 PM"].map((t) => (
                    <button 
                      key={t} type="button" onClick={() => setFormData({...formData, time: t})}
                      className={`py-4 rounded-2xl text-[11px] font-bold transition-all ${formData.time === t ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-indigo-900 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-300 uppercase">Confirmed Selection</span>
                    <ShieldCheck size={24} className="text-indigo-400" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold tracking-tight">{formData.service}</h5>
                    <p className="text-indigo-200/60 text-xs font-medium mt-1 italic">{formData.name} • {formData.time}</p>
                  </div>
                </div>
                <div className="absolute -right-6 -bottom-6 opacity-10 rotate-12 text-white">
                  <Activity size={140} />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }} whileActive={{ scale: 0.98 }}
                onClick={handleSubmit} disabled={isLoading || !formData.date}
                className="w-full bg-indigo-600 text-white py-6 rounded-[1.5rem] font-bold text-sm tracking-wide shadow-xl shadow-indigo-100 hover:bg-indigo-700 disabled:bg-slate-100 disabled:text-slate-300 transition-all flex items-center justify-center gap-3"
              >
                {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : "Complete Booking"}
              </motion.button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-6"
            >
              <div className="relative w-28 h-28 mx-auto">
                <motion.div 
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  className="absolute inset-0 bg-emerald-50 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 size={56} strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Booking Secured</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[260px] mx-auto font-medium">
                  We've reserved your slot, <b>{formData.name.split(' ')[0]}</b>. Expect a call from our specialists within 15 minutes.
                </p>
              </div>

              <button 
                onClick={onClose} 
                className="w-full bg-slate-900 text-white py-5 rounded-[1.5rem] font-bold text-xs tracking-widest hover:bg-indigo-600 transition-all shadow-xl"
              >
                CLOSE WINDOW
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* --- FOOTER SECTION --- */}
      <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <BadgeCheck size={16} className="text-emerald-500" />
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Licensed Clinic</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
           <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
           <span className="text-[9px] font-black text-slate-600 uppercase tracking-tighter">Live Support</span>
        </div>
      </div>
    </div>
  );
}