import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color,setColor]=useState("olive");
  return (
    <>
    <div className="buttons bg-white  h-screen flex justify-center items-end" style={{backgroundColor:color}}>
     
      <button className=' red border-2' style={{backgroundColor:"red"}} onClick={()=>{
        setColor("red");
      }}>red</button>
      <button className=' yellow border-2' style={{backgroundColor:"yellow"}} onClick={()=>{
        setColor("yellow");}} >yellow</button>
      <button className=' blue border-2' style={{backgroundColor:"blue"}} onClick={()=>{
        setColor("blue");}}>blue</button>
      <button className=' green border-2' style={{backgroundColor:"green"}} onClick={()=>{
        setColor("green");}}>green</button>

      


    </div>
      
    </>
  )
}

export default App
