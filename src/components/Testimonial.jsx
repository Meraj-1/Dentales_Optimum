export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">What Our Patients Say</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <p>"Best dental experience I ever had!"</p>
            <h4 className="mt-4 font-semibold text-blue-600">- Rahul Sharma</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p>"Very professional and painless treatment."</p>
            <h4 className="mt-4 font-semibold text-blue-600">- Ayesha Khan</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
