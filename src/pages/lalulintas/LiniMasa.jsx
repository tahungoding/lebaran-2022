import axios from "axios";
import { Dialog, Transition } from '@headlessui/react'
import React, { useEffect, useState, Fragment } from "react";
import { useParams } from 'react-router-dom'
import ProfileImg from "../../../assets/img/Profile.png";
import JamImg from "../../../assets/img/Jam.svg";
import LokasiImg from "../../../assets/img/Lokasi.svg";
import MapModalImg from "../../../assets/img/mapModal.png";

export default function LiniMasa() {

  const [users, setUsers] = useState([]);
  let [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState([])
  const [userDetail, setUserDetail] = useState([])


  let {identifier} = useParams();
  const getUser = async () => {
      
  }

  function closeModal() {
    setIsOpen(false)
  }

  async function openModal(id) {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setUserDetail(response.data)
    setIsOpen(true)
  }

  const getUsers = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

    useEffect(() => {
        getUsers(), getUser()
    },[identifier])
 



  return (
    <div className="ss:mt-8 sm:mt-16 container mx-auto justify-center">
      <div
        className="container justify-center text-center lg:text-3xl xs:text-2xl  ss:text-lg ss:-mt-4 font-sans font-medium mb-7
                 text-[#00A859]"
      >
        Linimasa
        <p
          className="lg:text-xl md:text-base sm:text-sm xs:text-[12px] xs:w-72 xs:leading-4  text-[#8B8B8B] font-sans leading-7 h-14 md:w-[509px] mx-auto
                 ss:text-[12px] ss:leading-4 mt-2
                 "
        >
          Update daerah macet secara realtime
        </p>
      </div>
      
      <div className="wrapper">

      {
        users.map((user, index)=>{
            return(


        <div className="container mx-auto justify-center mb-8 min-h-full ">
          <div className="border border-1 mb-8 group cursor-pointer hover:border-green-500 hover:border-2 border-gray-300 h-60 w-full rounded-lg">
            <div className="flex items-center mt-6 ml-3">
              <img
                className="w-10 h-10 rounded-full mx-4 mr-6"
                src={ProfileImg}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none text-xl font-semibold ss:text-sm md:text-lg">
                {user.name}
                </p>
                <div className="flex items-center mt-0.5 ">
                  <img src={JamImg} alt="" className="h-3 w-3 mr-2" />
                  <p className="text-gray-600 ss:text-sm sm:text-base md:text-lg">2 Jam yang lalu</p>
                  <img src={LokasiImg} alt="" className="h-3 w-3 mx-1" />
                  <p className="text-gray-600 ss:text-sm md:text-lg">{user.address.street}</p>
                </div>
              </div>
            </div>
            <div className="px-8 py-6 ">
              <p className="line-clamp-4 ss:text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, soluta nesciunt? Non voluptas iure unde, cupiditate
                dicta laboriosam assumenda, earum sint nesciunt ad accusamus
                obcaecati excepturi id maxime blanditiis quae impedit
                repellendus molestias! Dolorem laborum soluta laboriosam id
                praesentium fugiat, earum culpa aspernatur, animi repellat
                ducimus porro ea, fugit sequi?
              </p>
            </div>

            {/* modal */}
            <button
              className=" text-green-500 font-medium text-lg flex ml-8 md:-translate-y-5 ss:-translate-y-4 "
              onClick={() => openModal(user.id)} 
            >
              Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 translate-y-1 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

          </div>
        </div>
                )
              })
          }
      
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
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
                <div className="inline-block relative w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl
                ">
                <button type="button" className='absolute right-4' onClick={closeModal}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>

                <Dialog.Title
                    as="h3"
                    className="text-lg inline-flex font-medium leading-6 text-gray-900"
                >
                    <img
                        className="w-10 h-10 rounded-full  mr-4"
                        src={ProfileImg}
                        alt="Avatar of Jonathan Reinink"
                    />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none text-xl font-semibold ">
                        {userDetail.name}
                        </p>
                        <div className="flex items-center mt-0.5 ">
                        <img src={JamImg} alt="" className="h-3 w-3 mr-2" />
                        <p className="text-gray-600">2 Jam yang lalu</p>
                        <img src={LokasiImg} alt="" className="h-3 w-3 mx-1" />
                        <p className="text-gray-600">Sumedang utara</p>
                        </div>
                    </div>
                
                </Dialog.Title>
                

                    <div className="text-justify my-3">
                    <p>
                    {user.email}
                    </p>
                    </div>
                    <div className="ml-3">
                    <img src={MapModalImg} alt="" />
                    </div>

            

                <div className="mt-4 justify-center flex">
                    <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-400 border border-transparent rounded-md hover:bg-green-600 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                    >
                    Buka Maps
                    </button>

                

                </div>
                </div>
            </Transition.Child>
            </div>
        </Dialog>
    </Transition>
    </div>
  );
}
