import { AuroraText } from '@/components/ui/aurora-text'

export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">
                  <AuroraText colors={["#FFFFFF", "#F0F0F0", "#E0E0E0", "#D0D0D0"]} speed={0.8}>
                    Ready to Turn Your Browser into a Studio?
                  </AuroraText>
                </h3>
                <p className="text-purple-200 text-lg mb-6">
                  The future of music creation is social, instant, and accessible to everyone. Join thousands of creators who've already discovered the magic of SyncTown.
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a className="btn text-purple-600 bg-gradient-to-r from-white to-purple-100 hover:from-white hover:to-purple-50 flex-shrink-0" href="/waitlist">
                        Start Creating Now - It's Free
                      </a>
                      {/* <a className="btn text-white bg-purple-700 hover:bg-purple-800 border border-purple-500 hover:border-purple-400 flex-shrink-0" href="#0">
                        Watch SyncTown in Action
                      </a> */}
                    </div>
                  </div>
                  <p className="text-purple-200 text-sm text-center lg:text-left mt-3">
                    No credit card required • No downloads • No limits on creativity
                  </p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}