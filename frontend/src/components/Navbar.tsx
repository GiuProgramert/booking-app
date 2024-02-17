import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <Link to="/reserva" className="nav-link">
          Reservas
        </Link>
        <Link to="/habitacion" className="nav-link">
          Habitaciones
        </Link>
        <Link to="/persona" className="nav-link">
          Personas
        </Link>
      </div>
    </nav>
  );
}
