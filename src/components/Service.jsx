import { motion } from "framer-motion";

const services = [
  {
    title: "Root Canal Treatment",
    desc: "Advanced painless root canal using 3D digital imaging and rotary endodontics for precise and safe procedures.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Teeth Whitening",
    desc: "Professional laser whitening treatment that brightens your smile up to 5 shades in a single visit.",
    image:
      "https://images.unsplash.com/photo-1606813902914-2f5a8f2f8cfa?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Dental Implants",
    desc: "Permanent titanium implants that naturally integrate with your jawbone for long-lasting strength.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Invisible Aligners",
    desc: "Clear aligner system designed with AI precision to give you perfectly straight teeth without braces.",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      
      {/* Soft background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[140px] opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[140px] opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-28">
          <p className="text-indigo-600 font-semibold tracking-[0.3em] uppercase text-xs">
            Our Expertise
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mt-6 tracking-tight">
            Comprehensive <br /> Dental Care
          </h2>

          <div className="w-24 h-[2px] bg-indigo-600 mx-auto mt-8" />

          <p className="text-slate-600 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            We combine advanced dental technology with personalized care 
            to deliver safe, effective and comfortable treatments.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-36">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-20 items-center ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Glow */}
                <div className="absolute -inset-4 bg-indigo-200 rounded-3xl blur-3xl opacity-0 group-hover:opacity-40 transition duration-700" />

                <img
                  src={service.image}
                  alt={service.title}
                  className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover transform group-hover:scale-[1.03] transition duration-700"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  {service.title}
                </h3>

                <p className="mt-8 text-slate-600 leading-relaxed text-lg">
                  {service.desc}
                </p>

                {/* CTA */}
                <div className="mt-10 flex items-center gap-6">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Consultation
                  </button>

                  <button className="text-indigo-600 font-semibold hover:underline">
                    Learn More →
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
