import Image from 'next/image'
import HeroBg from '@/public/images/hero-bg-03.jpg'
import HeroImage from '@/public/images/about-hero.jpg'
import { AuroraText } from '@/components/ui/aurora-text'

export default function HeroAbout() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <Image className="absolute inset-0 w-full h-full object-cover opacity-25" src={HeroBg} width={1440} height={577} priority alt="About" />
        <div className="absolute inset-0 bg-linear-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <div className="relative flex justify-center items-center">
              <div className="relative inline-flex items-start" data-aos="fade-up">
                <Image className="opacity-50" src={HeroImage} width={768} height={432} priority alt="About hero" />
                <div className="absolute inset-0 bg-linear-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
              </div>
              <div className="absolute" data-aos="fade-down">
                <h1 className="h1 lg:text-6xl font-red-hat-display">
                  Music creation, <AuroraText colors={["#FF0080", "#00D4FF", "#FFFF00", "#FF8C00"]} speed={1.2}>reimagined</AuroraText>
                </h1>
              </div>
              <div className="absolute bottom-0 -mb-8 w-0.5 h-16 bg-gray-300 dark:bg-gray-700" aria-hidden="true"></div>
            </div>
            <div className="max-w-3xl mx-auto mt-16" data-aos="fade-up" data-aos-delay="300">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                We're building the future of collaborative music creation. SyncTown brings together the instant accessibility of the web with the power of professional music production tools, creating a platform where creativity knows no boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}