import React from 'react'

export default function Content(props) {
    return (

        <div className="lg:h-[150px] lg:w-[250px] bg-white shadow-2xl rounded-xl items-center justify-center text-center inline-grid p-3 mx-auto md:mt-11 sm:mt-5 xs:mb-5 xs:-mt-2 relative group hover:bg-[#00A859]
                transition duration-300 cursor-pointer hover:shadow-inner hover:shadow-green-300 md:h-[100px] md:w-[170px] sm:h-[110px] sm:w-[130px] xs:h-[90px] xs:w-[115px]
                ">
            <img src={props.content.img} alt="" className='rounded-full lg:w-20 lg:h-20 md:w-12 md:h-12 sm:w-11 sm:h-11 xs:w-11 xs:h-11 xs:-translate-y-2' />
            <div className="mx-auto ">
                <p className='lg:text-[15px] md:text-[12px] sm:text-[11px] xs:text-[10px] text-[#00A859] font-sans font-medium mt-2 absolute inset-x-0 bottom-3 group-hover:text-white'>{props.content.title}
                </p>
            </div>
        </div>

    )
}
