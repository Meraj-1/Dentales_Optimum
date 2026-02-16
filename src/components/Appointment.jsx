import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck } from "lucide-react";

export default function Appointment() {
  return (
    <section id="contact" className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Info & Value Prop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Reservations
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
              Ready to <br /> 
              <span className="text-indigo-600">Start Your Journey?</span>
            </h2>
            
            <p className="text-slate-500 text-lg mb-12 max-w-md font-medium">
              Schedule your consultation today. Our team will get back to you within 2 business hours to confirm your slot.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Phone />, title: "Emergency Call", detail: "+91 98765 43210" },
                { icon: <Mail />, title: "Email Us", detail: "care@anjalidental.com" },
                { icon: <MapPin />, title: "Clinic Location", detail: "Level 4, Medical Square, Mumbai" },
                { icon: <Clock />, title: "Working Hours", detail: "Mon - Sat: 10:00 AM - 08:00 PM" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">{item.title}</h4>
                    <p className="text-slate-500 font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white relative z-10">
              <div className="flex items-center gap-2 mb-8 text-emerald-600 bg-emerald-50 w-fit px-4 py-1.5 rounded-full">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">HIPAA Compliant & Secure</span>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Select Service</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium text-slate-500 appearance-none">
                    <option>Teeth Whitening</option>
                    <option>Root Canal Treatment</option>
                    <option>Dental Implants</option>
                    <option>Invisible Aligners</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Any Message?</label>
                  <textarea 
                    rows="4" 
                    placeholder="Briefly describe your concern..." 
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium placeholder:text-slate-300 resize-none"
                  />
                </div>

                <button className="w-full bg-indigo-600 hover:bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl shadow-indigo-100 transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98]">
                  CONFIRM BOOKING <Send size={18} />
                </button>

                <p className="text-center text-[10px] text-slate-400 mt-6 px-8">
                  By submitting, you agree to our <span className="underline cursor-pointer">Privacy Policy</span> and will receive a confirmation via SMS.
                </p>
              </form>
            </div>
            
            {/* Background Decorative Shape for Form */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-indigo-600 rounded-[3.5rem] -z-10 opacity-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}