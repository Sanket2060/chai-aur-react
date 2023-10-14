import React from "react";
import UserContext from "./UserContext";    //3.import the previously defined context 

const UserContextProvider = ({children}) => {   
    const [user, setUser] = React.useState(null)
    const [email,setEmail]=React.useState(null);
    //4. J j data globally define garera component lai bina props ko through pass garnu xa 
    //tyo yes bata garne
    return(
        <UserContext.Provider value={{user, setUser,email,setEmail}}> 
         {/* 5.define the context provider to tell which component should be provided the context
         (value defined at global scope without prop drilling).It is the one which does defines
         which components can access value  */}
        {/* 6.value ma chai k k ko values ko access yo children ma defined vako chiz lai dini
        vanni sure garna painxa.Aba children le directly user ra setUser ko data access
        pauxan  */}
        {children}         
        {/* 7.outlet ko jastai mathi bata ayeko sabai values lai just yaha rakdine ho as "children".
        children ma k k xan tyo chai App.jsx ma defined xa */}
        </UserContext.Provider>
    )
}

export default UserContextProvider
//defined as 