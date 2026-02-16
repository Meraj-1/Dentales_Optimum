export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-blue-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Creating Beautiful Smiles With Advanced Dental Care
          </h1>
          <p className="mt-4 text-gray-600">
            Trusted dental clinic with 10+ years experience in painless treatments.
          </p>
          <div className="mt-6 space-x-4">
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Book Appointment
            </a>
            <a href="https://wa.me/919999999999" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">
              WhatsApp
            </a>
          </div>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
          alt="Dentist"
          className="rounded-xl shadow-lg mt-10 md:mt-0"
        />
      </div>
    </section>
  );
}
