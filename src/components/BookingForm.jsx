import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Calendar as CalIcon, Clock, ChevronRight, CheckCircle2, Clipboard, X } from "lucide-react";

export default function BookingForm({ onClose }) {
  const [step, setStep] = useState("form");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("success");
  };

  if (step === "success") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-12 text-center flex flex-col items-center bg-white">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">Our team will call you shortly to confirm your slot.</p>
        <button onClick={onClose} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-xs tracking-widest hover:bg-indigo-600 transition-all">CLOSE WINDOW</button>
      </motion.div>
    );
  }

  return (
    <div className="relative bg-white">
      <button onClick={onClose} className="absolute top-6 right-6 z-20 text-white/50 hover:text-white transition-colors">
        <X size={24} />
      </button>

      <div className="bg-indigo-600 p-8 text-white relative overflow-hidden">
        <div className="absolute -right-4 -top-4 opacity-10 rotate-12">
          <Clipboard size={120} />
        </div>
        <h3 className="text-2xl font-bold mb-1 relative z-10">Book Appointment</h3>
        <p className="text-indigo-100/80 text-xs font-medium uppercase tracking-wider relative z-10">Premium Dental Care</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-5">
        <div className="space-y-1.5 group">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={18} />
            <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-indigo-600 focus:bg-white transition-all outline-none text-sm font-semibold" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5 group">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={18} />
              <input required type="tel" placeholder="+91" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-indigo-600 focus:bg-white transition-all outline-none text-sm font-semibold" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Service</label>
            <select className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-indigo-600 focus:bg-white transition-all outline-none text-sm font-semibold appearance-none cursor-pointer">
              <option>General Checkup</option>
              <option>Cosmetic Surgery</option>
              <option>Dental Implant</option>
              <option>Teeth Whitening</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5 group">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Date</label>
            <div className="relative">
              <CalIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none group-focus-within:text-indigo-500 transition-colors" size={18} />
              <input required type="date" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-indigo-600 focus:bg-white transition-all outline-none text-[13px] font-semibold" />
            </div>
          </div>
          <div className="space-y-1.5 group">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Time Slot</label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none group-focus-within:text-indigo-500 transition-colors" size={18} />
              <select className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-indigo-600 focus:bg-white transition-all outline-none text-sm font-semibold appearance-none cursor-pointer">
                <option>Morning (10am - 1pm)</option>
                <option>Afternoon (2pm - 5pm)</option>
                <option>Evening (6pm - 9pm)</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs tracking-[0.2em] shadow-xl hover:bg-indigo-600 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mt-4">
          CONFIRM BOOKING <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}