import React from 'react'
import Hero from './Hero'
import InfoLalulintas from './InfoLalulintas'
import InfoPariwisata from './InfoPariwisata'
import Mitra from './Mitra'
import Sarana from './Sarana'
import Navbar from './Navbar'

export default function HomePage() {
    return (
        <div>
         
<Navbar/>
            <Hero />
            <InfoLalulintas />
            <Sarana />
            <InfoPariwisata />
            <Mitra/>

         
            

        </div>
    )
}
