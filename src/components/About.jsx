import { motion } from "framer-motion";
import { FiAward, FiUsers, FiShield, FiStar } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-[120px] opacity-40 -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[120px] opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1606813902914-2f5a8f2f8cfa?q=80&w=1200&auto=format&fit=crop"
            alt="Dr. Anjali Sharma"
            className="rounded-[2.5rem] shadow-2xl"
          />

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-8 -right-8 bg-white shadow-xl rounded-2xl px-6 py-4">
            <h3 className="text-2xl font-bold text-indigo-600">10+ Years</h3>
            <p className="text-sm text-slate-500">Clinical Excellence</p>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-indigo-600 font-semibold uppercase tracking-widest text-xs">
            About Our Doctor
          </span>

          <h2 className="text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
            Meet <span className="text-indigo-600">Dr. Anjali Sharma</span>
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed text-lg">
            With over a decade of experience in advanced dentistry,
            Dr. Sharma has helped thousands of patients regain
            confidence through healthy, beautiful smiles.
            She specializes in painless procedures, cosmetic dentistry,
            and high-precision dental implants.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Our clinic combines modern technology with strict hygiene
            protocols to ensure safe, comfortable and stress-free treatment
            for every patient.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="flex items-center gap-3">
              <FiAward className="text-indigo-600 text-2xl" />
              <div>
                <h4 className="font-bold text-slate-900">Certified Expert</h4>
                <p className="text-sm text-slate-500">Advanced Dentistry</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiUsers className="text-indigo-600 text-2xl" />
              <div>
                <h4 className="font-bold text-slate-900">5000+ Patients</h4>
                <p className="text-sm text-slate-500">Happy Smiles</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiShield className="text-indigo-600 text-2xl" />
              <div>
                <h4 className="font-bold text-slate-900">100% Safe</h4>
                <p className="text-sm text-slate-500">Sterilized Equipment</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiStar className="text-indigo-600 text-2xl" />
              <div>
                <h4 className="font-bold text-slate-900">4.9★ Rating</h4>
                <p className="text-sm text-slate-500">Google Reviews</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Book Appointment
          </button>
        </motion.div>
      </div>
    </section>
  );
}
