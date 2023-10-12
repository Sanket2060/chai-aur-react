import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 ' >Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" myArr={newArr} />
      <Card username="hitesh" />
    </>
  )
}

export default App



/* Passing props:Arrays,objects and text
Use {},same as evaluated expression to pass objects and arrays Eg.myArr (above code)
For passing string/text,send it as an attribute value < username="Hello0>"


*/