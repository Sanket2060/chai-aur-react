import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},   
    lightTheme: () => {},
})
// passing default values to the context 

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){   //yo syntax ko through aba defined vako values component ma
    return useContext(ThemeContext)  //use garna parey useTheme ko use garna parxa(useState jastai)
                                     //syntax use garera
}