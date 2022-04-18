import { Menu } from '@headlessui/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DropdownLink from './DropdownLink';

export default function Navbar() {


    return (
        <nav class="flex justify-center py-4 bg-white drop-shadow-lg relative xs:h-14 ">
            <div class="flex items-center">
                <a href="#">
                    <img src="/assets/img/logo-smd.png" alt="" className='absolute lg:left-28 md:top-2 md:left-14 sm:left-4 sm:top-0.5 xs:left-5 xs:h-10 xm:top-1 xm:h-6 xm:left-8' />
                </a>
            </div>
            <div class="items-center md:text-lg text-gray-500 font-sans lg:text-xl space-x-8 lg:flex cursor-pointer xs:space-x-4 xm:hidden">


                <NavLink className=" hover:text-green-600" to="/lokasi-rawan">Sarana Prasarana</NavLink>

                <Link activeClass="active" to="infolalulintas" spy={true} smooth={true} offset={-50} duration={500} className="hover:text-green-600 ">Lalu Lintas</Link>

                <Link activeClass="active" to="pariwisata" spy={true} smooth={true} offset={500} duration={500} className="hover:text-green-600">Pariwisata</Link>

            </div>
            <div className=''>

            </div>

            <div className="flex xs:hidden items-center gap-x-2">


                <Menu as={'div'} className="relative ">
                    <Menu.Button className="flex items-center gap-x-2 absolute left-40 -top-3 hover:bg-transparent text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </Menu.Button>

                    <Menu.Items as={'div'} className="bg-white absolute right-0 top-0 py-1 rounded-lg w-56 overflow-hidden mt-8 shadow-xl">


                        <DropdownLink href="#">


                            Informasi Lalulintas


                        </DropdownLink>
                        <DropdownLink href="#">


                            Sarana


                        </DropdownLink>
                        <DropdownLink href="#">


                            Pariwisata


                        </DropdownLink>



                    </Menu.Items>

                </Menu>

            </div>




        </nav>



    )
}
