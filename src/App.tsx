import { Route, Routes } from "react-router"
import {Home, ArduinoBasics, ProgrammingArduino} from "@/pages"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arduino-basics" element={<ArduinoBasics />} />
        <Route path="/programming-arduino" element={<ProgrammingArduino />} />
      </Routes>
    </div>
  )
}

export default App