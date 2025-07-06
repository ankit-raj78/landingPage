'use client'

import { useState, useEffect } from 'react'
import { AuroraText } from '@/components/ui/aurora-text'

export default function Stats() {
  const [waitlistCount, setWaitlistCount] = useState<number>(50)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 获取实时waitlist数量
    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch('/api/waitlist/count')
        const data = await response.json()
        
        if (data.success && data.count !== undefined) {
          setWaitlistCount(data.count)
        }
      } catch (error) {
        console.error('Failed to fetch waitlist count:', error)
        // 保持默认值50
      } finally {
        setLoading(false)
      }
    }

    fetchWaitlistCount()
    
    // 每30秒更新一次数据
    const interval = setInterval(fetchWaitlistCount, 30000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div className="absolute bottom-0 left-0 right-0 h-128 bg-linear-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden" aria-hidden="true"></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center" data-aos-id-stats>
            {/* 1st item - Waitlist Signups with real-time data */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                <AuroraText colors={["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]} speed={1.5}>
                  {loading ? '...' : `${waitlistCount}`}
                </AuroraText>
              </div>
              <div className="text-gray-600 dark:text-gray-400">Waitlist Signups</div>
            </div>
            {/* 2nd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="100">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                <AuroraText colors={["#667eea", "#764ba2", "#f093fb", "#f5576c"]} speed={1.3}>100%</AuroraText>
              </div>
              <div className="text-gray-600 dark:text-gray-400">Collaboration</div>
            </div>
            {/* 3rd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="200">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                <AuroraText colors={["#FF0080", "#00D4FF", "#FFFF00", "#FF8C00"]} speed={1.7}>∞</AuroraText>
              </div>
              <div className="text-gray-600 dark:text-gray-400">Creative Possibilities</div>
            </div>
            {/* 4th item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="300">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                <AuroraText colors={["#00FF87", "#60EFFF", "#FFD23F", "#FF6B35"]} speed={1.4}>3s</AuroraText>
              </div>
              <div className="text-gray-600 dark:text-gray-400">Avg. Load Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}