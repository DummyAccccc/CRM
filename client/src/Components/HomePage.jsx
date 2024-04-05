import React from 'react'

import Nav from './Nav'
import Hero from './Hero'
import Hero02 from './Hero02'
import Cards from './Cards'
import Footer from './Footer'
import FeaturesSection from './FeaturesSection'

const HomePage = () => {
    return (
        <main >
            <Nav />
            <section className='mt-2 '>
                <Hero />
            </section>
            <section>
                <Hero02 />
            </section>
            <section>
                <FeaturesSection />
            </section>
            <section >
                <Cards />
            </section>
            <section >
                <Footer />
            </section>


        </main>
    )
}

export default HomePage
