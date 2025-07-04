import { AuroraText } from '@/components/ui/aurora-text'

export default function HeroWaitlist() {
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
              <form className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    className="form-input w-full" 
                    placeholder="Enter your email address" 
                    aria-label="Email address" 
                    required 
                  />
                </div>
                <div>
                  <select className="form-select w-full" aria-label="What describes you best?">
                    <option>What describes you best?</option>
                    <option>Music Producer</option>
                    <option>Singer/Songwriter</option>
                    <option>Beat Maker</option>
                    <option>Indie Artist</option>
                    <option>Music Student</option>
                    <option>Content Creator</option>
                    <option>Hobbyist</option>
                    <option>Other</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="btn text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full"
                >
                  Join the Waitlist
                </button>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  🎵 No spam, just updates about JamSphere's launch
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