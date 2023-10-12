import { useEffect, useState } from 'react'
import InputBox from './InputBox'
import './App.css'
import useFetchData from './hooks/useFetchData';

function App() {
  const [currencyFrom,setCurrencyFrom]=useState("usd");
  const [currencyTo,setCurrencyTo]=useState("npr");
  let [keys,setKeys]=useState([]);      
  const  fetchedData= useFetchData(currencyFrom);   
//    console.log(fetchedData);
   
   useEffect(()=>{
if (fetchedData?null:alert("No incoming data from api"));
    //  console.log(fetchedData);
      keys=Object.keys(fetchedData);
     console.log(keys);
 },[fetchedData])

  return (
    <>
     <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From" keys={keys}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To" keys={keys[0]}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>  
    </>
  )
}

export default App
