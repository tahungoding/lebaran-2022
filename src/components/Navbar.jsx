import React from 'react'
import { Link } from 'react-scroll'
export default function Navbar() {
    return (
        <nav class="flex justify-center py-4 bg-white drop-shadow-lg relative xs:h-14">
            <div class="flex items-center">
                <a href=".">
                    <img src="/assets/img/logo-smd.png" alt="" className='absolute lg:left-28 md:top-2 md:left-14 sm:left-4 sm:top-0.5 xs:left-5 xs:h-10 xs:top-2' />
                </a>
            </div>
            <div class="items-center md:text-lg text-gray-500 font-sans lg:text-xl space-x-8 lg:flex cursor-pointer xs:space-x-4">


                <Link activeClass="active" to="sarana" spy={true} smooth={true} offset={-40} duration={500} className=" hover:text-green-600">Sarana Prasarana</Link>

                <Link activeClass="active" to="infolalulintas" spy={true} smooth={true} offset={-50} duration={500} className="hover:text-green-600 ">Lalu Lintas</Link>

                <Link activeClass="active" to="pariwisata" spy={true} smooth={true} offset={500} duration={500} className="hover:text-green-600">Pariwisata</Link>

            </div>

        </nav>

    )
}
