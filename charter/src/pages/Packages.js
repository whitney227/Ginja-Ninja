import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import Charters from '../components/Charters'
import Reservations from '../components/Reservations'

const Packages = () => {
    return (
        <>
        <Hero hero="packagesHero">
            <Banner title="Book Now" subtitle="We offer several packages to meet your budget">
            </Banner>
        </Hero>
        <Charters />
        <Reservations />
        </>
    );
   

};
export default Packages
