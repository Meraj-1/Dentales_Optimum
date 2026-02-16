const services = [
  {
    title: "Root Canal Treatment",
    desc: "Painless and advanced root canal procedures."
  },
  {
    title: "Teeth Whitening",
    desc: "Professional whitening for brighter smiles."
  },
  {
    title: "Dental Implants",
    desc: "Permanent solution for missing teeth."
  },
  {
    title: "Braces & Aligners",
    desc: "Straighten your teeth with modern aligners."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-8 mt-12 px-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
