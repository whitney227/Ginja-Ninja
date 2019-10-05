import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import Services from'../components/Services'
import Sponsors from '../components/Sponsors'

export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="Ginja Ninja Charters" 
            subtitle="39' High Performance SeaVee with triple 350 Yamahas">
        
            </Banner>
        </Hero>
        <Services />
        <Sponsors />
        </>
    );
}
