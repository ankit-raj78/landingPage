import { AuroraText } from '@/components/ui/aurora-text'

export default function HeroTutorials() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">
              Master <AuroraText colors={["#FF0080", "#00D4FF", "#FFFF00", "#FF8C00"]} speed={1.2}>SyncTown</AuroraText> in Minutes
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
              From your first jam session to advanced collaboration techniques, our step-by-step tutorials will help you unlock the full potential of browser-based music creation.
            </p>
            <div className="mt-8" data-aos="fade-down" data-aos-delay="300">
              <a className="btn text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mr-4" href="#0">
                Start Learning
              </a>
              <a className="btn text-purple-600 bg-white hover:text-purple-700 border border-purple-200 hover:border-purple-300" href="#0">
                Browse All Tutorials
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 