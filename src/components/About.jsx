import { motion } from "framer-motion";
import { FiAward, FiUsers, FiShield, FiStar, FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

export default function ProfessionalAbout() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      
      {/* Background Aesthetic Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-[-12deg] translate-x-20 -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-100 rounded-full blur-[120px] opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Image Composite Section */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Main Image with decorative border */}
              <div className="relative p-3 bg-white shadow-2xl rounded-[3rem] rotate-[-2deg]">
                <img
                  src="https://images.unsplash.com/photo-1606813902914-2f5a8f2f8cfa?q=80&w=1200&auto=format&fit=crop"
                  alt="Dr. Anjali Sharma"
                  className="rounded-[2.5rem] grayscale-[20%] hover:grayscale-0 transition-all duration-700 h-[500px] lg:h-[600px] w-full object-cover"
                />
              </div>

              {/* Floating Glass Stats - 01 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 md:-right-12 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/20 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                    <FiAward size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 leading-none">10+ Years</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Stats - 02 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-10 -left-6 md:-left-10 bg-slate-900 p-6 rounded-3xl shadow-2xl z-20 text-white"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-indigo-100 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-none">5k+ Patients</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <FiStar className="text-amber-400 fill-amber-400" size={10} />
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Trusted Expert</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Sophisticated Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-indigo-600"></span>
                <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em]">Chief Medical Officer</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.1] mb-8">
                Pioneering <span className="text-indigo-600 italic font-medium">Gentle</span> <br /> Dentistry.
              </h2>

              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-6">
                Dr. Anjali Sharma believes that a visit to the dentist should be as restorative as it is transformative.
              </p>

              <div className="space-y-6 mb-10">
                <p className="text-slate-500 leading-relaxed">
                  Specializing in advanced <span className="text-slate-900 font-bold underline decoration-indigo-300 underline-offset-4">Implantology & Aesthetic Reconstruction</span>, 
                  she has redefined the dental experience for thousands. Her approach combines 3D digital precision 
                  with a human touch that eliminates clinical anxiety.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Masters in Laser Dentistry (USA)",
                    "Certified Implantologist (ITI)",
                    "Painless Sedation Expert",
                    "Advanced Cosmetic Reconstruction"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <FiCheckCircle size={12} />
                      </div>
                      <span className="text-sm font-bold text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Area */}
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <button className="group relative bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold overflow-hidden transition-all active:scale-95 shadow-xl shadow-indigo-100">
                  <span className="relative z-10 flex items-center gap-2">
                    Request Private Consultation <FiArrowUpRight />
                  </span>
                  <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>

                <div className="flex flex-col">
                  <span className="text-2xl font-serif italic text-slate-400">Anjali Sharma</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Medical Signature</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Logo Cloud / Accreditation Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 pt-10 border-t border-slate-100 flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale"
        >
          <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Accredited By</span>
          <div className="flex flex-wrap gap-8 lg:gap-16 items-center">
             {/* Replace with actual medical association logos */}
             <div className="text-xl font-bold tracking-tighter text-slate-400">I.D.A</div>
             <div className="text-xl font-bold tracking-tighter text-slate-400">A.A.C.D</div>
             <div className="text-xl font-bold tracking-tighter text-slate-400">ISO CERTIFIED</div>
             <div className="text-xl font-bold tracking-tighter text-slate-400">ITI SWISS</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}