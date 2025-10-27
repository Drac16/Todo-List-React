import "../styles/ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contact-section">
      <h2>Contáctanos</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <textarea placeholder="Mensaje" rows="4" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
