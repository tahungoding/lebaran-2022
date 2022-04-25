import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Nav from '../components/Nav'
//Halaman Dev
import DevMap from '../pages/DevMap'
import Cctv from '../pages/lalulintas/Cctv'
//Informasi Pariwisata dan Bahan Pokok
import Cctv_Posko from '../pages/lalulintas/Cctv_Posko'
import DashboardAtcs from '../pages/lalulintas/DashboardAtcs'
import JalanAlternatifMap from '../pages/lalulintas/JalanAlternatifMap'
import KondisiJalanMap from '../pages/lalulintas/KondisiJalanMap'
import LiniMasa from '../pages/lalulintas/LiniMasa'
import RawanKecelakaanMap from '../pages/lalulintas/RawanKecelakaanMap'
//Informasi Lalu Lintas
import RawanMacetMap from '../pages/lalulintas/RawanMacetMap'
import Bapokting from '../pages/pariwisata/Bapokting'
import Kedaruratan_Kesehatan from '../pages/pariwisata/Kedaruratan_Kesehatan'
import OleholehMap from '../pages/pariwisata/OleholehMap'
import WisataMap from '../pages/pariwisata/WisataMap'
import AtmMap from '../pages/sarana/AtmMap'
import BengkelMap from '../pages/sarana/BengkelMap'
import FasilitasKesehatan from '../pages/sarana/FasilitasKesehatan'
import MasjidMap from '../pages/sarana/MasjidMap'
import MiniMarketMap from '../pages/sarana/MiniMarketMap'
//Informasi Sarana dan Prasarana
import SpbuMap from '../pages/sarana/SpbuMap'
import TerminalMap from '../pages/sarana/TerminalMap'


export default function Routing(props) {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
           
            {/* informasi lalulintas */}

            <Route path="/rawan-macet" >
            <Nav/>
                <RawanMacetMap/>
           
            </Route>

            <Route path="/rawan-kecelakaan">
            <Nav/>
                <RawanKecelakaanMap />
            </Route>

            <Route path="/jalan-alternatif">
            <Nav/>
                <JalanAlternatifMap />
            </Route>

       

            <Route path="/kondisi-jalan">
                <Nav/>
                <KondisiJalanMap />
            </Route>

            <Route path="/cctv">
                <Nav/>
                <Cctv />
            </Route>

            <Route path="/dashboard-atcs">
                <Nav/>
                <DashboardAtcs />
            </Route>
            <Route path="/cctv-posko-terpadu">
                <Nav/>
                <Cctv_Posko />
            </Route>

            {/* sarana prasarana */}

            <Route path="/spbu">
                <Nav/>
                <SpbuMap />
            </Route>
            <Route path="/bengkel">
                <Nav/>
                <BengkelMap />
            </Route>
            <Route path="/minimarket">
                <Nav/>
                <MiniMarketMap />
            </Route>
            <Route path="/atm">
                <Nav/>
                <AtmMap />
            </Route>
            <Route path="/masjid">
                <Nav/>
                <MasjidMap />
            </Route>
            <Route path="/terminal">
                <Nav/>
                <TerminalMap />
            </Route>
            <Route path="/fasilitas-kesehatan">
                <Nav/>
                <FasilitasKesehatan />
            </Route>

            {/* pariwisata */}

            <Route path="/wisata">
                <Nav/>
                <WisataMap />
            </Route>
            <Route path="/oleh-oleh">
                <Nav/>
                <OleholehMap />
            </Route>
            <Route path="/bapokting">
                <Bapokting />
            </Route>
            <Route path="/kedaruratan-kesehatan">
                <Kedaruratan_Kesehatan />
            </Route>

            {/* development */}

            <Route path="/map">
                <DevMap />
            </Route>

            {/* Linimasa  */}
            <Route path="/linimasa">
                <Nav/>
                <LiniMasa/>
            </Route>

           

          
          

        </Switch>
    )
}
