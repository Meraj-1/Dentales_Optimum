import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "Root Canal Treatment",
    desc: "Advanced painless root canal using 3D digital imaging and rotary endodontics for precise and safe procedures.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
    tag: "Pain-Free"
  },
  {
    title: "Teeth Whitening",
    desc: "Professional laser whitening treatment that brightens your smile up to 5 shades in a single visit.",
    image: "https://images.unsplash.com/photo-1606813902914-2f5a8f2f8cfa?q=80&w=1600&auto=format&fit=crop",
    tag: "Instant Results"
  },
  {
    title: "Dental Implants",
    desc: "Permanent titanium implants that naturally integrate with your jawbone for long-lasting strength.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",
    tag: "Lifetime Strength"
  },
  {
    title: "Invisible Aligners",
    desc: "Clear aligner system designed with AI precision to give you perfectly straight teeth without braces.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1600&auto=format&fit=crop",
    tag: "AI Precision"
  },
];

export default function Services() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-slate-100 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px] opacity-50 -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">
            Our Premium Services
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-6 leading-tight">
            World-Class <span className="text-indigo-600">Dental Solutions</span>
          </h2>

          <p className="text-slate-500 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Delivering advanced treatments with cutting-edge technology and
            patient-centered care for healthy, confident smiles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full">
                  <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-3xl font-bold">{service.title}</h3>
                <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-md">
                  {service.desc}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                  Book Now <FiArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-28 bg-indigo-600 rounded-3xl p-14 text-center text-white shadow-xl">
          <h3 className="text-4xl font-bold">
            Ready to Transform Your Smile?
          </h3>
          <p className="mt-4 text-indigo-100 max-w-xl mx-auto">
            Schedule your appointment today and experience modern dentistry
            in a comfortable environment.
          </p>

          <button className="mt-8 bg-white text-indigo-600 font-bold px-10 py-4 rounded-full hover:bg-slate-100 transition-all duration-300">
            Book Appointment
          </button>
        </div>

      </div>
    </section>
  );
}
