// import { createContext,useContext } from "react";

// export const  darkthemecontext=createContext({
//  theme:"light",
//  setDarkTheme:()=>{},
//  setLightTheme:()=>{}
// })

// export  const darkthemeprovider = darkthemecontext.Provider;
 
// export default function useTheme(){
//     return useContext(darkthemecontext)
// }

import { createContext, useContext } from "react";

export const darkthemecontext = createContext({
  theme: "light",
  setDarkTheme: () => {},
  setLightTheme: () => {}
});

export const DarkThemeProvider = darkthemecontext.Provider;

export default function useTheme() {
  return useContext(darkthemecontext);
}
