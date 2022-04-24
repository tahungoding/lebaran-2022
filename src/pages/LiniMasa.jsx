import React, { useState } from "react";
import JamImg from "../../assets/img/Jam.svg";
import LokasiImg from "../../assets/img/Lokasi.svg";
import MapModalImg from "../../assets/img/mapModal.png";
import ProfileImg from "../../assets/img/Profile.png";

export default function LiniMasa() {
  const [showModal, setShowModal] = useState(false);

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
                  Pos Gatur 1
                </p>
                <div className="flex items-center mt-0.5 ">
                  <img src={JamImg} alt="" className="h-3 w-3 mr-2" />
                  <p className="text-gray-600 ss:text-sm md:text-lg">2 Jam yang lalu</p>
                  <img src={LokasiImg} alt="" className="h-3 w-3 mx-1" />
                  <p className="text-gray-600 ss:text-sm md:text-lg">Sumedang utara</p>
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
              type="button"
              onClick={() => setShowModal(true)}
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

            {/* modal */}
          </div>
        </div>
      </div>

      {/* modal */}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="absolute -right-2 -top-3 p-6 border-t border-solid border-slate-200 rounded-b">
                  <button type="button" onClick={() => setShowModal(false)}>
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
                </div>

                {/*header*/}
                <div className="flex items-start justify-between ">
                  <div className="flex items-center mt-6 ml-3">
                    <img
                      className="w-10 h-10 rounded-full mx-4 mr-6"
                      src={ProfileImg}
                      alt="Avatar of Jonathan Reinink"
                    />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none text-xl font-semibold ">
                        Pos Gatur 1
                      </p>
                      <div className="flex items-center mt-0.5 ">
                        <img src={JamImg} alt="" className="h-3 w-3 mr-2" />
                        <p className="text-gray-600">2 Jam yang lalu</p>
                        <img src={LokasiImg} alt="" className="h-3 w-3 mx-1" />
                        <p className="text-gray-600">Sumedang utara</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*body*/}
                <div className="relative mb-8 cursor-pointer h-auto w-[450px] rounded-lg container mx-auto items-center justify-center">
                  <div className="px-8 py-6">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam omnis in laudantium sequi et. Id quidem est
                      neque illo quam unde dolorum reiciendis animi, repellendus
                      vel quaerat velit cum non facilis corporis, alias nulla
                      suscipit consequuntur nesciunt totam nam voluptatem!
                      Fugiat numquam repellat possimus tempore distinctio.
                    </p>
                  </div>
                  <div className="ml-5 mb-11">
                    <img src={MapModalImg} alt="" />
                  </div>
                </div>
                {/*footer*/}

                <button
                  className="bg-[#00A859] absolute text-base rounded-lg bottom-2 left-9 text-white font-medium h-[42px] w-[373px] uppercase px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Buka Maps
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
