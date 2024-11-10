import Link from 'next/link';
import React from 'react'
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
          <Link href="https://www.linkedin.com/in/urooj-khalid/"><div className='text-xl font-medium text-start '>Urooj</div></Link>

          <ul className='gap-10 lg:gap-16 hidden md:flex  '>
        <li className='menuLink'>Home</li>
        <li className='menuLink'>Projects</li>
        <li className='menuLink'>Skills</li>
        <li className='menuLink'>Testimonials</li>
        <li className='menuLink'>Contacts</li>
      </ul>
      <IoIosMenu className='md:hidden ' size={30}/>
      </div>

     
      

      
    </div>
  )
}

export default Navbar
