import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import LokasiMacetMap from '../pages/LokasiMacetMap'
import LokasiRawanMap from '../pages/LokasiRawanMap'
import JalanAlternatifMap from '../pages/JalanAlternatifMap'
import KondisiJalanMap from '../pages/KondisiJalanMap'

import SpbuMap from '../pages/SpbuMap'
import BengkelMap from '../pages/BengkelMap'
import MiniMarketMap from '../pages/MiniMarketMap'
import AtmMap from '../pages/AtmMap'
import MasjidMap from '../pages/MasjidMap'
import TerminalMap from '../pages/TerminalMap'


import WisataMap from '../pages/WisataMap'
import OleholehMap from '../pages/OleholehMap'

import DevMap from '../pages/DevMap'



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

            <Route path="/jalanal-ternatif">
                <JalanAlternatifMap />
            </Route>

            <Route path="/kondisi-jalan">
                <KondisiJalanMap />
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

            <Route path="/map">
                <DevMap />
            </Route>

        </Switch>
    )
}
