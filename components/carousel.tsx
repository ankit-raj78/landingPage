'use client'

import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

import AI_powered from '@/public/images/AI_powered.jpg'
import DAW from '@/public/images/DAW.jpg'
import collabration from '@/public/images/collabration.jpg'
import version_control from '@/public/images/vers.jpg'
import live from '@/public/images/live.jpg'

export default function Carousel() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const prevElRef = useRef<HTMLButtonElement>(null)
  const nextElRef = useRef<HTMLButtonElement>(null)

  const handlePrevSlide = () => {
    if (swiper) {
      swiper.slidePrev()
    }
  }

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">Experience the future of music creation</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Discover how SyncTown revolutionizes music production through real-time collaboration, AI-powered matching, and professional-grade tools.</p>
          </div>

          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          <div className="relative before:absolute before:inset-0 before:border-y before:border-gray-200 dark:before:border-gray-800 before:rotate-3 before:bg-gray-50 dark:before:bg-gray-800/20">

            {/* Arrows */}
            <button ref={prevElRef} onClick={handlePrevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-md rounded-full transition duration-150 ease-in-out cursor-pointer hover:cursor-pointer">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-current text-gray-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button ref={nextElRef} onClick={handleNextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-md rounded-full transition duration-150 ease-in-out cursor-pointer hover:cursor-pointer">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-current text-gray-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>

            {/* Carousel */}
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={32}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              navigation={false}
              onSwiper={setSwiper}
              breakpoints={{
                640: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
              }}
              className="!overflow-visible"
            >

              {/* Carousel items */}
              <SwiperSlide>
                <Image className="mx-auto" src={live} width={520} height={334} alt="Professional DJ mixer in red lighting for live music collaboration" />
                <div className="text-center mt-8">
                  <h4 className="h4 font-red-hat-display mb-2">Live Performance Mode</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Turn any collaboration session into a live performance with real-time mixing capabilities and audience interaction features.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <Image className="mx-auto" src={DAW} width={520} height={334} alt="Digital audio workstation interface showing professional mixing console" />
                <div className="text-center mt-8">
                  <h4 className="h4 font-red-hat-display mb-2">Professional DAW Tools</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Access industry-standard mixing, effects, and recording tools directly in your browser, with zero setup required.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <Image className="mx-auto" src={collabration} width={520} height={334} alt="Modern music production studio setup with laptop and professional headphones" />
                <div className="text-center mt-8">
                  <h4 className="h4 font-red-hat-display mb-2">Remote Collaboration</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Connect with musicians worldwide and create together as if you're in the same studio, with ultra-low latency audio streaming.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <Image className="mx-auto" src={AI_powered} width={520} height={334} alt="DJ mixer and professional audio equipment" />
                <div className="text-center mt-8">
                  <h4 className="h4 font-red-hat-display mb-2">AI-Powered Assistance</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Let our AI suggest harmonies, rhythms, and even find the perfect collaborators based on your musical style and preferences.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <Image className="mx-auto" src={version_control} width={520} height={334} alt="Professional mixing console interface" />
                <div className="text-center mt-8">
                  <h4 className="h4 font-red-hat-display mb-2">Version Control</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Track every change, branch your projects, and merge ideas seamlessly with our music-focused version control system.</p>
                </div>
              </SwiperSlide>

            </Swiper>

          </div>

        </div>
      </div>
    </section>
  )
}