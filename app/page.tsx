export const metadata = {
  title: 'SyncTown - Collaborative Music Production Platform',
  description: 'Join SyncTown, the social music production platform where creators collaborate in real-time. Create, produce, and share music together with AI-powered tools and seamless DAW integration.',
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-home'
import Stats from '@/components/stats'
import Carousel from '@/components/carousel'
import Tabs from '@/components/tabs'
import Process from '@/components/process'
import PricingTables from '@/components/pricing-tables'
import TestimonialsBlocks from '@/components/testimonials-blocks'
import FeaturesBlocks from '@/components/features-blocks'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>
      <Hero />
      <Stats />
      <Carousel />
      <Tabs />
      <Process />
      <PricingTables />
      <TestimonialsBlocks />
      <FeaturesBlocks />
      <Cta />
    </>
  )
}
