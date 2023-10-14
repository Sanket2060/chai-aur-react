import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
function Footer() {
    const {email}=useContext(UserContext);
    // Why {} important? here in email??
    // ->The answer is useContext ma hamle object banara values store garexam ani tei naam(variable ko)
    // le yaha destructuring garera value leko
  return (
    <>
        <footer className='bg-white h-8 text-black'>
            Your email:{email}
          
        </footer>

    </>
    )
}

export default Footer