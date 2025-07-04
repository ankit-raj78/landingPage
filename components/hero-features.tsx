import { AuroraText } from '@/components/ui/aurora-text'

export default function HeroFeatures() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">
              Everything You Need to <AuroraText colors={["#FF0080", "#00D4FF", "#FFFF00", "#FF8C00"]} speed={1.2}>Create Music</AuroraText> in Your Browser
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
              Professional-grade tools, real-time collaboration, and AI-powered discovery—all without leaving your browser. Discover why SyncTown is revolutionizing music creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 