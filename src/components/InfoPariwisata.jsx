import React from 'react'
import Content from '../layouts/Content'
import tempatWisata from '../../assets/img/tempatwisata.png'
import olehOleh from '../../assets/img/oleholeh.png'
import { Link } from 'react-router-dom'

export default function InfoPariwisata() {
    return (
        <div className='ss:mt-8' id='pariwisata'>
            <div className="container justify-center text-center lg:text-3xl xs:text-2xl  ss:text-lg ss:-mt-4 font-sans font-medium mb-7
                text-[#3F3D56]">
                Informasi Pariwisata dan Bahan Pokok
                <p className='lg:text-xl md:text-base sm:text-sm xs:text-[12px] xs:w-72 xs:leading-4  text-[#8B8B8B] font-sans leading-7 h-14 md:w-[509px] mx-auto
                 ss:text-[12px] ss:leading-4 mt-2
                 '>  
                 -</p>
            </div>
            <div className="min-h-full flex justify-center items-center container ">
                    <div className="ss:flex-1 sm:flex-none min-w-2xl mx-auto ">
                        <div className='grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-x-3 xl:grid-cols-3 xl:gap-x-12
                       lg:grid-cols-4 lg:gap-x-5 '>
                    <Link to="/wisata">
                        <Content
                            content={{
                                img: tempatWisata,
                                title: "Tempat Wisata",
                            }}
                        />
                    </Link>
                    <Link to="/oleh-oleh">
                        <Content
                            content={{
                                img: olehOleh,
                                title: "Oleh - oleh",
                            }}
                        />
                    </Link>
                    <Link to="/bapokting">
                        <Content
                            content={{
                                img: olehOleh,
                                title: "Bapokting",
                            }}
                        />
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}
