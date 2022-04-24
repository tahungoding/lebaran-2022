import React from "react";
import Content from "../layouts/Content";
import tempatWisata from "../../assets/img/tempatwisata.png";
import olehOleh from "../../assets/img/oleholeh.png";
import bapoktingImg from "../../assets/img/bapokting.png";
import { Link } from "react-router-dom";
import Kedaruratan_Kesehatan from "../pages/pariwisata/Kedaruratan_Kesehatan";

export default function InfoPariwisata() {
  return (
    <div className="ss:mt-8" id="pariwisata">
      <div
        className="container justify-center text-center lg:text-3xl xs:text-2xl  ss:text-lg ss:-mt-4 font-sans font-medium mb-7
                text-[#3F3D56]"
      >
        Informasi Pariwisata, Bahan Pokok dan Kedaruratan
      </div>
      <div className="min-h-full flex justify-center items-center container ">
        <div className="ss:flex-1 sm:flex-none min-w-2xl mx-auto ">
          <div
            className="grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-x-3 xl:grid-cols-3 xl:gap-x-12
                       lg:grid-cols-4 lg:gap-x-5 "
          >
            <Link to="/wisata">
              <Content
                content={{
                  img: tempatWisata,
                  title: "Tempat Wisata",
                }}
              />
            </Link>
            <Link to="/oleh-oleh">
              <Content
                content={{
                  img: olehOleh,
                  title: "Oleh - oleh",
                }}
              />
            </Link>
            <Link to="/bapokting">
              <Content
                content={{
                  img: bapoktingImg,
                  title: "Bapokting",
                }}
              />
            </Link>

            {/* <Link to="/kedaruratan-kesehatan">
                        <Content
                            content={{
                                img: bapoktingImg,
                                title: "Kedaruratan Kesehatan",
                            }}
                        />
                    </Link> */}

            <Kedaruratan_Kesehatan
              content={{
                  judul: "Kedaruratan dan Kesehatan",
                title: "Anda membutuhkan layanan medis ?",
                desk: "Layanan ini akan menghubungkan anda dengan layanan medis",
                call: 119,
              }}
            />

<Kedaruratan_Kesehatan
              content={{
                judul: "Kedaruratan dan Bencana",
                title: "Anda membutuhkan layanan kedaruratan bencana ?",
                desk: "Layanan ini akan menghubungkan anda dengan layanan kedaruratan bencana",
                call: 115,
              }}
            />

<Kedaruratan_Kesehatan
              content={{
                judul: "Kedaruratan Lainnya",
                title: "Layanan lainnya",
                desk: "Jika anda melihat kebakaran, tindak kriminal, butuh ambulan. Anda akan dihubungkan dengan layanan",
                call: 112,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
