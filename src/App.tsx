import { Route, Routes } from "react-router"
import {Home, ArduinoBasics, ProgrammingArduino, Examples, Componentes} from "@/pages"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arduino-basics" element={<ArduinoBasics />} />
        <Route path="/programming-arduino" element={<ProgrammingArduino />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/components" element={<Componentes />} />
      </Routes>
    </div>
  )
}

export default App