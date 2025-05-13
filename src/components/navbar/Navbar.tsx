import { ModeToggle } from "./ModeToggle";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="grid grid-cols-3 gap-4 p-4">
      <div>
        <h1 className="text-2xl font-bold">App</h1>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="text-primary font-semibold">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/arduino-basics" className="text-primary font-semibold">
              Fundamentos
            </Link>
          </li>
          <li>
            <Link to="/programming-arduino" className="text-primary font-semibold">
              Programación
            </Link>
          </li>
          <li>
            <Link to="/examples" className="text-primary font-semibold">
              Ejemplos
            </Link>
          </li>
          <li>
            <Link to="/components" className="text-primary font-semibold">
              Componentes
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="flex justify-end items-center">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar