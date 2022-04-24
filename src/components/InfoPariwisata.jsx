import React from 'react'
import Content from '../layouts/Content'
import tempatWisata from '../../assets/img/tempatwisata.png'
import olehOleh from '../../assets/img/oleholeh.png'
import bapoktingImg from '../../assets/img/bapokting.png'
import { Link } from 'react-router-dom'

export default function InfoPariwisata() {
    return (
        <div className='ss:mt-8' id='pariwisata'>
            <div className="container justify-center text-center lg:text-3xl xs:text-2xl  ss:text-lg ss:-mt-4 font-sans font-medium mb-7
                text-[#3F3D56]">
                Informasi Pariwisata, Bahan Pokok dan Kedaruratan
              
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
                                img: bapoktingImg,
                                title: "Bapokting",
                            }}
                        />
                    </Link>
                    <Link to="/kedaruratan-kesehatan">
                        <Content
                            content={{
                                img: bapoktingImg,
                                title: "Kedaruratan dan Kesehatan",
                            }}
                        />
                    </Link>
                    <Link to="/kedaruratan-bencana">
                        <Content
                            content={{
                                img: bapoktingImg,
                                title: "Kedaruratan dan Bencana",
                            }}
                        />
                    </Link>
                    <Link to="/kedaruratan-lainnya">
                        <Content
                            content={{
                                img: bapoktingImg,
                                title: "Kedaruratan Lainnya",
                            }}
                        />
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}
