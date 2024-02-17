import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Persona from "./views/Persona";
import Reserva from "./views/Reserva";
import Habitacion from "./views/Habitacion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Reserva />} />
          <Route path="reserva" element={<Reserva />} />
          <Route path="persona" element={<Persona />} />
          <Route path="habitacion" element={<Habitacion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
