import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="grid grid-cols-3 gap-4 p-4">
      <div>
        <h1 className="text-2xl font-bold">App</h1>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex gap-4">
          <li>Inicio</li>
          <li>Fundamentos</li>
          <li>Programación</li>
        </ul>
      </div>
      <div className="flex justify-end items-center">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar