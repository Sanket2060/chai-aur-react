import { useState } from 'react'
import { DarkThemeProvider } from './context/darkthemecontext';
import './App.css'
import Themeicon from './components/themeicon';
import Card from './components/card';

function App() {
   const [theme,setTheme]=useState("light");
   const setLightTheme=()=>{
       document.querySelector("html").classList.remove("dark");
       document.querySelector("html").classList.add("light");
       setTheme("light");
       console.log("light theme activated");
   }
   const setDarkTheme=()=>{
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.add("dark");
    setTheme("dark");
    console.log("dark theme activated");
   }
   return (
    <>
    <DarkThemeProvider value={{theme,setLightTheme,setDarkTheme}}>
      <Themeicon/>
      <Card/>
    </DarkThemeProvider>    
</>
  )
}

export default App
