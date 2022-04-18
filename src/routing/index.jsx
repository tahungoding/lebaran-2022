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



export default function Routing() {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            {/* informasi lalulintas */}

            <Route path="/lokasimacet">
                <LokasiMacetMap />
            </Route>

            <Route path="/rawankecelakaan">
                <LokasiRawanMap />
            </Route>

            <Route path="/jalanalternatif">
                <JalanAlternatifMap />
            </Route>

            <Route path="/lokasimacet">
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



        </Switch>
    )
}
