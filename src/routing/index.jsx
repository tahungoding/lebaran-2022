import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import AtmMap from '../pages/AtmMap'
import Bapokting from '../pages/Bapokting'
import BengkelMap from '../pages/BengkelMap'
import Cctv from '../pages/Cctv'
import DashboardAtcs from '../pages/DashboardAtcs'
//Halaman Dev
import DevMap from '../pages/DevMap'
import JalanAlternatifMap from '../pages/JalanAlternatifMap'
import KecelakaanRealtime from '../pages/KecelakaanRealtime'
import KondisiJalanMap from '../pages/KondisiJalanMap'
import LiniMasa from '../pages/LiniMasa'
//Informasi Lalu Lintas
import LokasiMacetMap from '../pages/LokasiMacetMap'
import LokasiRawanMap from '../pages/LokasiRawanMap'
import MacetRealtime from '../pages/MacetRealtime'
import MasjidMap from '../pages/MasjidMap'
import MiniMarketMap from '../pages/MiniMarketMap'
import OleholehMap from '../pages/OleholehMap'
//Informasi Sarana dan Prasarana
import SpbuMap from '../pages/SpbuMap'
import TerminalMap from '../pages/TerminalMap'
//Informasi Pariwisata dan Bahan Pokok
import WisataMap from '../pages/WisataMap'





export default function Routing(props) {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
           

            {/* informasi lalulintas */}

            <Route path="/lokasi-macet" >
                <LokasiMacetMap/>
            </Route>

            <Route path="/rawan-kecelakaan">
                <LokasiRawanMap />
            </Route>

            <Route path="/jalan-alternatif">
                <JalanAlternatifMap />
            </Route>

            <Route path="/macet-realtime">
                <MacetRealtime />
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
