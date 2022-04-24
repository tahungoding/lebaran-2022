import { Menu } from '@headlessui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/logoLebaran.png';
import DropdownLink from './DropdownLink';


export default function Navbar() {

    // function handleScroll(id){
    //     const item = ReactDOM.findDOMNode(this.refs[id]);
    //     window.scrollTo(item.offsetTop);
    // }

    return (
        <nav className="flex justify-center py-4 bg-white drop-shadow-lg  relative xs:h-14 xl:h-16 2xl:h-24 w-full">
            <div className="flex items-center">
                <Link to="/">
                    <img src={logoImg} alt="" className='absolute lg:left-28 md:top-2 md:left-6 sm:left-4 sm:top-0.5 xs:left-5 xs:h-7 xs:w-20 xs:top-3 xm:top-2 xm:h-10 xm:left-8 ss:h-10 ss:top-2
                    md:h-10 md:w-auto lg:h-12 lg:top-1 lg:w-auto xl:h-12 xl:w-auto xl:top-2 2xl:h-20' />

                </Link>
            </div>
            <div className="items-center md:text-lg text-gray-500 font-sans lg:text-xl xl:text-2xl space-x-8 lg:flex xl:space-x-11 cursor-pointer xs:space-x-4 xm:invisible xs:visible ss:invisible">


            <Link to="linimasa" className="hover:text-green-600 anchor-link" >Lalu Lintas</Link>

                <Link to="prasarana" className="hover:text-green-600 ">Sarana Prasarana</Link>

                <a  href="#pariwisata"  className="hover:text-green-600">Pariwisata</a>

            </div>
           

            <div className="flex xs:hidden items-center gap-x-2">


                <Menu as={'div'} className="relative ">
                    <Menu.Button className="flex items-center gap-x-2 absolute xm:left-0 -top-3 ss:-left-5 hover:bg-transparent text-black z-30">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </Menu.Button>

                    <Menu.Items as={'div'} className="bg-white absolute -left-48 -top-5 py-1 rounded-lg w-56 overflow-hidden mt-8 shadow-xl z-50">


                        <DropdownLink href="#">


                            Informasi Lalulintas


                        </DropdownLink>
                        <DropdownLink href="#" className="border-t-[1px] text-gray-700 hover:text-black block px-4 py-2 text-sm hover:bg-gray-100 justify-end border-b-[1px]">


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
