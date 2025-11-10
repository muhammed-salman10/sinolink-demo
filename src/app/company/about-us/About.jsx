import Hero from '@/src/components/about-us/Hero'
import Map from '@/src/components/about-us/Map'
import MissionAndVision from '@/src/components/about-us/MissionAndVision'
import OurTeam from '@/src/components/about-us/OurTeam'
import CtaBanner from '@/src/components/common/cta-banner/CtaBanner'
import React from 'react'

function About() {
  return (
    <div>
        <Hero/>
        <MissionAndVision/>
        <Map/>
        {/* <OurTeam/> */}
        <CtaBanner/>
    </div>
  )
}

export default About