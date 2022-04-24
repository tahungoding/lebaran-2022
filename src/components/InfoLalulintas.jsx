import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../layouts/Content'
import fotoMacet from '../../assets/img/fotomacet.png'
import fotoKecelakaan from '../../assets/img/fotoKecelakaan.png'
import jalanAlternatif from '../../assets/img/jalanalternatif.png'
import kondisiJalan from '../../assets/img/kondisijalan.png'
import macetRealtimeImg from '../../assets/img/macet-realtime.png'
import kecelakaanRealtimeImg from '../../assets/img/kecelakaan-realtime.png'
import cctvImg from '../../assets/img/cctv.png'
import dashboardAtcsImg from '../../assets/img/dashboard-atcs.png'

export default function InfoLalulintas() {
    return (
        <div className='ss:mt-8' id='infolalulintas'>

            <div className="container justify-center text-center lg:text-3xl xs:text-2xl  ss:text-lg ss:-mt-4 font-sans font-medium mb-7
                text-[#3F3D56]">
                Informasi Lalu lintas
                <p className='lg:text-xl md:text-base sm:text-sm xs:text-[12px] xs:w-72 xs:leading-4  text-[#8B8B8B] font-sans leading-7 h-14 md:w-[509px] mx-auto
                 ss:text-[12px] ss:leading-4 mt-2
                 '>  
                 -</p>

            </div>

            <div className="min-h-full flex justify-center items-center container ">
                    <div className="ss:flex-1 sm:flex-none min-w-2xl mx-auto ">
                        <div className='grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-x-3 xl:grid-cols-3 xl:gap-x-12
                       lg:grid-cols-4 lg:gap-x-5 2xl:grid-cols-4 2xl:gap-x-12 '>

                <Link to="/rawan-macet">
                    <Content
                        content={{
                            img: fotoMacet,
                            title: "Rawan Macet",
                        }}
                    />
                </Link>


                <Link to="/rawan-kecelakaan">
                    <Content
                        content={{
                            img: fotoKecelakaan,
                            title: "Rawan Kecelakaan",
                        }}
                    />

                </Link>
                <Link to="/jalan-alternatif">
                    <Content
                        content={{
                            img: jalanAlternatif,
                            title: "Jalan Alternatif",
                        }}
                    />
                </Link>
                <Link to="/macet-realtime">
                    <Content
                        content={{
                            img: macetRealtimeImg,
                            title: "Macet Realtime",
                        }}
                    />
                </Link>
                <Link to="/kecelakaan-realtime">
                    <Content
                        content={{
                            img: kecelakaanRealtimeImg,
                            title: "Kecelakaan Realtime",
                        }}
                    />
                </Link>
                <Link to="/kondisi-jalan">
                    <Content
                        content={{
                            img: kondisiJalan,
                            title: "Kondisi Jalan",
                        }}
                    />
                </Link>
                <Link to="/cctv">
                    <Content
                        content={{
                            img: cctvImg,
                            title: "CCTV Lalu Lintas",
                        }}
                    />
                </Link>
                <Link to="/dashboard-atcs">
                    <Content
                        content={{
                            img: dashboardAtcsImg,
                            title: "Dashboard ATCS",
                        }}
                    />
                </Link>
            </div>
            </div>
            </div>




        </div>
    )
}
