import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/img/logoNew.png'

export default function Nav() {
  return (
    <nav className="flex justify-center py-4 items-center bg-white drop-shadow-lg  xs:h-14 xl:h-16 2xl:h-24 w-full">
            <div className="flex justify-center items-center">
                <Link to="/">
                    <img src={logoImg} alt="" className=' xs:h-7 xs:w-20 xm:h-10 ss:h-10 
                    md:h-10 md:w-auto lg:h-12 lg:w-auto xl:h-12 xl:w-auto 2xl:h-20' />

                </Link>
            </div>
         
        </nav>

  )
}
