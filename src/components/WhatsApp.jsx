import React from 'react'
import WaLogo from '../../assets/img/whatsapp.png'

export default function WhatsApp() {
  return (
    <div className='sticky bottom-8 z-50 justify-end mr-10 flex'>
         
            <a href="https://api.whatsapp.com/send?phone=6281122202220&text=wakepo">
              <p className='text-base font-extrabold animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Wakepo!</p>
                <img src={WaLogo} alt="" className='animate-pulse cursor-pointer h-16 w-16 hover:scale-110 hover:animate-none
                transition duration-300
                rounded-full text-white' />
            </a>
            
    </div>
  )
}
