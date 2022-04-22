import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'

//Informasi Lalu Lintas
import RawanMacetMap from '../pages/RawanMacetMap'
import RawanKecelakaanMap from '../pages/RawanKecelakaanMap'
import JalanAlternatifMap from '../pages/JalanAlternatifMap'
import KondisiJalanMap from '../pages/KondisiJalanMap'
import MacetRealtime from '../pages/MacetRealtime'
import KecelakaanRealtime from '../pages/KecelakaanRealtime'
import Cctv from '../pages/Cctv'
import DashboardAtcs from '../pages/DashboardAtcs'

//Informasi Sarana dan Prasarana
import SpbuMap from '../pages/SpbuMap'
import BengkelMap from '../pages/BengkelMap'
import MiniMarketMap from '../pages/MiniMarketMap'
import AtmMap from '../pages/AtmMap'
import MasjidMap from '../pages/MasjidMap'
import TerminalMap from '../pages/TerminalMap'

//Informasi Pariwisata dan Bahan Pokok
import WisataMap from '../pages/WisataMap'
import OleholehMap from '../pages/OleholehMap'
import Bapokting from '../pages/Bapokting'

//Halaman Dev
import DevMap from '../pages/DevMap'

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

        </Switch>
    )
}
