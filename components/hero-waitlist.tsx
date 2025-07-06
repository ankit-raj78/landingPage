'use client'

import { useState } from 'react'
import { AuroraText } from '@/components/ui/aurora-text'

export default function HeroWaitlist() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
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
      setMessage('请输入有效的邮箱地址')
      setIsSuccess(false)
      setIsSubmitting(false)
      return
    }

    if (!role) {
      setMessage('请选择您的角色')
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
        body: JSON.stringify({ email, role }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        setIsSuccess(true)
        setEmail('')
        setRole('')
      } else {
        // Handle duplicate email case specifically
        if (response.status === 409 || data.error === "You're in our waitlist already!") {
          setMessage("You're in our waitlist already!")
        } else {
          setMessage(data.error || '提交失败，请稍后重试')
        }
        setIsSuccess(false)
      }
    } catch (error) {
      setMessage('网络错误，请稍后重试')
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">
              Get <AuroraText colors={["#FF0080", "#00D4FF", "#FFFF00", "#FF8C00"]} speed={1.2}>Early Access</AuroraText> to SyncTown
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
              Be among the first to experience the future of music collaboration. Join our exclusive waitlist and get priority access when we launch.
            </p>
            
            {/* Waitlist form */}
            <div className="max-w-md mx-auto mt-8" data-aos="fade-down" data-aos-delay="300">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    className={`form-input w-full ${message && !isSuccess ? 'border-red-500' : ''}`}
                    placeholder="Enter your email address" 
                    aria-label="Email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div>
                  <select 
                    className={`form-select w-full ${message && !isSuccess && !role ? 'border-red-500' : ''}`}
                    aria-label="What describes you best?"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">What describes you best?</option>
                    <option value="Music Producer">Music Producer</option>
                    <option value="Singer/Songwriter">Singer/Songwriter</option>
                    <option value="Beat Maker">Beat Maker</option>
                    <option value="Indie Artist">Indie Artist</option>
                    <option value="Music Student">Music Student</option>
                    <option value="Content Creator">Content Creator</option>
                    <option value="Hobbyist">Hobbyist</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                {/* 消息显示 */}
                {message && (
                  <div className={`text-sm p-3 rounded-md ${
                    isSuccess 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700' 
                      : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-700'
                  }`}>
                    {message}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`btn text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                </button>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  🎵 No spam, just updates about SyncTown's launch
                </p>
              </form>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mt-16" data-aos="fade-up" data-aos-delay="450">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Priority Access</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Get first access when we launch, before the general public.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🎁</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Exclusive Perks</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Special launch bonuses and premium features for early adopters.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Shape the Future</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Your feedback will help us build the perfect music creation platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 