import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../layouts/Content'
import fotoMacet from '../../assets/img/fotomacet.png'
import fotoKecelakaan from '../../assets/img/fotoKecelakaan.png'
import jalanAlternatif from '../../assets/img/jalanalternatif.png'
import kondisiJalan from '../../assets/img/kondisijalan.png'

export default function InfoLalulintas() {
    return (
        <div className='ss:mt-8' id='infolalulintas'>

            <div className="container justify-center text-center lg:text-3xl xs:text-2xl  ss:text-lg ss:-mt-4 font-sans font-medium
                text-[#3F3D56]">
                Informasi Lalulintas
                <p className='lg:text-xl md:text-base sm:text-sm xs:text-[12px] xs:w-72 xs:leading-4  text-[#8B8B8B] font-sans leading-7 h-14 md:w-[509px] mx-auto
                 ss:text-[12px] ss:leading-4
                 '>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere viverra sit est egestas tristique.</p>

            </div>

            <div className="min-h-full flex justify-center items-center container ">
                    <div className="ss:flex-1 sm:flex-none min-w-2xl mx-auto ">
                        <div className='grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-x-3 xl:grid-cols-4 xl:gap-2
                       lg:grid-cols-4 lg:gap-x-5 '>

                <Link to="/lokasi-macet">
                    <Content
                        content={{
                            img: fotoMacet,
                            title: "Lokasi Macet",
                        }}
                    />
                </Link>


                <a href="/rawan-kecelakaan">
                    <Content
                        content={{
                            img: fotoKecelakaan,
                            title: "Rawan Kecelakaan",
                        }}
                    />

                </a>
                <a href="/jalanal-ternatif">
                    <Content
                        content={{
                            img: jalanAlternatif,
                            title: "Jalan Alternatif",
                        }}
                    />
                </a>
                <a href="/kondisi-jalan">
                    <Content
                        content={{
                            img: kondisiJalan,
                            title: "Kondisi Jalan",
                        }}
                    />
                </a>
            </div>
            </div>
            </div>




        </div>
    )
}
