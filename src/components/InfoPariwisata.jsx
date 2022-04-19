import React from 'react'
import Content from '../layouts/Content'
import tempatWisata from '../../assets/img/tempatwisata.png'
import olehOleh from '../../assets/img/oleholeh.png'

export default function InfoPariwisata() {
    return (
        <div className='md:mt-5 sm:mt-10 xm:mt-5 ' id='pariwisata'>

            <div className="container justify-center text-center lg:text-3xl md:text-2xl font-sans font-medium
        text-[#3F3D56] ss:text-lg">
                Informasi Pariwisata
                <p className='lg:text-xl md:text-base sm:text-sm xs:text-[12px] xs:w-72 xs:leading-4  text-[#8B8B8B] font-sans leading-7 h-14 md:w-[509px] mx-auto
                 ss:text-[12px] ss:leading-4'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere viverra sit est egestas tristique.</p>

            </div>

            <div className="min-h-full flex justify-center items-center container">
                    <div className="ss:flex-1 sm:flex-none min-w-2xl mx-auto ">
                        <div className='grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-x-5 xl:grid-cols-2 xl:gap-10
                       lg:grid-cols-2 lg:gap-x-30
                       
                       '>
                    <a exact href="/wisata">
                        <Content
                            content={{
                                img: tempatWisata,
                                title: "Tempat Wisata",
                            }}
                        />
                    </a>
               
                    <a href="/oleh-oleh">

                        <Content
                            content={{
                                img: olehOleh,
                                title: "Oleh - oleh",
                            }}
                        />
                    </a>
                </div>
                </div>
            </div>




        </div>
    )
}
