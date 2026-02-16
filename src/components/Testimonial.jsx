import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, MessageSquareHeart } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Business Consultant",
    text: "I was terrified of root canals, but Dr. Anjali made the process completely painless. The 3D imaging tech they use is mind-blowing!",
    treatment: "Root Canal",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=rahul",
  },
  {
    name: "Ayesha Khan",
    role: "Graphic Designer",
    text: "Got my teeth whitened before my wedding. The results were instant and amazing. Best clinic in Mumbai!",
    treatment: "Whitening",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=ayesha",
  },
  {
    name: "Vikram Malhotra",
    role: "Fitness Coach",
    text: "The invisible aligners are so comfortable. No one even notices I'm wearing them. Highly recommend for adults.",
    treatment: "Invisalign",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=vikram",
  },
  {
    name: "Sneha Patil",
    role: "Teacher",
    text: "Very clean and hygienic. The staff follows strict protocols, which made me feel very safe during my dental implant surgery.",
    treatment: "Implants",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=sneha",
  }
];

export default function TestimonialWall() {
  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zM11 88c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm84-75c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zM30 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 40c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm56 25c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z' fill='%234338ca' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <Star size={12} className="fill-indigo-600" /> Trusted by 5000+ Happy Patients
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            Don't take our word for it. <br />
            <span className="text-indigo-600 italic">Take theirs.</span>
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100 group hover:border-indigo-100 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-current" />
                  ))}
                </div>
                <Quote size={24} className="text-slate-100 group-hover:text-indigo-50 transition-colors" />
              </div>

              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <img 
                    src={review.img} 
                    alt={review.name} 
                    className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-none">{review.name}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-wider">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-lg group-hover:bg-indigo-50 transition-colors">
                  <CheckCircle2 size={10} className="text-indigo-600" />
                  <span className="text-[9px] font-black text-slate-500 group-hover:text-indigo-700 uppercase tracking-tighter">
                    {review.treatment}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Special CTA Card within the Grid */}
          <div className="break-inside-avoid bg-indigo-600 p-10 rounded-[2rem] text-white flex flex-col items-center text-center space-y-5">
             <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                <MessageSquareHeart size={28} />
             </div>
             <h3 className="text-xl font-bold">Want to see more results?</h3>
             <p className="text-indigo-100 text-xs leading-relaxed">Check out our before and after gallery or read 200+ Google reviews.</p>
             <button className="bg-white text-indigo-600 px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-slate-50 transition-all">
                View Full Gallery
             </button>
          </div>
        </div>

        {/* Global Trust Metrics */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-slate-100 pt-12">
           {[
             { val: "4.9/5", label: "Google Rating" },
             { val: "98%", label: "Satisfaction" },
             { val: "10k+", label: "Smiles Built" }
           ].map((stat, i) => (
             <div key={i} className="text-center group">
                <p className="text-3xl md:text-4xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{stat.val}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}