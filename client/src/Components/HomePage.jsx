import React from 'react'

import Nav from './Nav'
import Hero from './Hero'
import Hero02 from './Hero02'
import Cards from './Cards'

const HomePage = () => {
    return (
        <main className='relative'>
            <Nav />
            <section className='mt-2'>
                <Hero />
            </section>
            <section>
                <Hero02 />
            </section>
            <section className='m-10'>
                <Cards />
            </section>
            {/* 
            
             */}

        </main>
    )
}

export default HomePage
