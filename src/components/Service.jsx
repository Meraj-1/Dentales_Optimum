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
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

      {/* Soft radial background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.08),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-28">
          <div className="flex justify-center items-center gap-2 text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-6">
            <FiActivity className="animate-pulse" />
            Elite Dental Solutions
          </div>

          <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Precision. Care. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
              Confidence.
            </span>
          </h2>

          <p className="text-slate-500 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Combining AI diagnostics and modern dental science to create
            comfortable, safe and long-lasting results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              {/* Image */}
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />

                {/* Dark glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Floating Glass Info Strip */}
              <div className="absolute top-8 left-8 flex gap-4">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full">
                  <span className="text-xs font-bold text-white tracking-widest uppercase">
                    {service.tag}
                  </span>
                </div>

                <div className="bg-indigo-600/90 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                  <FiCheckCircle className="text-white text-sm" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wide">
                    {service.stats}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-4xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>

                <p className="text-white/80 mt-4 leading-relaxed text-base max-w-md">
                  {service.desc}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 group/btn">
                  Book Appointment
                  <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Soft number background */}
              <span className="absolute bottom-6 right-10 text-white/10 text-[140px] font-black pointer-events-none">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Minimal CTA */}
        <div className="mt-32 text-center">
          <h3 className="text-5xl font-bold text-slate-900">
            Experience Dentistry <span className="text-indigo-600">Reimagined.</span>
          </h3>

          <p className="text-slate-500 mt-6 max-w-xl mx-auto text-lg">
            Trusted by thousands of happy patients for advanced, comfortable and modern treatments.
          </p>

          <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Schedule Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
