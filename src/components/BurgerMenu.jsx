import React from "react";
import * as Dialog from '@radix-ui/react-dialog';

const BurgerMenu = ({isOpen, setIsOpen}) => {
    useEscapeKey(setIsOpen);
  return (
    <Dialog.Root open={isOpen} className='fixed bg-black transform animation-slide-in'>
    <Dialog.Trigger asChild/>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black bg-opacity-50 fixed inset-0" onClick={()=>setIsOpen(false)}/>
      <Dialog.Content className={`bg-white fixed inset-0 left-[20%] mt-16 animate-slide-in ${!isOpen ? 'animate-slide-out' : ''}`}>
        <Dialog.Title />
        <Dialog.Description />
        <ul className="text-xl flex flex-col gap-20 p-10 mt-40">
            <li className="text-black hover:text-orange-400 cursor-pointer"><a href="/#background" onClick={()=>setIsOpen(false)}>Background</a></li>
            <li className="text-black hover:text-orange-400 cursor-pointer"><a href="/#projects" onClick={()=>setIsOpen(false)}>Projects</a></li>
            <li className="text-black hover:text-orange-400 cursor-pointer"><a href="/#contact" onClick={()=>setIsOpen(false)}>Contact Me</a></li>
            <li className="text-black hover:text-orange-400 cursor-pointer mt-40" onClick={()=>setIsOpen(false)}><button>Close Menu</button></li>
        </ul>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  );
};

const useEscapeKey = (setIsOpen)=>{
    React.useEffect(()=>{
        const handleEscape = (e)=>{
            if(e.code === 'Escape'){
                setIsOpen(false);
            }
        }
        window.addEventListener('keydown', handleEscape);
        return ()=>{
            window.removeEventListener('keydown',handleEscape)
        }
    })
}
export default BurgerMenu;
