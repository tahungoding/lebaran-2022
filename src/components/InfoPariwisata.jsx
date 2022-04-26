import React from "react";
import Content from "../layouts/Content";
import tempatWisata from "../../assets/img/tempatwisata.png";
import olehOleh from "../../assets/img/oleholeh.png";
import bapoktingImg from "../../assets/img/bapokting.png";
import BencanaImg from "../../assets/img/DaruratBencana.png";
import KesehatanImg from "../../assets/img/DaruratKesehatan.png";
import LainnyaImg from "../../assets/img/DaruratLainnya.png";
import GoogleImg from "../../assets/img/googleplay.png";
import CallImg from '../../assets/img/Call.png'

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
            lg:grid-cols-3 lg:gap-x-5 2xl:grid-cols-5 2xl:gap-x-12 "
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
                  judul: "POCADIK",
                  img: KesehatanImg,
                  hubungi: "Get In Google Play",
                  image : GoogleImg,
                  telp: "https://play.google.com/store/apps/details?id=mam.reader.isumedang",
                title: "Pojok Baca Pemudik",
                desk: "Kini membaca buku makin seru dengan aplikasi POCADIK",
              
              }}
            />
           

            <Kedaruratan_Kesehatan
              content={{
                  judul: "Kedaruratan dan Kesehatan",
                  img: KesehatanImg,
                  telp: "tel:119",
                  image: CallImg,
                  hubungi : "Hubungi Sekarang",
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
                image: CallImg,
                hubungi : "Hubungi Sekarang",
                title: "Anda membutuhkan layanan kedaruratan bencana ?",
                desk: "Layanan panggilan darurat bencana 24 jam BPBD kabupaten sumedang",
                call: "0811-2065-733",
              }}
            />

<Kedaruratan_Lainnya
              content={{
                judul: "Kedaruratan Lainna",
                telp1 : "tel:110",
                telp2 : "tel:113",
                telp3 : "tel:123",
                telp4 : "tel:119",
                lay1 : "Polisi",
                lay2 : "Pemadam Kebakaran",
                lay3 : "PLN",
                lay4 : "Hotline Covid-19",
                img: LainnyaImg,
                title: "Layanan kedaruratan lainnya",
                desk: "Layanan 24 jam kedaruratan",
             
              }}
           
            />
<Kedaruratan_Lainnya
              content={{
                judul: "Layanan Polres Sumedang",
                telp1 : "tel:0261201230",
                telp2 : "tel:0261201228",
                telp3 : "tel:0261208719",
                telp4 : "tel:0261207010",
                lay1 : "Polres Sumedang",
                lay2 : "Polsek Sumedang Utara",
                lay3 : "Polsek Paseh",
                lay4 : "Polsek Sumedang Selatan",
                img: LainnyaImg,
                title: "Layanan Polisi",
                desk: "Layanan 24 jam Polisi wilayah sumedang",
             
              }}
           
            />

          </div>
        </div>
      </div>
    </div>
  );
}
