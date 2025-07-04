import { AuroraText } from '@/components/ui/aurora-text'

export default function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">
              The <AuroraText colors={["#FF0080", "#00D4FF", "#FFFF00", "#FF8C00"]} speed={1.2}>Social Studio</AuroraText> That Lives in Your Browser
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Finally, a music creation platform that gets it right. JamSphere combines the instant social energy of live jamming with the precision editing power of a professional DAW—without the complexity that kills creativity.
            </p>
          </div>

          {/* Three Core Benefits */}
          <div className="max-w-xs mx-auto sm:max-w-none md:max-w-xl lg:max-w-none grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-3 mb-12" data-aos-id-featbl>

            {/* 1st benefit */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-xl rounded-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-featbl]">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="font-red-hat-display text-xl font-bold mb-2">Instant Studio Access</h3>
              <p className="text-gray-600 dark:text-gray-400 grow">
                Jump into any Jam Room in seconds. No massive downloads, no complex setups. Just click a link and you're making music with genre tags, BPM matching, and live presence indicators.
              </p>
            </div>

            {/* 2nd benefit */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-xl rounded-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-red-hat-display text-xl font-bold mb-2">Social Creation, Solo Control</h3>
              <p className="text-gray-600 dark:text-gray-400 grow">
                Others can hop in, chat, and vibe with your track, but you stay in creative control. No cursor chaos or edit conflicts—just pure collaborative inspiration with single-user precision.
              </p>
            </div>

            {/* 3rd benefit */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-xl rounded-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎛️</span>
              </div>
              <h3 className="font-red-hat-display text-xl font-bold mb-2">Browser Performance That Feels Native</h3>
              <p className="text-gray-600 dark:text-gray-400 grow">
                AudioWorklet technology keeps your music glitch-free while you create. Plus, when you're ready for that perfect master, our server-grade bounce delivers studio-quality WAV files without overheating your laptop.
              </p>
            </div>

          </div>

          {/* How It Works Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="h2 font-red-hat-display mb-4">From Idea to Track in 3 Simple Steps</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8" data-aos-id-steps>
              
              {/* Step 1 */}
              <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-steps]">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-red-hat-display text-xl font-bold mb-2">Join or Create a Jam Room</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Browse rooms by genre, BPM, and audio previews. Or start your own—rooms go live instantly with real-time presence for that drop-in studio vibe.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-steps]" data-aos-delay="100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-red-hat-display text-xl font-bold mb-2">Layer Your Sound</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Upload loops, record live, or use our built-in virtual instruments. Our multitrack timeline and MIDI piano-roll keep everything perfectly in sync, powered by Tone.js transport.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-steps]" data-aos-delay="200">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-red-hat-display text-xl font-bold mb-2">Polish and Share</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Mix with per-track effects and our master limiter, then hit "Studio Bounce" for a professional 24-bit WAV render. Share your creation or keep jamming with new collaborators.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}