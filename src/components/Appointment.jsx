export default function Appointment() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Book Appointment</h2>
        <form className="mt-8 space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Message" className="w-full p-3 border rounded-lg" />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
