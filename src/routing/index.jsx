import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
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
import FaskesMap from '../pages/sarana/FaskesMap'
import MasjidMap from '../pages/sarana/MasjidMap'
import MiniMarketMap from '../pages/sarana/MiniMarketMap'
import MacetRealtime from '../pages/lalulintas/MacetRealtime'
import KecelakaanRealtime from '../pages/lalulintas/KecelakaanRealtime'

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
                <RawanMacetMap/>
            </Route>

            <Route path="/rawan-kecelakaan">
                <RawanKecelakaanMap />
            </Route>

            <Route path="/jalan-alternatif">
                <JalanAlternatifMap />
            </Route>

            <Route path="/macet-realtime" >
                <MacetRealtime/>
            </Route>

            <Route path="/kecelakaan-realtime">
                <KecelakaanRealtime />
            </Route>

            <Route path="/kondisi-jalan">
                <KondisiJalanMap />
            </Route>

            <Route path="/cctv">
                <Cctv />
            </Route>

            <Route path="/dashboard-atcs">
                <DashboardAtcs />
            </Route>
            <Route path="/cctv-posko-terpadu">
                <Cctv_Posko />
            </Route>

            {/* sarana prasarana */}

            <Route path="/spbu">
                <SpbuMap />
            </Route>
            <Route path="/bengkel">
                <BengkelMap />
            </Route>
            <Route path="/minimarket">
                <MiniMarketMap />
            </Route>
            <Route path="/atm">
                <AtmMap />
            </Route>
            <Route path="/masjid">
                <MasjidMap />
            </Route>
            <Route path="/terminal">
                <TerminalMap />
            </Route>
            <Route path="/fasilitas-kesehatan">
                <FaskesMap />
            </Route>

            {/* pariwisata */}

            <Route path="/wisata">
                <WisataMap />
            </Route>
            <Route path="/oleh-oleh">
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
                <LiniMasa/>
            </Route>

        </Switch>
    )
}
