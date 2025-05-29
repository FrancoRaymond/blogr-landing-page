import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'
import Future from './components/future/Future.jsx'
import StateOfArt from './components/stateofart/StateOfArt.jsx'
import FreeAndOpen from './components/freeandopen/FreeAndOpen.jsx'
import Footer from './components/footer/Footer.jsx'


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Future />
      <StateOfArt />
      <FreeAndOpen />
      <Footer />
    </div>
  )
}

export default App;