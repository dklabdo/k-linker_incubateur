import React, { useState } from 'react'
import logo from '../assets/k-linker_logo.svg'
import menu from '../assets/menu.svg'
function NavBar() {
    const [selected,setselected] = useState(1);
  return (
    <nav className='p-2 flex justify-between items-center'>
        <img src={menu} className=' text-red-500' />
        <img src={logo} className='w-16 m-2 cursor-pointer' onClick={()=>window.location.reload()} />
        <ul className='hidden md:flex w-2/3 justify-around  items-center '>
            <a className={selected == 1 ? 'navlinks active' : 'navlinks'} onClick={()=> setselected(1)}>Home</a>
            <a className={selected == 2 ? 'navlinks active' : 'navlinks'} onClick={()=> setselected(2)}>About us</a>
            <a className={selected == 3 ? 'navlinks active' : 'navlinks'} onClick={()=> setselected(3)}>Contact us</a>
            <a className={selected == 4 ? 'navlinks active' : 'navlinks'} onClick={()=> setselected(4)}>News</a>
        </ul>
    </nav>
  )
}

function MobileNavBar(){
    return(
        <div>

        </div>
    )
}

export default NavBar