import { AuroraText } from '@/components/ui/aurora-text'

export default function HeroCommunity() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">
              Join the <AuroraText colors={["#FF0080", "#00D4FF", "#FFFF00", "#FF8C00"]} speed={1.2}>SyncTown</AuroraText> Community
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
              Connect with thousands of music creators, producers, and artists from around the world. Share your tracks, collaborate on projects, and discover your next musical inspiration.
            </p>
            <div className="mt-8" data-aos="fade-down" data-aos-delay="300">
              <a className="btn text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mr-4" href="#0">
                Join Community
              </a>
              <a className="btn text-purple-600 bg-white hover:text-purple-700 border border-purple-200 hover:border-purple-300" href="#0">
                Browse Creators
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 