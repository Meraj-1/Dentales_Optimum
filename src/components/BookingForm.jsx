import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Phone, Calendar as CalIcon, Clock, ChevronRight, 
  CheckCircle2, X, Sparkles, Stethoscope, ShieldCheck, 
  ArrowLeft, ArrowRight, CreditCard // <--- Added ArrowRight here
} from "lucide-react";

export default function BookingForm({ onClose }) {
  const [step, setStep] = useState("form");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Consultation",
    date: "",
    time: "10:00 AM"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Mimic API delay for professional feel
    setTimeout(() => {
      setIsLoading(false);
      setStep("success");
    }, 1500);
  };

  if (step === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
        className="p-12 md:p-20 text-center flex flex-col items-center bg-white"
      >
        <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-8 relative">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
          >
            <CheckCircle2 size={48} strokeWidth={1.5} />
          </motion.div>
          <div className="absolute inset-0 border border-indigo-100 rounded-full animate-ping" />
        </div>
        
        <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Booking Confirmed</h3>
        <p className="text-slate-500 text-sm mb-10 leading-relaxed max-w-[320px]">
          Hello <b>{formData.name}</b>, your request for <b>{formData.service}</b> has been received. We will contact you at <b>{formData.phone}</b>.
        </p>
        
        <button 
          onClick={onClose} 
          className="w-full max-w-xs bg-slate-900 text-white py-4 rounded-xl font-bold text-xs tracking-widest hover:bg-indigo-600 transition-all shadow-xl"
        >
          RETURN TO HOME
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative bg-white max-h-[95vh] overflow-y-auto overflow-x-hidden custom-scrollbar">
      {/* --- PREMIUM HEADER --- */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-8 py-6 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Schedule Visit</h3>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em]">Premium Dental Experience</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
          <X size={20} />
        </button>
      </div>

      {/* --- FORM BODY --- */}
      <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8">
        
        {/* Section 1: Patient Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-indigo-600 rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">Personal Details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1 group">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={16} />
                <input 
                  required name="name" onChange={handleChange}
                  placeholder="Full Name" 
                  className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-sm font-medium" 
                />
              </div>
            </div>
            <div className="space-y-1 group">
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={16} />
                <input 
                  required name="phone" onChange={handleChange}
                  type="tel" placeholder="Phone Number" 
                  className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-sm font-medium" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Treatment Selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-indigo-600 rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">Medical Service</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["Consultation", "Cleaning", "Whitening", "Implant"].map((service) => (
              <label key={service} className="cursor-pointer group">
                <input 
                  type="radio" name="service" value={service} 
                  className="peer hidden" checked={formData.service === service}
                  onChange={handleChange}
                />
                <div className="py-3 px-2 text-center border border-slate-100 rounded-xl text-[11px] font-bold text-slate-500 peer-checked:border-indigo-600 peer-checked:bg-indigo-50 peer-checked:text-indigo-700 transition-all group-hover:bg-slate-50">
                  {service}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Section 3: Appointment Timing */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-indigo-600 rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">Preferred Schedule</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group">
              <CalIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={16} />
              <input 
                required type="date" name="date" onChange={handleChange}
                className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-xl focus:border-indigo-600 outline-none text-sm font-medium" 
              />
            </div>
            <div className="relative group">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={16} />
              <select 
                name="time" onChange={handleChange}
                className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-xl focus:border-indigo-600 outline-none text-sm font-medium appearance-none"
              >
                <option>10:00 AM</option>
                <option>01:00 PM</option>
                <option>05:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- ACTION FOOTER --- */}
        <div className="pt-6 border-t border-slate-100">
          <button 
            type="submit" disabled={isLoading}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-[13px] tracking-widest shadow-xl shadow-slate-200 hover:bg-indigo-600 disabled:bg-slate-400 transition-all flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>CONFIRM APPOINTMENT <ArrowRight size={18} /></>
            )}
          </button>
          
          <div className="mt-6 flex items-center justify-center gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-500" /> HIPAA Secure</span>
            <span className="flex items-center gap-1.5"><Sparkles size={14} className="text-amber-400" /> Zero Waiting Time</span>
          </div>
        </div>
      </form>
    </div>
  );
}