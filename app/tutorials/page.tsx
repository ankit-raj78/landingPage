import { Metadata } from 'next'
import HeroTutorials from '@/components/hero-tutorials'
// import Process from '@/components/process'
import FeaturesBlocks from '@/components/features-blocks'
import Cta from '@/components/cta'

export const metadata: Metadata = {
  title: 'Tutorials - SyncTown',
  description: 'Learn how to use SyncTown with our comprehensive tutorials and guides.',
}

export default function Tutorials() {
  return (
    <>
      <HeroTutorials />
      {/* <Process /> */}
      <FeaturesBlocks />
      <Cta />
    </>
  )
} 