import React from 'react'

export default function Content(props) {
    return (

        <div className="lg:h-[130px] lg:w-[230px] bg-white shadow-lg rounded-xl items-center justify-center text-center sm:inline-grid p-3 mx-auto  sm:mt-5 xs:mb-5 xs:-mt-2 relative group hover:bg-[#00A859] 
                transition duration-300 cursor-pointer hover:shadow-inner hover:shadow-green-300 md:h-[100px] md:w-[170px] sm:h-[110px] sm:w-[130px] 
                ss:w-full ss:h-[100px] ss:mb-5 ss:flex xl:h-[220px] xl:w-[300px]
                ">
            <img src={props.content.img} alt="" className='rounded-full lg:w-20 lg:h-20 md:w-12 md:h-12 sm:w-11 sm:h-11  sm:translate-x-0 sm:-translate-y-1 ss:w-13 ss:h-13
            ss:translate-x-5  xl:w-24 xl:h-24
            ' />
            <div className="mx-auto ">
                <p className='lg:text-[15px]
                xl:text-[22px] xl:top-36
                lg:top-24 md:text-[12px] md:top-14 sm:text-[11px]  text-[#00A859] font-sans font-medium mt-2 absolute
                 inset-x-0 bottom-3 group-hover:text-white 
                 ss:top-7 ss:left-40 ss:text-left sm:top-24 sm:text-center sm:-left-0'>
                    {props.content.title}
                </p>
            </div>
        </div>

    )
}
