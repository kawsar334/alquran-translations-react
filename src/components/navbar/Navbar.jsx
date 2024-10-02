import React from 'react';
import { NavLink, useLocation } from "react-router-dom"

const Navbar = () => {
  const route = useLocation().pathname;

  return (
    <div className='w-[100%] h-[auto] md:h-[70px] border bg-[lightgray] m-auto sticky top-[-5px] left-0 flex justify-center items-center z-20 '>
      <div className='text-center'>
        <h1>kawsar firoz</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum culpa impedit minus sunt vitae iste ipsa molestias aspernatur ab?</p>
      </div>
    </div>
  )
}

export default Navbar