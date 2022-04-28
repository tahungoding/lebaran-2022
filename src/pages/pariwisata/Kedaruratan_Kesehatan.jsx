import { Dialog, Transition } from '@headlessui/react'
import { Children, Fragment, useState } from 'react'
import bapoktingImg from '../../../assets/img/bapokting.png'


export default function Kedaruratan_Kesehatan( props) {



  let [isOpen, setIsOpen] = useState(false)
   

  function closeModal() {
    setIsOpen(false)
    
    
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
        
      <button
          onClick={openModal}
        >
      <div className="lg:h-[130px] lg:w-[230px] bg-white shadow-lg rounded-xl items-center justify-center text-center sm:inline-grid p-3 mx-auto  sm:mt-5 xs:mb-5 xs:-mt-2 relative group hover:bg-[#00A859] 
                transition duration-300 cursor-pointer hover:shadow-inner hover:shadow-green-300 md:h-[100px] md:w-[170px] sm:h-[110px] sm:w-[130px] 
                ss:w-full ss:h-[100px] ss:mb-5 ss:flex xl:h-[220px] xl:w-[300px]
                ">
            <img src={props.content.img} alt="" className='rounded-full lg:w-20 lg:h-20 md:w-12 md:h-12 sm:w-11 sm:h-11  sm:translate-x-0 sm:-translate-y-1 ss:w-13 ss:h-13
            ss:translate-x-5  xl:w-24 xl:h-24
            '/>
            <div className="mx-auto ">
                <p className='lg:text-[15px]
                xl:text-[22px] xl:top-36
                lg:top-24 md:text-[12px] md:top-14 sm:text-[11px]  text-[#00A859] font-sans font-medium mt-2 absolute
                 inset-x-0 bottom-3 group-hover:text-white 
                 ss:top-7 ss:left-40 ss:text-left sm:top-24 sm:text-center sm:-left-0'>
                   {props.content.judul}
                </p>
            </div>
        </div>


       
        </button>
     
        

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-gray-400 bg-opacity-20"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            
            
                <a href={props.content.telp} className='flex text-xl justify-center cursor-pointer items-center bg-[#00A859] rounded-xl p-3 text-white font-semibold'>
                <img src={props.content.image} className="mr-4 h-10 w-10"/>
                    {props.content.hubungi}
              
                      </a>
               
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center font-medium leading-6 flex justify-center items-center text-gray-900 mt-4"
                >
                  {props.content.title}
                </Dialog.Title>
               
                  <p className="text-base text-gray-500 text-center">
                  {props.content.desk} <strong>{props.content.call}</strong> .
                   
                  </p>
                
               


              </div>
              
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
