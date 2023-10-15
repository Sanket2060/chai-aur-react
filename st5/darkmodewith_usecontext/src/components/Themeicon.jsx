import React, { useContext } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import useTheme from '../context/darkthemecontext';
function Themeicon() {
  const {theme}=useTheme();
  const {setDarkTheme}=useTheme();
  const {setLightTheme}=useTheme();

  return (
    <div className="toggler" >
     {
      (theme=="light")?<MdOutlineDarkMode className='light' onClick={setDarkTheme}/>:
      <MdDarkMode onClick={setLightTheme}/>
     }
    </div>
  )
}

export default Themeicon