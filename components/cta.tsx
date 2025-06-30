import { AuroraText } from '@/components/ui/aurora-text'

export default function Cta() {
  return (
    <section className="relative">

      {/* Background gradient */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="85.712%" y1="11.395%" x2="14.288%" y2="88.605%" id="footer-ill">
              <stop stopColor="#A855F7" offset="0%" />
              <stop stopColor="#6366F1" offset="44.635%" />
              <stop stopColor="#0891B2" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#footer-ill)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 dark:bg-gray-800 rounded-sm px-8 py-10 md:py-16 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

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
                  <g fill="url(#ni-a)">
                    <circle cx="85" cy="15" r="15" />
                    <circle cx="85" cy="85" r="85" />
                    <circle cx="213" cy="15" r="15" />
                    <circle cx="213" cy="85" r="85" />
                    <circle cx="341" cy="243" r="85" />
                    <circle cx="341" cy="173" r="15" />
                  </g>
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">
                  Join the revolution of collaborative music creation
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Be among the first to experience real-time music collaboration. Get <AuroraText colors={["#10B981", "#3B82F6", "#FBBF24", "#F59E0B"]} speed={1.1}>early access</AuroraText> and help shape the future of music production.
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="form-input w-full appearance-none bg-gray-700 border border-gray-500 focus:border-gray-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-400" placeholder="Your email..." aria-label="Your email..." />
                    <a className="btn text-white bg-teal-500 hover:bg-teal-400 shadow shrink-0" href="#0">Join Waitlist</a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for joining! We'll be in touch soon.</p> */}
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}