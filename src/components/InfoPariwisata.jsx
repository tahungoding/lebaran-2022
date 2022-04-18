import React from 'react'
import Content from '../layouts/Content'

export default function InfoPariwisata() {
    return (
        <div className='md:mt-16 sm:mt-10 xm:mt-5 xl:container' id='pariwisata'>

            <div className="container justify-center text-center lg:text-3xl md:text-2xl font-sans font-medium
        text-[#3F3D56] ss:text-lg">
                Informasi Pariwisata
                <p className='lg:text-xl md:text-base sm:text-sm xs:text-[12px] xs:w-72 xs:leading-4  text-[#8B8B8B] font-sans leading-7 h-14 md:w-[509px] mx-auto
                 ss:text-[12px] ss:leading-4'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere viverra sit est egestas tristique.</p>

            </div>

            <div className='xs:flex justify-center 2xl:gap-32 xl:gap-16 lg:gap-5 md:gap-4 sm:gap-8 xs:gap-3 ss:inline-block  ss:container ss:gap-y-8 ss:translate-x-1 ss:px-6 '>

                <div>
                    <a exact href="/wisata">
                        <Content
                            content={{
                                img: "/assets/img/tempatwisata.png",
                                title: "Tempat Wisata",
                            }}
                        />
                    </a>
                </div>
                <div>
                    <a href="/oleh-oleh">

                        <Content
                            content={{
                                img: "/assets/img/oleholeh.png",
                                title: "Oleh - oleh",
                            }}
                        />
                    </a>
                </div>
            </div>




        </div>
    )
}
