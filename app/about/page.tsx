export const metadata = {
  title: 'About - SyncTown',
  description: 'Learn about SyncTown\'s mission to revolutionize music creation through browser-based collaboration.',
}

import Hero from '@/components/hero-about'
import FeaturesGallery from '@/components/features-gallery'
import Timeline from '@/components/timeline'
import Career from '@/components/career'
import FeaturesAnimation from '@/components/features-animation'
import Team from '@/components/team'
import CtaContact from '@/components/cta-contact'

export default function About() {
  return (
    <>
      <Hero />
      <FeaturesGallery />
      <Timeline />
      <Career />
      <FeaturesAnimation />
      <Team />
      <CtaContact />
    </>
  )
}
