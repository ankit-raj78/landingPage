import { Metadata } from 'next'
import HeroFeatures from '@/components/hero-features'
import FeaturesBlocks from '@/components/features-blocks'
import FeaturesAnimation from '@/components/features-animation'
import Testimonials from '@/components/testimonials-blocks'
import Cta from '@/components/cta'

export const metadata: Metadata = {
  title: 'Features - SyncTown',
  description: 'Discover SyncTown\'s powerful features for browser-based music collaboration.',
}

export default function Features() {
  return (
    <>
      <HeroFeatures />
      <FeaturesBlocks />
      <FeaturesAnimation />
      <Testimonials />
      <Cta />
    </>
  )
} 