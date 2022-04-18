import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import InfoLalulintas from './InfoLalulintas'
import InfoPariwisata from './InfoPariwisata'
import Navbar from './Navbar'
import Sarana from './Sarana'

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <InfoLalulintas />
            <Sarana />
            <InfoPariwisata />
            <Footer />

        </div>
    )
}
