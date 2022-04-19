import React from 'react'
import Content from '../layouts/Content'
import spbu from '../../assets/img/spbu.png'
import bengkel from '../../assets/img/bengkel.png'
import minimarket from '../../assets/img/minimarket.png'
import atm from '../../assets/img/atm.png'
import masjid from '../../assets/img/masjid.png'
import terminal from '../../assets/img/terminal.png'
import { Link } from 'react-router-dom'

export default function Sarana() {
    return (

        <div>
            <div className="container justify-center text-center lg:text-3xl md:text-2xl font-sans font-medium
            text-[#3F3D56] ss:text-lg my-7">
                    Sarana Prasarana
                    <p className='lg:text-xl md:text-base sm:text-sm xs:text-[12px] xs:w-72 xs:leading-4  text-[#8B8B8B] font-sans leading-7 h-14 md:w-[509px] mx-auto
                     ss:text-[12px] ss:leading-4 mt-2'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere viverra sit est egestas tristique.</p>
                </div>


                    <div className="min-h-full flex justify-center items-center container">
            
                        <div className="ss:flex-1 sm:flex-none min-w-2xl mx-auto ">


                            <div className='grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-x-3 xl:grid-cols-3 xl:gap-10
                       lg:grid-cols-4 lg:gap-x-5 
                            '>
                                <Link to="/spbu">
                                    <Content
                                        content={{
                                            img: spbu,
                                            title: "SPBU"
                                        }}
                                    />
                                </Link>
                                <Link to="/bengkel">
                                    <Content
                                        content={{
                                            img: bengkel,
                                            title: "Bengkel"
                                        }}
                                    />
                                </Link>
                                <Link to="/minimarket">
                                    <Content
                                        content={{
                                            img: minimarket,
                                            title: "Mini Market"
                                        }}
                                    />
                                </Link>
                                <Link to="/atm">
                                    <Content
                                        content={{
                                            img: atm,
                                            title: "ATM"
                                        }}
                                    />
                                </Link>
            
                                    <Link to="/masjid">
                                        <Content
                                            content={{
                                                img: masjid,
                                                title: "Masjid"
                                            }}
                                        />
                                    </Link>
            
                                    <Link to="/terminal">
                                        <Content
                                            content={{
                                                img: terminal,
                                                title: "Terminal"
                                            }}
                                        />
                                    </Link>
                                </div>
                        </div>
                    </div>
        </div>



                
    )
}
