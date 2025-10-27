import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SENA</div>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Propuestas</li>
        <li>Acerca</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}
