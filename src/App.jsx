import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'
import Hero from './components/Hero'
import Hero02 from './components/Hero02'
import Cards from './components/Cards'

function App() {

  return (
    <>
    <main className='relative '>
    <Nav/>

    <section className='mt-6'>
      <Hero/>
    </section>
    <section>
        <Hero02/>
      </section> 
       <section className='m-10'>
        <Cards/>
      </section>

    </main>
    </>
  )
}

export default App
