import React from 'react'
import Hero from './Hero'
import OurClients from './OurClients'
import Commitments from './Commitments'
import Services from './Services'
import Faq from './Faq'
import Testimonials from './Testimonials'
import CtaBanner from '../common/cta-banner/CtaBanner'

function Home() {
  return (
    <div>
      <Hero/>
      <OurClients/>
      <Commitments/>
      <Services/>
      <Faq/>
      <Testimonials/>
      <CtaBanner/>
    </div>
  )
}

export default Home