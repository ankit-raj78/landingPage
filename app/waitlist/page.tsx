import { Metadata } from 'next'
import HeroWaitlist from '@/components/hero-waitlist'
import Stats from '@/components/stats'
import FeaturesBlocks from '@/components/features-blocks'
import TestimonialsBlocks from '@/components/testimonials-blocks'

export const metadata: Metadata = {
  title: 'Join Waitlist - SyncTown',
  description: 'Get early access to SyncTown and be among the first to experience the future of music collaboration.',
}

export default function Waitlist() {
  return (
    <>
      <HeroWaitlist />
      <Stats />
      <FeaturesBlocks />
      <TestimonialsBlocks />
    </>
  )
} 