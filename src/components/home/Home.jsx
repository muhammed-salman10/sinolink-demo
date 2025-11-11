import React from 'react'
import Hero from './Hero'
import OurClients from './OurClients'
import Commitments from './Commitments'
import Services from './Services'
import Faq from './Faq'

function Home() {
  return (
    <div>
      <Hero/>
      <OurClients/>
      <Commitments/>
      <Services/>
      <Faq/>
    </div>
  )
}

export default Home