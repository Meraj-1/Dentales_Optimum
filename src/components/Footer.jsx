export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Clinic Info */}
        <div>
          <h3 className="text-xl font-bold text-white">
            SmileCare Dental Clinic
          </h3>
          <p className="mt-4 text-gray-400">
            Providing advanced and painless dental treatments with modern 
            technology and expert care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Book Appointment</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white">Our Services</h4>
          <ul className="mt-4 space-y-2">
            <li>Root Canal Treatment</li>
            <li>Dental Implants</li>
            <li>Teeth Whitening</li>
            <li>Braces & Aligners</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <p className="mt-4">📍 Andheri West, Mumbai</p>
          <p className="mt-2">📞 +91 99999 99999</p>
          <p className="mt-2">✉ info@smilecare.com</p>

          <div className="mt-4">
            <h5 className="font-semibold text-white">Clinic Hours</h5>
            <p className="text-gray-400 mt-2">
              Mon - Sat: 10:00 AM - 8:00 PM <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} SmileCare Dental Clinic. All Rights Reserved.
      </div>
    </footer>
  );
}
