
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")   //redefintion defined below

  const lightTheme = () => {       //redefintion defined below
    setThemeMode("light")
  }

  const darkTheme = () => {       //redefintion defined below
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>  
    {/* k k values ko access pauni yo vitra vako component le define garna milxa yesma.Tara
    defined function (lightTheme ra darkTheme) ko definition khali xa context wala file ma.
    Yesto vaye hamle yei file ma definition dina milxa.HOW?->Tei function ko naam use garera
    define gardine function.But variables lai pani define garnu parxa(compulsorily Eg.themeMode*/}
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
