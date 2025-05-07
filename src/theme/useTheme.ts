import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

// Hook personalizado para acceder fácilmente al contexto del tema
export const useTheme = () => {
  const context = useContext(ThemeContext)

  // Validación para asegurar que el hook se usa dentro de un ThemeProvider
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
