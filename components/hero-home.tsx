'use client'

import { useState } from 'react'
import VideoThumb from '@/public/images/mockup-image-01.jpg'
import ModalVideoIphone from '@/components/modal-video-iphone'
import { AuroraText } from '@/components/ui/aurora-text'

export default function HeroHome() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    // 前端邮箱验证
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address')
      setIsSuccess(false)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, role: 'Music Enthusiast' }), // 默认角色
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message || 'Thank you for joining our waitlist!')
        setIsSuccess(true)
        setEmail('')
      } else {
        setMessage(data.error || 'Submission failed, please try again')
        setIsSuccess(false)
      }
    } catch (error) {
      setMessage('Network error, please try again')
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-black" data-aos="fade-down">
                <AuroraText colors={["#FF0080", "#00D4FF", "#FFFF00", "#FF8C00"]} speed={1.2}>
                  Meet → Mix → Make Magic
                </AuroraText> in Under 60 Seconds
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
                Turn any browser into a social music studio. No downloads, no learning curve—just open a link, drag in audio, and start jamming with creators worldwide.
              </p>
              {/* CTA form */}
              <form onSubmit={handleSubmit} className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <div className="flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-md md:mx-0">
                  <input 
                    type="email" 
                    className={`form-input w-full mb-2 sm:mb-0 sm:mr-2 ${message && !isSuccess ? 'border-red-500' : ''}`}
                    placeholder="Enter your email" 
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shrink-0 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </div>
                {/* Message display */}
                {message && (
                  <p className={`text-center md:text-left mt-2 text-sm ${
                    isSuccess ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {message}
                  </p>
                )}
              </form>
              <ul className="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2" data-aos="fade-down" data-aos-delay="450">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-purple-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Instant browser-based music studio</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-purple-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Real-time collaboration without chaos</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-purple-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Professional DAW tools in browser</span>
                </li>
              </ul>
            </div>

            {/* Mobile mockup */}
            {/* <div className="md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up">
              <ModalVideoIphone
                thumb={VideoThumb}
                thumbWidth={290}
                thumbHeight={624}
                thumbAlt="Modal video thumbnail"
                video="/videos/video.mp4"
                videoWidth={1920}
                videoHeight={1080}
              />
            </div> */}

          </div>

        </div>
      </div>
    </section>
  )
}