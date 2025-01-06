import Hero from '@/components/about/hero'
import Services from '@/components/about/services'
import AboutFooter from '@/components/about/aboutFooter'
import Features from '@/components/home/features'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <AboutFooter />
    </>
  )
}

export default page