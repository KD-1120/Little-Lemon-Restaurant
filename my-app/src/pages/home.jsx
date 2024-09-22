import React from 'react'
import HeroSection from '../components/heroSection';
import SpecialsSection from '../components/specialSection';
import TestimonialsSection from '../components/testimonials';
import {About} from '../components/about';
import CTA from '../components/cta';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <SpecialsSection/>
      <TestimonialsSection/>
      <About/>
      <CTA/>
    </>
  )
}

export default Home