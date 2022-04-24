import React from 'react'
import instagramIcon from '../../assets/img/instagram.png'
import githubIcon from '../../assets/img/github.png'
import WhatsApp from './WhatsApp'

export default function Footer() {
    return (

        
        <>
        <WhatsApp/>
            <div className='bg-[#00A859] sm:h-[168px] w-full xs:h-[100px] sm:mt-12 ss:mt-5 items-center justify-center text-center inline-flex'>
                <div className='inline-grid text-center'>
                    <p className='font-sans sm:text-base font-bold text-white font xs:text-[11px] ss:text-[11px] ss:mt-4 sm:mt-2'>
                        <span className='font-sans font-light text-white md:text-base sm:text-sm xs:text-[11px]'>Build with passion by </span>
                        <em>
                            <a href="https://tahungoding.id">TAHUNGODING</a>
                        </em></p>
                    <div className="flex mx-auto mt-4 mb-2 space-x-3 text-center">
                        <img src={instagramIcon} alt="" className='md:w-6 sm:w-5 sm:h-5 xs:h-4 ss:h-4' />
                        <p className='font-sans font-medium text-white md:text-base sm:text-sm xs:text-[11px]
                        ss:text-[11px]
                        '>
                            <a href="https://instagram.com/tahungoding">tahungoding</a>
                        </p>
                    </div>
                    <div className="flex mx-auto space-x-3 text-center">
                        <img src={githubIcon} alt="" className='md:w-6 sm:w-5 sm:h-5 xs:h-4 ss:h-4' />
                        <p className='font-sans font-medium text-white md:text-base sm:text-sm xs:text-[11px] ss:text-[11px]'>
                            <a href="https://github.com/tahungoding">tahungoding</a>
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}
