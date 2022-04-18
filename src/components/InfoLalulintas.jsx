import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../layouts/Content'

export default function InfoLalulintas() {
    return (
        <div className='lg:mt-5 sm:mt-0 xm:mt-3 lg:mx-auto md:container ' id='infolalulintas'>

            <div className="container justify-center text-center lg:text-3xl xs:text-2xl  ss:text-lg ss:-mt-4 font-sans font-medium
                text-[#3F3D56]">
                Informasi Lalulintas
                <p className='lg:text-xl md:text-base sm:text-sm xs:text-[12px] xs:w-72 xs:leading-4  text-[#8B8B8B] font-sans leading-7 h-14 md:w-[509px] mx-auto
                 ss:text-[12px] ss:leading-4
                 '>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere viverra sit est egestas tristique.</p>

            </div>

            <div className='xs:flex justify-center 2xl:gap-32 xl:gap-16 lg:gap-5 md:gap-4 sm:gap-8 xs:gap-3 xm:inline-block xm:mx-auto xm:container xm:gap-y-8 ss:mx-auto ss:container ss:gap-y-8 ss:px-6 
            ' >

                <Link to="/lokasi-macet">
                    <Content
                        content={{
                            img: "/assets/img/fotomacet.png",
                            title: "Lokasi Macet",
                        }}
                    />
                </Link>


                <a href="/rawan-kecelakaan">
                    <Content
                        content={{
                            img: "/assets/img/fotokecelakaan.png",
                            title: "Rawan Kecelakaan",
                        }}
                    />

                </a>
                <a href="/jalanal-ternatif">
                    <Content
                        content={{
                            img: "/assets/img/jalanalternatif.png",
                            title: "Jalan Alternatif",
                        }}
                    />
                </a>
                <a href="/kondisi-jalan">
                    <Content
                        content={{
                            img: "/assets/img/kondisijalan.png",
                            title: "Kondisi Jalan",
                        }}
                    />
                </a>
            </div>




        </div>
    )
}
