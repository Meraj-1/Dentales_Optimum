import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Phone, Calendar as CalIcon, Clock, ChevronRight, 
  CheckCircle2, X, Sparkles, ShieldCheck, 
  ArrowRight, Activity, BadgeCheck, Star
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

  // Service details with pricing for that professional "upfront" feel
  const services = [
    { id: "Consultation", label: "Consultation", price: "Free", icon: <Activity size={14}/> },
    { id: "Cleaning", label: "Deep Cleaning", price: "$49+", icon: <Sparkles size={14}/> },
    { id: "Whitening", label: "Whitening", price: "$199", icon: <Star size={14}/> },
    { id: "Implant", label: "Dental Implant", price: "Quote", icon: <BadgeCheck size={14}/> },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3); // Success Step
    }, 1800);
  };

  return (
    <div className="relative bg-white max-h-[90vh] flex flex-col overflow-hidden">
      
      {/* --- PROGRESS HEADER --- */}
      <div className="px-8 pt-8 pb-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">
              Elite <span className="text-indigo-600">Smile</span>
            </h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Booking Concierge</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 transition-all">
            <X size={20} />
          </button>
        </div>

        {/* Dynamic Progress Bar */}
        {step < 3 && (
          <div className="flex gap-2 mb-2">
            <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= 1 ? "bg-indigo-600" : "bg-slate-100"}`} />
            <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= 2 ? "bg-indigo-600" : "bg-slate-100"}`} />
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: SERVICE & PERSONAL */}
          {step === 1 && (
            <motion.div 
              key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <section className="space-y-4 pt-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-indigo-600">01. Select Treatment</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => setFormData({...formData, service: item.id})}
                      className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex justify-between items-center group ${
                        formData.service === item.id ? "border-indigo-600 bg-indigo-50/50 shadow-md" : "border-slate-100 hover:border-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${formData.service === item.id ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"}`}>
                          {item.icon}
                        </div>
                        <span className={`text-sm font-bold ${formData.service === item.id ? "text-indigo-900" : "text-slate-600"}`}>{item.label}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-400 italic">{item.price}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <label className="text-[11px] font-black uppercase tracking-widest text-indigo-600">02. Patient Info</label>
                <div className="grid gap-3">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={18} />
                    <input 
                      required name="name" onChange={handleChange} value={formData.name}
                      placeholder="Your Full Name" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 outline-none text-sm font-semibold transition-all shadow-sm"
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={18} />
                    <input 
                      required name="phone" onChange={handleChange} value={formData.phone}
                      type="tel" placeholder="WhatsApp Number" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 outline-none text-sm font-semibold transition-all shadow-sm"
                    />
                  </div>
                </div>
              </section>

              <button 
                onClick={handleNext} disabled={!formData.name || !formData.phone}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-[13px] tracking-widest shadow-xl hover:bg-indigo-600 disabled:opacity-50 transition-all flex items-center justify-center gap-3 group"
              >
                CONTINUE TO SCHEDULE <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: TIMING */}
          {step === 2 && (
            <motion.div 
              key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase tracking-widest text-indigo-600">03. Finalize Slot</label>
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative group">
                    <CalIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none group-focus-within:text-indigo-500 transition-colors" size={18} />
                    <input 
                      required type="date" name="date" onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none text-sm font-bold bg-white" 
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["10:00 AM", "02:00 PM", "06:00 PM"].map((t) => (
                      <button 
                        key={t} type="button" onClick={() => setFormData({...formData, time: t})}
                        className={`py-3 rounded-xl text-[10px] font-black transition-all border-2 ${formData.time === t ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-50 bg-slate-50 text-slate-400"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-[2rem] p-6 text-white relative overflow-hidden">
                <div className="relative z-10 flex flex-col gap-1">
                  <span className="text-[9px] font-black tracking-[0.3em] text-indigo-400 uppercase">Review Appointment</span>
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="text-lg font-bold tracking-tight">{formData.service}</h4>
                      <p className="text-xs text-slate-400">{formData.name} • {formData.time}</p>
                    </div>
                    <ShieldCheck className="text-emerald-500" size={32} strokeWidth={1}/>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10"><Activity size={100}/></div>
              </div>

              <div className="flex gap-3">
                <button onClick={handleBack} className="w-20 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all">
                  <X size={20} />
                </button>
                <button 
                  onClick={handleSubmit} disabled={isLoading || !formData.date}
                  className="flex-1 bg-indigo-600 text-white py-5 rounded-2xl font-black text-[13px] tracking-widest shadow-xl hover:bg-indigo-700 disabled:bg-slate-300 transition-all flex items-center justify-center gap-3"
                >
                  {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>CONFIRM BOOKING <ArrowRight size={18}/></>}
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: SUCCESS */}
          {step === 3 && (
            <motion.div 
              key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-8 mx-auto shadow-inner">
                <CheckCircle2 size={48} strokeWidth={1} className="animate-pulse" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter italic uppercase">Elite Status: <span className="text-emerald-500">Active</span></h3>
              <p className="text-slate-500 text-sm mb-10 leading-relaxed max-w-[280px] mx-auto">
                Thank you <b>{formData.name.split(' ')[0]}</b>. We've notified our specialists. Prepare for a world-class experience.
              </p>
              <button 
                onClick={onClose} 
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs tracking-[0.2em] hover:bg-indigo-600 transition-all shadow-xl"
              >
                DISMISS CONCIERGE
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Footer Branding */}
      <div className="p-6 bg-slate-50 flex items-center justify-between border-t border-slate-100">
        <div className="flex items-center gap-2">
           <ShieldCheck size={14} className="text-indigo-600" />
           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">End-to-End Encrypted</span>
        </div>
        <div className="flex -space-x-2">
           {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-slate-200" />)}
        </div>
      </div>
    </div>
  );
}