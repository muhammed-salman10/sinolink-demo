import CtaBanner from '@/src/components/common/cta-banner/CtaBanner'
import Hero from '@/src/components/services/Hero'
import ServicesList from '@/src/components/services/ServicesList'
import WhyChooseUs from '@/src/components/services/WhyChooseUs'
import React from 'react'

function Services() {
  return (
    <div>
        <Hero/>
        <ServicesList/>
        <WhyChooseUs/>
        <CtaBanner/>
    </div>
  )
}

export default Services