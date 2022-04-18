import React from 'react'
import Content from '../layouts/Content'

export default function InfoLalulintas() {
    return (
        <div className='lg:mt-5 sm:mt-0 lg:mx-auto md:container ' id='infolalulintas'>

            <div className="container justify-center text-center lg:text-3xl md:text-2xl font-sans font-medium
                text-[#3F3D56]">
                Informasi Lalulintas
                <p className='lg:text-xl md:text-base sm:text-sm xs:text-[12px] xs:w-72 xs:leading-4  text-[#8B8B8B] font-sans leading-7 h-14 md:w-[509px] mx-auto'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere viverra sit est egestas tristique.</p>

            </div>

            <div className='flex justify-center 2xl:gap-32 xl:gap-16 lg:gap-5 md:gap-4 sm:gap-8 xs:gap-3' >

                <a href="/lokasimacet">
                    <Content
                        content={{
                            img: "/assets/img/fotomacet.png",
                            title: "Lokasi Macet",
                        }}
                    />
                </a>
                <a href="/lokasirawan">
                    <Content
                        content={{
                            img: "/assets/img/fotokecelakaan.png",
                            title: "Rawan Kecelakaan",
                        }}
                    />

                </a>
                <a href="/jalanalternatif">
                    <Content
                        content={{
                            img: "/assets/img/jalanalternatif.png",
                            title: "Jalan Alternatif",
                        }}
                    />
                </a>
                <a href="/kondisijalan">
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
