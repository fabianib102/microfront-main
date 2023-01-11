import React, { useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs"
import { AiFillEnvironment } from "react-icons/ai"
import ListBar from './ListBar'

const SideBar = () => {

    const [open, setOpen] = useState(true)

    return (
        <div className={`bg-purple-purple h-screen p-5 pt-8 ${open ? "w-72":"w-20"} duration-300 relative`}>
            <BsArrowLeftShort 
                className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
                onClick={()=>setOpen(!open)}
            />
            <div className='inline-flex'>
                <AiFillEnvironment className='bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2'/>
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>MicroFront</h1>
            </div>

            <ListBar open={open}/>
        </div>
    )
}

export default SideBar;

