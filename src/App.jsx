import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Service";
import Testimonials from "./components/Testimonial";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About/>
      <Testimonials />
      <Appointment />
      <Footer/>
    </>
  );
}

export default App;
