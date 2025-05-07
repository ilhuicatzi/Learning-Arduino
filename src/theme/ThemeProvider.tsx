import { useEffect, useState } from "react"
import { type Theme, ThemeContext } from "./ThemeContext"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

// Componente que provee el contexto a los componentes hijos
export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) => {
  // Estado del tema: se inicializa con el valor guardado en localStorage o con el tema por defecto
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  // Efecto para aplicar la clase CSS al <html> dependiendo del tema seleccionado
  useEffect(() => {
    const root = window.document.documentElement

    // Elimina clases previas
    root.classList.remove("light", "dark")

    if (theme === "system") {
      // Detecta el tema del sistema operativo
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
    } else {
      // Aplica el tema seleccionado
      root.classList.add(theme)
    }
  }, [theme])

  // Valor del contexto que se compartirá
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      // Guarda la preferencia en localStorage
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  // Renderiza el proveedor con el contexto
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
