export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">SmileCare Dental</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <a href="tel:+919999999999" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Call Now
        </a>
      </div>
    </nav>
  );
}
