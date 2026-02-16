import { motion } from "framer-motion";

const services = [
  {
    title: "Root Canal Treatment",
    desc: "Advanced painless root canal using 3D digital imaging and rotary endodontics for precise and safe procedures.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400&auto=format&fit=crop",
    tag: "Pain-Free"
  },
  {
    title: "Teeth Whitening",
    desc: "Professional laser whitening treatment that brightens your smile up to 5 shades in a single visit.",
    image: "https://images.unsplash.com/photo-1606813902914-2f5a8f2f8cfa?q=80&w=1400&auto=format&fit=crop",
    tag: "Instant Results"
  },
  {
    title: "Dental Implants",
    desc: "Permanent titanium implants that naturally integrate with your jawbone for long-lasting strength.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop",
    tag: "Lifetime Strength"
  },
  {
    title: "Invisible Aligners",
    desc: "Clear aligner system designed with AI precision to give you perfectly straight teeth without braces.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1400&auto=format&fit=crop",
    tag: "AI Precision"
  },
];

export default function Services() {
  return (
    <section className="relative py-16 md:py-32 bg-[#fcfdfe] overflow-hidden">
      
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-50 rounded-full blur-[80px] md:blur-[120px] opacity-60 -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-50 rounded-full blur-[80px] md:blur-[120px] opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header Section */}
        <div className="text-left md:text-center mb-16 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs border-l-2 border-indigo-600 pl-3 md:border-none md:pl-0"
          >
            Our Expertise
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 md:mt-6 tracking-tight leading-[1.1]">
            Comprehensive <br className="hidden md:block" />
            <span className="text-indigo-600">Dental Care</span>
          </h2>

          <p className="text-slate-500 mt-6 md:mt-8 max-w-2xl md:mx-auto text-base md:text-lg leading-relaxed font-medium">
            Combining advanced dental technology with personalized care to deliver safe, effective and comfortable treatments.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-24 md:space-y-48">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-24 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`relative w-full group ${index % 2 !== 0 ? "md:order-last" : ""}`}
              >
                {/* Visual Badge for Mobile */}
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm md:hidden">
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{service.tag}</span>
                </div>

                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-50 transition duration-700" />
                
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative rounded-[2rem] md:rounded-[3rem] shadow-xl w-full h-[320px] md:h-[500px] object-cover"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col"
              >
                <div className="hidden md:flex items-center gap-2 mb-4">
                  <span className="h-[1px] w-8 bg-indigo-600"></span>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{service.tag}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.2] md:leading-tight">
                  {service.title}
                </h3>

                <p className="mt-5 md:mt-8 text-slate-500 leading-relaxed text-base md:text-lg font-medium">
                  {service.desc}
                </p>

                {/* CTAs */}
                <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-8">
                  <button className="bg-slate-900 hover:bg-indigo-600 text-white px-8 md:px-10 py-4 rounded-2xl md:rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-lg active:scale-95">
                    Book Consultation
                  </button>

                  <button className="group flex items-center justify-center gap-2 text-slate-900 font-bold text-sm md:text-base py-2">
                    Learn More 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}