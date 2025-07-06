import Link from 'next/link'
import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        {/* <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 dark:border-gray-800"> */}

          {/* 1st block */}
          {/* <div className="sm:col-span-12 lg:col-span-6 lg:max-w-md">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              SyncTown is the social music studio that lives in your browser. Create, collaborate, and produce music instantly with artists worldwide - no downloads, no barriers, just pure creativity.
            </div>
          </div> */}

          {/* 2nd block - Platform */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 dark:text-gray-100 font-medium mb-2">Platform</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/#features" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Features</Link>
              </li>
              <li className="mb-2">
                <Link href="/#pricing" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link href="/help" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Help Center</Link>
              </li>
            </ul>
          </div> */}

          {/* 3rd block - Company */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 dark:text-gray-100 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">About</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Contact</Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Blog</Link>
              </li>
            </ul>
          </div> */}

        {/* </div> */}

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 dark:border-gray-800">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link href="https://twitter.com/synctown" className="flex justify-center items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 rounded-full shadow transition duration-150 ease-in-out" aria-label="X (Twitter)">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" transform="translate(4 4.5)" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="https://www.instagram.com/synctown.ai/" className="flex justify-center items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 rounded-full shadow transition duration-150 ease-in-out" aria-label="Instagram">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2.881c4.275 0 4.781.019 6.462.094 1.563.069 2.406.331 2.969.55a4.952 4.952 0 0 1 1.837 1.194 5.015 5.015 0 0 1 1.2 1.838c.219.563.481 1.412.55 2.969.075 1.688.094 2.194.094 6.464s-.019 4.77-.094 6.458c-.069 1.563-.331 2.406-.55 2.969a4.94 4.94 0 0 1-1.194 1.837 5.02 5.02 0 0 1-1.837 1.2c-.563.219-1.413.481-2.969.55-1.688.075-2.194.094-6.464.094s-4.776-.019-6.464-.094c-1.563-.069-2.406-.331-2.969-.55a4.952 4.952 0 0 1-1.838-1.194 5.02 5.02 0 0 1-1.2-1.837c-.219-.563-.481-1.413-.55-2.969-.075-1.688-.094-2.194-.094-6.464s.019-4.776.094-6.464c.069-1.563.331-2.406.55-2.969a4.964 4.964 0 0 1 1.194-1.838 5.015 5.015 0 0 1 1.838-1.2c.563-.219 1.412-.481 2.969-.55 1.681-.075 2.188-.094 6.458-.094zM16 0c-4.344 0-4.887.019-6.594.094-1.7.075-2.869.35-3.881.744-1.056.412-1.95.969-2.844 1.856a7.833 7.833 0 0 0-1.856 2.844C.432 6.55.157 7.719.082 9.419.006 11.125 0 11.669 0 16s.019 4.875.094 6.581c.075 1.7.35 2.869.744 3.881.413 1.056.969 1.95 1.856 2.844a7.82 7.82 0 0 0 2.844 1.856c1.019.394 2.181.669 3.881.744 1.706.075 2.25.094 6.581.094s4.875-.019 6.581-.094c1.7-.075 2.869-.35 3.881-.744 1.05-.413 1.944-.969 2.844-1.856a7.826 7.826 0 0 0 1.856-2.844c.394-1.019.669-2.181.744-3.881.075-1.706.094-2.25.094-6.581s-.019-4.875-.094-6.581c-.075-1.7-.35-2.869-.744-3.881a7.506 7.506 0 0 0-1.856-2.844A7.82 7.82 0 0 0 26.482.819C25.463.425 24.301.15 22.601.075 20.9.006 20.356 0 16.012 0zm0 7.356a8.644 8.644 0 1 0 0 17.288 8.644 8.644 0 0 0 0-17.288zM16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm10.631-13.862a2.019 2.019 0 1 1-4.038 0 2.019 2.019 0 0 1 4.038 0z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 dark:text-gray-400 mr-4">© 2025 SyncTown Inc. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
