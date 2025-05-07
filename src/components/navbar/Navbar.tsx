import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav>
        <h1>App</h1>
        <div>
            <ul>
                <li>Inicio</li>
                <li>Fundamentos</li>
                <li>Programación</li>
            </ul>
            <ModeToggle />
        </div>
    </nav>
  )
}

export default Navbar