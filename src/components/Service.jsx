import { motion } from "framer-motion";

const services = [
  {
    title: "Root Canal Treatment",
    desc: "Advanced painless root canal using 3D digital imaging and rotary endodontics for precise and safe procedures.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Teeth Whitening",
    desc: "Professional laser whitening treatment that brightens your smile up to 5 shades in a single visit.",
    image:
      "https://images.unsplash.com/photo-1606813902914-2f5a8f2f8cfa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Dental Implants",
    desc: "Permanent titanium implants that naturally integrate with your jawbone for long-lasting strength.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Invisible Aligners",
    desc: "Clear aligner system designed with AI precision to give you perfectly straight teeth without braces.",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            We provide modern dental treatments using advanced technology 
            and patient-focused care for long-term oral health.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-28">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-14 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-6 text-slate-600 leading-relaxed text-lg">
                  {service.desc}
                </p>

                <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all">
                  Book Consultation
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
