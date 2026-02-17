import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Calendar as CalIcon, Clock, ChevronRight, CheckCircle2, Clipboard, X, Sparkles, Stethoscope } from "lucide-react";

export default function BookingForm({ onClose }) {
  const [step, setStep] = useState("form");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "General Checkup",
    date: "",
    time: "Morning (10am - 1pm)"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate loading
    setTimeout(() => setStep("success"), 800);
  };

  if (step === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="p-10 md:p-16 text-center flex flex-col items-center bg-white"
      >
        <div className="relative mb-6">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center"
          >
            <CheckCircle2 size={48} strokeWidth={1.5} />
          </motion.div>
          <motion.div 
            animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-emerald-200 rounded-full"
          />
        </div>
        
        <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">All Set, {formData.name.split(' ')[0]}!</h3>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed max-w-[280px]">
          We've reserved a slot for <b>{formData.service}</b> on <b>{formData.date}</b>. Our coordinator will call you shortly.
        </p>
        
        <button 
          onClick={onClose} 
          className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-xs tracking-widest hover:bg-indigo-600 transition-all shadow-lg"
        >
          GREAT, THANKS <X size={14} className="opacity-50 group-hover:rotate-90 transition-transform" />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative bg-white max-h-[90vh] overflow-y-auto no-scrollbar">
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 text-white hover:bg-black/20 transition-all backdrop-blur-md"
      >
        <X size={20} />
      </button>

      {/* Hero Header */}
      <div className="bg-indigo-600 p-10 text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.1, scale: 1 }}
          className="absolute -right-6 -bottom-6 rotate-12"
        >
          <Stethoscope size={180} />
        </motion.div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase backdrop-blur-sm">Priority Access</span>
          </div>
          <h3 className="text-3xl font-bold mb-1 tracking-tighter">Reserve Your Visit</h3>
          <p className="text-indigo-100/70 text-xs font-medium uppercase tracking-widest flex items-center gap-2">
            <Sparkles size={12} /> Expert care for your smile
          </p>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {/* Full Name Section */}
        <div className="space-y-2 group">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Patient Full Name</label>
          <div className="relative">
            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={20} />
            <input 
              required name="name" value={formData.name} onChange={handleChange}
              type="text" placeholder="Rahul Sharma" 
              className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.5rem] focus:border-indigo-600 focus:bg-white transition-all outline-none text-sm font-bold text-slate-800 placeholder:text-slate-300 shadow-sm" 
            />
          </div>
        </div>

        {/* Contact & Service Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2 group">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">WhatsApp No.</label>
            <div className="relative">
              <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={20} />
              <input 
                required name="phone" value={formData.phone} onChange={handleChange}
                type="tel" placeholder="+91 00000 00000" 
                className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.5rem] focus:border-indigo-600 focus:bg-white transition-all outline-none text-sm font-bold text-slate-800 shadow-sm" 
              />
            </div>
          </div>
          
          <div className="space-y-2 group">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Treatment Type</label>
            <div className="relative">
              <select 
                name="service" value={formData.service} onChange={handleChange}
                className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.5rem] focus:border-indigo-600 focus:bg-white transition-all outline-none text-sm font-bold text-slate-800 appearance-none cursor-pointer shadow-sm"
              >
                <option>General Checkup</option>
                <option>Cosmetic Surgery</option>
                <option>Dental Implant</option>
                <option>Teeth Whitening</option>
              </select>
              <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        {/* Schedule Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2 group">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Preferred Date</label>
            <div className="relative">
              <CalIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none group-focus-within:text-indigo-500 transition-colors" size={20} />
              <input 
                required name="date" value={formData.date} onChange={handleChange}
                type="date" 
                className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.5rem] focus:border-indigo-600 focus:bg-white transition-all outline-none text-sm font-bold text-slate-800 shadow-sm" 
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Best Time</label>
            <div className="relative">
              <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none group-focus-within:text-indigo-500 transition-colors" size={20} />
              <select 
                name="time" value={formData.time} onChange={handleChange}
                className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.5rem] focus:border-indigo-600 focus:bg-white transition-all outline-none text-sm font-bold text-slate-800 appearance-none cursor-pointer shadow-sm"
              >
                <option>Morning (10am - 1pm)</option>
                <option>Afternoon (2pm - 5pm)</option>
                <option>Evening (6pm - 9pm)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-slate-900 text-white py-6 rounded-[1.8rem] font-black text-xs tracking-[0.3em] shadow-2xl shadow-indigo-200 hover:bg-indigo-600 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 group mt-4 overflow-hidden relative"
        >
          <span className="relative z-10">CONFIRM APPOINTMENT</span>
          <ChevronRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
          <motion.div 
            initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </button>

        <p className="text-[9px] text-center text-slate-400 font-bold tracking-widest uppercase">
          🔒 Secure & Private HIPAA Compliant Booking
        </p>
      </form>
    </div>
  );
}