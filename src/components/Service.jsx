import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiActivity } from "react-icons/fi";

const services = [
  {
    title: "Root Canal Treatment",
    desc: "Advanced painless root canal using 3D digital imaging and rotary endodontics.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
    tag: "Pain-Free",
    stats: "99% Success"
  },
  {
    title: "Teeth Whitening",
    desc: "Professional laser whitening treatment that brightens your smile up to 5 shades.",
    image: "https://images.unsplash.com/photo-1606813902914-2f5a8f2f8cfa?q=80&w=1600&auto=format&fit=crop",
    tag: "Instant Results",
    stats: "45 Min Session"
  },
  {
    title: "Dental Implants",
    desc: "Permanent titanium implants that naturally integrate with your jawbone.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",
    tag: "Lifetime Strength",
    stats: "Swiss Quality"
  },
  {
    title: "Invisible Aligners",
    desc: "Clear aligner system designed with AI precision to give you perfectly straight teeth.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1600&auto=format&fit=crop",
    tag: "AI Precision",
    stats: "Top Aesthetic"
  },
];

export default function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FCFDFE] overflow-hidden">
      
      {/* Animated Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase mb-4"
            >
              <FiActivity className="animate-pulse" /> <span>Elite Dental Solutions</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              Modern Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Perfect Smiles.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-lg md:text-right">
            We use AI-driven diagnostics and 3D imaging for a safer treatment experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden bg-white"
            >
              {/* Image with Parallax-like scale */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Stronger Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Content (Badges) */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{service.tag}</span>
                </div>
                <div className="bg-indigo-600 px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-lg">
                  <FiCheckCircle className="text-white text-xs" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-tighter">{service.stats}</span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-10 left-10 right-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="space-y-4"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{service.title}</h3>
                  <p className="text-slate-200/80 text-sm md:text-base leading-relaxed max-w-md line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {service.desc}
                  </p>
                  
                  <div className="pt-4 flex items-center justify-between">
                    <button className="bg-white text-slate-900 hover:bg-indigo-600 hover:text-white px-8 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center gap-2 group/btn">
                      Book Visit
                      <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    
                    <span className="text-white/20 text-6xl font-black italic select-none">0{index + 1}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 relative rounded-[3rem] bg-slate-900 p-1 lg:p-2 overflow-hidden"
        >
          <div className="bg-indigo-600 rounded-[2.8rem] px-8 py-16 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
            
            {/* CTA Background Decoration */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white opacity-10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter">
                Smiles are <br /> <span className="text-indigo-200">contagious.</span>
              </h3>
              <p className="text-indigo-100 mt-6 text-lg font-medium max-w-sm">
                Join 10,000+ happy patients who found their confidence with us.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Claim Free Checkup
              </button>
              <button className="bg-indigo-700/50 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all">
                Virtual Tour
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}