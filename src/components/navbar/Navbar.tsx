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
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/arduino-basics" className="text-blue-500 hover:text-blue-700">
              Fundamentos
            </Link>
          </li>
          <li>
            <Link to="/programming-arduino" className="text-blue-500 hover:text-blue-700">
              Programación
            </Link>
          </li>
          <li>
            <Link to="/examples" className="text-blue-500 hover:text-blue-700">
              Ejemplos
            </Link>
          </li>
          <li>
            <Link to="/components" className="text-blue-500 hover:text-blue-700">
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