export default function About() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Doctor Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1606813902914-2f5a8f2f8cfa"
            alt="Doctor"
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Meet Dr. Anjali Sharma
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            With over 10+ years of experience in advanced dentistry, 
            Dr. Anjali Sharma has helped thousands of patients achieve 
            healthy and confident smiles. She specializes in painless 
            root canal treatments, cosmetic dentistry, and dental implants.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our clinic uses modern equipment and follows strict hygiene 
            protocols to ensure safe and comfortable treatment for every patient.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">5000+</h3>
              <p className="text-gray-600">Happy Patients</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">100%</h3>
              <p className="text-gray-600">Safe & Hygienic</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">4.9★</h3>
              <p className="text-gray-600">Google Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
