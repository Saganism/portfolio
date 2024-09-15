import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerMenu from './BurgerMenu';

const MobileNav = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = React.useState(false);

  return (
    <>
      <nav className='hidden max-[1000px]:block py-5 sticky top-0 z-10 text-xl px-[10%] border-b-[1px] border-b-black bg-white'>
        <ul className='flex items-center justify-between'>
            <li className='hover:text-orange-400 cursor-pointer'><a href="/">My Portfolio</a></li>
            <li className='hover:text-orange-400'><button className='p-2' onClick={()=>setOpenBurgerMenu(true)}><GiHamburgerMenu /></button></li>
        </ul>
      </nav>
    <BurgerMenu isOpen={openBurgerMenu} setIsOpen={setOpenBurgerMenu}/>
    </>
  )
}

export default MobileNav
