import { AuroraText } from '@/components/ui/aurora-text'

export default function Stats() {  
  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div className="absolute bottom-0 left-0 right-0 h-128 bg-linear-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden" aria-hidden="true"></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center" data-aos-id-stats>
            {/* 1st item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                <AuroraText colors={["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]} speed={1.5}>5K+</AuroraText>
              </div>
              <div className="text-gray-600 dark:text-gray-400">Music Creators</div>
            </div>
            {/* 2nd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="100">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                <AuroraText colors={["#667eea", "#764ba2", "#f093fb", "#f5576c"]} speed={1.3}>150+</AuroraText>
              </div>
              <div className="text-gray-600 dark:text-gray-400">Active Rooms</div>
            </div>
            {/* 3rd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="200">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                <AuroraText colors={["#FF0080", "#00D4FF", "#FFFF00", "#FF8C00"]} speed={1.7}>2.3K</AuroraText>
              </div>
              <div className="text-gray-600 dark:text-gray-400">Tracks Created</div>
            </div>
            {/* 4th item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="300">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                <AuroraText colors={["#00FF87", "#60EFFF", "#FFD23F", "#FF6B35"]} speed={1.4}>98%</AuroraText>
              </div>
              <div className="text-gray-600 dark:text-gray-400">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}