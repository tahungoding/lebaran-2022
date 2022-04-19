import React from 'react'
import Content from '../layouts/Content'
import spbu from '../../assets/img/spbu.png'
import bengkel from '../../assets/img/bengkel.png'
import minimarket from '../../assets/img/minimarket.png'
import atm from '../../assets/img/atm.png'
import masjid from '../../assets/img/masjid.png'
import terminal from '../../assets/img/terminal.png'

export default function Sarana() {
    return (
        <div className='md:mt-16 sm:mt-10 ss:mt-10 xm:mt-7 lg:mx-auto md:container' id='sarana'>



            <div className="container justify-center text-center lg:text-3xl md:text-2xl font-sans font-medium
        text-[#3F3D56] ss:text-lg">
                Sarana Prasarana Pendukung Perjalanan Mudik
                <p className='lg:text-xl md:text-base sm:text-sm xs:text-[12px] xs:w-72 xs:leading-4  text-[#8B8B8B] font-sans leading-7 h-14 xm:w-[509px] mx-auto md:w-[590px]
                 ss:text-[12px] ss:leading-4 '>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere viverra sit est egestas tristique.</p>

            </div>

            <div className='xs:flex justify-center 2xl:gap-32 xl:gap-16 lg:gap-5 md:gap-4 sm:gap-8 xs:gap-3 xm:inline-block xm:mx-auto xm:container xm:gap-y-8 ss:mx-auto ss:container ss:gap-y-8
             ss:px-6
            '>


                <a href="/spbu">
                    <Content
                        content={{
                            img: spbu,
                            title: "SPBU"
                        }}

                    />
                </a>
                <a href="/bengkel">
                    <Content
                        content={{
                            img: bengkel,
                            title: "Bengkel"
                        }}

                    />
                </a>

                <a href="/minimarket">
                    <Content
                        content={{
                            img: minimarket,
                            title: "Mini Market"
                        }}

                    />
                </a>

                <a href="/atm">
                    <Content
                        content={{
                            img: atm,
                            title: "ATM"
                        }}

                    />
                </a>
            </div>

            <div className="xs:flex justify-center 2xl:gap-32 xl:gap-16 lg:gap-5 md:gap-4 sm:gap-8 xs:gap-3 ss:inline-block ss:mx-auto ss:container ss:gap-y-8 ss:translate-x-4 ss:px-6 xs:translate-x-2 xs:px-6">
                <div className="">

                    <a href="/masjid">
                        <Content
                            content={{
                                img: masjid,
                                title: "Masjid"
                            }}
                        />
                    </a>
                </div>
                <div className="">


                    <a href="/terminal">
                        <Content
                            content={{
                                img: terminal,
                                title: "Terminal"
                            }}
                        />

                    </a>
                </div>
            </div>


        </div>
    )
}
