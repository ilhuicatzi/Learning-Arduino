import { createContext } from "react"

// Tipos de tema disponibles
export type Theme = "dark" | "light" | "system"

// Estructura del contexto que vamos a compartir
export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// Estado inicial por defecto para evitar errores antes de que el provider se inicialice
export const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null, // función vacía por defecto
}

// Creamos el contexto que se compartirá en toda la app
export const ThemeContext = createContext<ThemeProviderState>(initialState)
