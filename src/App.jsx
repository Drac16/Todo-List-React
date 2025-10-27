import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <h1>Centro de Gestión de Mercados, Logística y Tecnologías</h1>
          <p>Bienvenido a nuestra plataforma de formación</p>
        </section>
        <Courses />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
