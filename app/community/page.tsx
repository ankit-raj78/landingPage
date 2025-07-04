import { Metadata } from 'next'
import HeroCommunity from '@/components/hero-community'
import Stats from '@/components/stats'
import Team from '@/components/team'
import TestimonialsBlocks from '@/components/testimonials-blocks'
import Cta from '@/components/cta'

export const metadata: Metadata = {
  title: 'Community - SyncTown',
  description: 'Join the SyncTown community of music creators, producers, and artists.',
}

export default function Community() {
  return (
    <>
      <HeroCommunity />
      <Stats />
      <Team />
      <TestimonialsBlocks />
      <Cta />
    </>
  )
} 