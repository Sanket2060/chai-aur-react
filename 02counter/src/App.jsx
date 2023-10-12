import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)
  // Using useState hook explanation given at end

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter+1);
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
      setCounter(counter - 1)
    }
  
  /* How do you manage to change values at  ui in 10 places when a variable is changed(increase/
  decreased)? For eg.in the counter variable which is to be shown in h2,button,button and footer.
  You have to use querySelector and change value of each and every element one by one.But react is 
  the rescue.
  
12:35 samajh gaye sir.Agar vanilla js use kar ke variables k updation pe ui mai  multiple jaga values change karna padh gaya toh dikkat ajayegi.Sab kuch manually 
one by one karna padega.Lekin react-"on change in variables,reacts to change values at different places of ui".S
o,react ui ko aaram se sambhal lega.            */
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App


  // Using useState hook
  /*  Using useState you can define a variable and upon the updation of the variable,react 
  would take care to update the value of the variable in the ui.
 1 let [counter, setCounter]  = useState(15)[Also can be defined as const]
  2let counter = 15
  1 and 2 are same but it's just that in 1 react takes care to update the value upon changes
  to the value at counter variable.
  */

  /* 
  Assignment counter from 0 to 20 only counting

  const [counter, setCounter]  = useState(15)
 
  const addValue = () => {
    if (counter>=20){
      setCounter(counter);
    }else
    setCounter(counter+1);
    
  }

  const removeValue = () => {
    if (counter<=0){
      setCounter(counter);
    }else{
      setCounter(counter - 1)
    }
  }
  */
