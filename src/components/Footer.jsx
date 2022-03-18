import React from 'react'


const Footer = () => {
  return (
    <div className='fixed w-full left-0 bottom-0 grid grid-cols-3 gap-4 shadow-lg bg-bluefooter/60'>
        <div className='flex justify-center items-center text-xl text-white'>
            <span className='p-2'><ion-icon name="logo-facebook"></ion-icon></span>
            Aiteur Abdellatif
        </div>
        <div className='flex justify-center items-center text-xl text-white'>
            <span className='p-2'><ion-icon name="logo-linkedin"></ion-icon></span>
            AiteurAbdelatif
        </div>
        <div className='flex justify-center items-center text-xl text-white'>
            <span className='p-2'><ion-icon name="mail-outline"></ion-icon></span>
            ja_aiteur@esi.dz
        </div>
        <div className='flex justify-center items-center text-xl text-white'>
            <span className='p-2'><ion-icon name="logo-instagram"></ion-icon></span>
            Aiteur Abdellatif
        </div>
        <div className='flex justify-center items-center text-xl text-white'>
            <span className='p-2'><ion-icon name="logo-discord"></ion-icon></span>
            A_A#3350
        </div>
        <div className='flex justify-center items-center text-xl text-white'>
            <span className='p-2'><ion-icon name="call-outline"></ion-icon></span>
            0551666103
        </div>
        <div></div>
        <div className='flex justify-center items-center text-sm text-white'>@CopyRight.AiteurAbdelatif.GDB</div>
    </div>
  )
}

export default Footer