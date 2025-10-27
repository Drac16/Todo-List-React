import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-overlay">
          <h1>Centro de Gestión de Mercados, Logística y Tecnologías</h1>
          <p>Formación para el futuro, innovación para el presente</p>
        </div>
      </section>
      <Courses />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
