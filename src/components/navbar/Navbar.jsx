import React from 'react';
import { NavLink, useLocation } from "react-router-dom"

const Navbar = () => {
  const route = useLocation().pathname;

  return (
    <div className='w-[100%] h-[auto] md:h-max   m-auto sticky top-[-5px] left-0 flex justify-center items-center z-20 '
    
    >
      <div className=" text-white py-4 text-center flex flex-col justify-center items-center gap-3"
        style={{
          backgroundImage: `linear-gradient(to bottom, #1f2937, rgba(0, 0, 0, 0.8))`, // Background image with linear gradient
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-2xl font-bold">Multilingual Al Quran</h1>
        <p className="mt-2 w-[90%]  md:w-[70%] text-center text-sm">
          Explore the Holy Quran with translations in multiple languages. Easily navigate between Surahs and Ayahs, and read verses in Arabic alongside translations in English, Bengali, and Urdu, 
        </p>
        <a href="https://kawsar334.github.io/kawsars_portfolio/" className='flex justify-center items-center px-3 py-1 text-xs font-medium text-center  text-[blue]   rounded hover:bg-[#1f2937] hover:text-[white]'> <img src="/mee.png" alt="" className='w-[30px] h-[30px] rounded-full object-cover' />About Developer </a>
    
      </div>
    </div>
  )
}

export default Navbar