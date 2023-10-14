import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
function Footer() {
    const email=useContext(UserContext);
  return (
    <>
        <footer className='bg-white h-8 text-black'>
            Your email:{email}
          
        </footer>

    </>
    )
}

export default Footer