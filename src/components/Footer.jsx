import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#00A859] sm:h-[168px] w-full xs:h-[100px] mt-14 xs:mt-5 items-center justify-center text-center inline-flex'>

            <div className='inline-grid text-center'>
                <p className='font-sans sm:text-base font-bold text-white font xs:text-[11px]'>
                    <span className='font-sans font-light text-white md:text-base sm:text-sm xs:text-[11px]'>Build with passion by </span>
                    <em>
                        TAHUNGODING
                    </em></p>

                <a className="flex mx-auto mt-4 mb-2 space-x-3 text-center">
                    <img src="/assets/img/instagram.png" alt="" className='md:w-6 sm:w-5 sm:h-5 xs:h-4' />
                    <p className='font-sans font-medium text-white md:text-base sm:text-sm xs:text-[11px]'>tahungoding</p>
                </a>
                <a className="flex mx-auto space-x-3 text-center">
                    <img src="/assets/img/github.png" alt="" className='md:w-6 sm:w-5 sm:h-5 xs:h-4' />
                    <p className='font-sans font-medium text-white md:text-base sm:text-sm xs:text-[11px]'>tahungoding</p>

                </a>



            </div>


        </div >
    )
}
