import React from 'react'
import PolisiImg from '../../assets/img/logopolisi.png'
import TniImg from '../../assets/img/TNI.jpg'
import KejaksaanImg from '../../assets/img/kejaksaan.jpg'
import SmdImg from '../../assets/img/logosmd.png'
import DprdImg from '../../assets/img/logo-dprd.png'


export default function Mitra() {
  return (
    <div className='mt-16  justify-center items-center flex '>
<div className="container justify-center text-center lg:text-3xl xs:text-2xl  ss:text-lg ss:-mt-4 font-sans font-medium
                text-[#3F3D56]">
                Gotong Royong
               <div className='justify-center flex mt-9 md:space-x-10 ss:space-x-5'>
                   <img src={PolisiImg} alt="" className='lg:h-28 lg:w-28 ss:h-12 ss:w-12 md:h-16 md:w-16  transition duration-200 opacity-60 hover:contrast-100  hover:opacity-100 hover:scale-110' />
                   <img src={TniImg} alt="" className='lg:h-28 lg:w-28  ss:h-12 ss:w-12 md:h-16 md:w-16 transition duration-200 opacity-60 hover:contrast-100  hover:opacity-100 hover:scale-110' />
                   <img src={KejaksaanImg} alt="" className='lg:h-28 lg:w-28 ss:h-12 ss:w-12 md:h-16 md:w-16  transition duration-200 opacity-60 hover:contrast-100  hover:opacity-100 hover:scale-110' />
                   <img src={SmdImg} alt="" className='lg:h-28 lg:w-28  ss:h-12 ss:w-12 md:h-16 md:w-16 transition duration-200 opacity-60 hover:contrast-100  hover:opacity-100 hover:scale-110' />
                   <img src={DprdImg} alt="" className='lg:h-28 lg:w-28  ss:h-12 ss:w-12 md:h-16 md:w-16 transition duration-200 opacity-60 hover:contrast-100  hover:opacity-100 hover:scale-110' />
               </div>
            </div>

    </div>
  )
}
