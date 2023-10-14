import React, { useEffect } from "react";
function InputBox({
    label,
    keys=[],
    setCurrency,
    setAmount
}) {
    
    // useEffect(()=>{
    //     console.log(keys);
    //   console.log(typeof(keys));  
    // },[keys])
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                   {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    onChange={(e)=>setAmount(e.target.value)} 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e)=>{setCurrency(e.target.value)}}
                >
                   {keys?.map((presentValue)=>{
                        
                     return (
                         <option value={presentValue} key={presentValue}>
                          {presentValue}
                      </option>
                           ) 
                            
                   })} 
                    
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;









// default value to the select->options by using selected?