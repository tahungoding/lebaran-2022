import React from "react";
import Content from "../layouts/Content";
import tempatWisata from "../../assets/img/tempatwisata.png";
import olehOleh from "../../assets/img/oleholeh.png";
import bapoktingImg from "../../assets/img/bapokting.png";
import BencanaImg from "../../assets/img/DaruratBencana.png";
import KesehatanImg from "../../assets/img/DaruratKesehatan.png";
import LainnyaImg from "../../assets/img/DaruratLainnya.png";
import { Link } from "react-router-dom";
import Kedaruratan_Kesehatan from "../pages/pariwisata/Kedaruratan_Kesehatan";
import Kedaruratan_Lainnya from "../pages/pariwisata/Kedaruratan_Lainnya";

export default function InfoPariwisata() {

 

  return (
    <div className="ss:mt-8 " id="pariwisata">
      <div
        className="container justify-center text-center lg:text-3xl xs:text-2xl  ss:text-lg ss:-mt-4 font-sans font-medium mb-7
                text-[#3F3D56]"
      >
        Informasi Pariwisata, Bahan Pokok dan Kedaruratan
      </div>
      <div className="min-h-full flex justify-center items-center container mt-12">
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

           

            <Kedaruratan_Kesehatan
              content={{
                  judul: "Kedaruratan dan Kesehatan",
                  img: KesehatanImg,
                  telp: "tel:119",
                title: "Anda membutuhkan layanan medis ?",
                desk: "Layanan ini akan menghubungkan anda dengan layanan medis",
                call: 119,
              }}
            />

<Kedaruratan_Kesehatan
              content={{
                judul: "Kedaruratan dan Bencana",
                img: BencanaImg,
                telp: "tel:08112065733",
                title: "Anda membutuhkan layanan kedaruratan bencana ?",
                desk: "Layanan panggilan darurat bencana 24 jam BPBD kabupaten sumedang",
                call: "0811-2065-733",
              }}
            />

<Kedaruratan_Lainnya
              content={{
                judul: "Kedaruratan Lainna",
                telp1 : "tel:112",
                telp2 : "tel:123",
                telp3 : "tel:119",
                telp4 : "tel:122",
                lay1: "Pemadam Kebakaran",
                lay2: "PLN",
                lay3: "Hotline Covid-19",
                lay4: "Posko Kewaspadaan Nasional",
                img: LainnyaImg,
                title: "Info Layanan kedaruratan lainnya",
                desk: "Menu layanan kedaruratan lainnya",
             
              }}
           
            />

<Kedaruratan_Lainnya
              content={{
                judul: "Layanan Polres Sumedang",
                telp1 : "tel:0261201230",
                telp2 : "tel:0261208719",
                telp3 : "tel:0261201228",
                telp4 : "tel:0261207010",
                lay1: "POLRES SUMEDANG",
                lay2: "Polsek Paseh",
                lay3: "Polsek Sumedang Utara",
                lay4: "Polsek Sumedang Selatan",
                img: LainnyaImg,
                title: "Menu layanan call centre Polres Sumedang",
                desk: "",
             
              }}
           
            />
          </div>
        </div>
      </div>
    </div>
  );
}
