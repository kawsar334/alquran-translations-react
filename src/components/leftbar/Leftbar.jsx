import React from 'react'
import { NavLink } from 'react-router-dom'

const Leftbar = ({ openLeft }) => {
    // const styls = `${openLeft ?"vissible"}`

    return (
        <div className={` no_scrollbar absolute w-[100%] md:w-[360px] bg-[white] z-10 h-[calc(100vh-70px)] left-0 overflow-scroll top-[100px] md:top-[70px]  justify-center items-center ${openLeft ? "flex" : "hidden md:flex"}  overflow-auto`}>
            <div className='w-[80%] h-full  sticky left-0 top-0'>
                <ul className='w-full list-none  flex flex-col justify-start items-start  gap-4'>
                    <li className='w-full flex justify-start items-start gap-3 border-b mt-8 border-y  '>
                        <NavLink to="/" className="text-[20px] font-semibold capitalize p-2 flex items-center gap-4 "> <img src="/images/2.jpg" alt="" className='w-[30px] h-[30px] rounded-[50%] object-cover cursor-pointer border-2  md:w-[40px] md:h-[40px] ' /> <span>kawsar firoz </span></NavLink>
                    </li>
                    <li className='w-full flex justify-start items-start gap-3  '>
                        <NavLink to="/login" className="text-[18px] font-semibold capitalize p-2"><i class="fa-solid fa-chart-simple"></i> <span>Login</span></NavLink>
                    </li>
                    <li className='w-full flex justify-start items-start gap-3  '>
                        <NavLink to="/register" className="text-[18px] font-semibold capitalize p-2"><i class="fa-solid fa-chart-simple"></i> <span>Register</span></NavLink>
                    </li>
                    <li className='w-full flex justify-start items-start gap-3  '>
                        <NavLink to="/profile" className="text-[18px] font-semibold capitalize p-2"><i class="fa-solid fa-gears"></i> <span>Profile</span></NavLink>
                    </li>
                    <li className='w-full flex justify-start items-start gap-3  '>
                        <NavLink to="/notification" className="text-[18px] font-semibold capitalize p-2"> <i class="fa-regular fa-bell text-[18px] font-semibold capitalize mr-2"></i><span>Notification</span></NavLink>
                    </li>
                    <li className='w-full flex justify-start items-start gap-3   border-b'>
                        <NavLink to="/message" className="text-[18px] font-semibold capitalize p-2"><i class="fa-solid fa-house"></i> <span>message</span></NavLink>
                    </li>
                      <li className='w-full flex justify-start items-start gap-3 border-b mt-8 border-y  '>
                        <NavLink to="/" className="text-[20px] font-semibold capitalize p-2 flex items-center gap-4 "> <img src="/images/2.jpg" alt="" className='w-[30px] h-[30px] rounded-[50%] object-cover cursor-pointer border-2  md:w-[40px] md:h-[40px] ' /> <span>kawsar firoz </span></NavLink>
                    </li>
                    <li className='w-full flex justify-start items-start gap-3  '>
                        <NavLink to="/login" className="text-[18px] font-semibold capitalize p-2"><i class="fa-solid fa-chart-simple"></i> <span>Login</span></NavLink>
                    </li>
                    <li className='w-full flex justify-start items-start gap-3  '>
                        <NavLink to="/register" className="text-[18px] font-semibold capitalize p-2"><i class="fa-solid fa-chart-simple"></i> <span>Register</span></NavLink>
                    </li>
                    <li className='w-full flex justify-start items-start gap-3  '>
                        <NavLink to="/profile" className="text-[18px] font-semibold capitalize p-2"><i class="fa-solid fa-gears"></i> <span>Profile</span></NavLink>
                    </li>
                    <li className='w-full flex justify-start items-start gap-3  '>
                        <NavLink to="/" className="text-[18px] font-semibold capitalize p-2"> <i class="fa-regular fa-bell text-[18px] font-semibold capitalize mr-2"></i><span>Notification</span></NavLink>
                    </li>
                    <li className='w-full flex justify-start items-start gap-3   border-b'>
                        <NavLink to="/message" className="text-[18px] font-semibold capitalize p-2"><i class="fa-solid fa-house"></i> <span>message</span></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Leftbar