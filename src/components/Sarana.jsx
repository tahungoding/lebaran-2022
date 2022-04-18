import React from 'react'
import Content from '../layouts/Content'

export default function Sarana() {
    return (
        <div className='md:mt-16 sm:mt-10 lg:mx-auto md:container' id='sarana'>



            <div className="container justify-center text-center lg:text-3xl md:text-2xl font-sans font-medium
                text-[#3F3D56]">
                Sarana Prasarana Pendukung Perjalanan Mudik
                <p className='lg:text-xl md:text-base sm:text-sm xs:text-[12px] xs:w-72 xs:leading-4 text-[#8B8B8B] font-sans leading-7 h-14 md:w-[509px] mx-auto'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere viverra sit est egestas tristique.</p>

            </div>

            <div className='flex justify-center 2xl:gap-32 xl:gap-16 lg:gap-5 md:gap-4 sm:gap-8 xs:gap-3'>


                <a href="./spbu">
                    <Content
                        content={{
                            img: "/assets/img/spbu.png",
                            title: "SPBU"
                        }}

                    />
                </a>
                <a href="./bengkel">
                    <Content
                        content={{
                            img: "/assets/img/bengkel.png",
                            title: "Bengkel"
                        }}

                    />
                </a>

                <a href="./minimarket">
                    <Content
                        content={{
                            img: "/assets/img/minimarket.png",
                            title: "Mini Market"
                        }}

                    />
                </a>

                <a href="./atm">
                    <Content
                        content={{
                            img: "/assets/img/atm.png",
                            title: "ATM"
                        }}

                    />
                </a>
            </div>

            <div className="flex justify-center 2xl:gap-32 md:gap-4 xl:gap-16 sm:gap-8 xs:gap-3">
                <div className="">

                    <a href="./masjid">
                        <Content
                            content={{
                                img: "/assets/img/masjid.png",
                                title: "Masjid"
                            }}
                        />
                    </a>
                </div>
                <div className="">


                    <a href="./terminal">
                        <Content
                            content={{
                                img: "/assets/img/terminal.png",
                                title: "Terminal"
                            }}
                        />

                    </a>
                </div>
            </div>


        </div>
    )
}
