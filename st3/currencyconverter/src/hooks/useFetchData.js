// import React, { useEffect, useState } from 'react'

// function useFetchData({currencyFrom}) {
//   const [returningData,setreturningData]=useState({});
//   useEffect(()=>{
//    async function fetchIt(){   //step2
//        let data=await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyFrom}.json`)
//        let jsondata=await data.json();
//         setreturningData(jsondata);
//         // console.log("1");
//   console.log(returningData);  
        
//       }
//       fetchIt()
//   },[currencyFrom])
// //   console.log("2");   //step1
//   console.log(returningData);  
//   return returningData    //step3
// }

// export default useFetchData;

import {useEffect, useState} from "react"


function useFetchData(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // console.log(data);
    }, [currency])
    // console.log(data);
    return data
}

export default useFetchData;