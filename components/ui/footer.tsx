import Link from 'next/link'
import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 dark:border-gray-800">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              SyncTown is revolutionizing music creation through real-time collaboration. Connect with artists worldwide and create music together, powered by AI and professional-grade tools.
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 dark:text-gray-100 font-medium mb-2">Platform</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/features" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Features</Link>
              </li>
              <li className="mb-2">
                <Link href="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link href="/security" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Security</Link>
              </li>
              <li className="mb-2">
                <Link href="/api" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">API</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 dark:text-gray-100 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/help" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Help Center</Link>
              </li>
              <li className="mb-2">
                <Link href="/tutorials" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Tutorials</Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li className="mb-2">
                <Link href="/community" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Community</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 dark:text-gray-100 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/careers" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Careers</Link>
              </li>
              <li className="mb-2">
                <Link href="/press" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Press Kit</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Contact</Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 dark:text-gray-100 font-medium mb-2">Legal</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Terms of Service</Link>
              </li>
              <li className="mb-2">
                <Link href="/dmca" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">DMCA</Link>
              </li>
              <li className="mb-2">
                <Link href="/copyright" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-150 ease-in-out">Copyright</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 dark:border-gray-800">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link href="#" className="flex justify-center items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="#" className="flex justify-center items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-full shadow transition duration-150 ease-in-out" aria-label="Instagram">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20.145" cy="11.892" r="1" />
                  <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                  <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="#" className="flex justify-center items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-full shadow transition duration-150 ease-in-out" aria-label="YouTube">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 8.001c.888.092 1.611.814 1.702 1.702.157 1.535.3 4.297.3 6.297s-.143 4.762-.3 6.297c-.091.888-.814 1.611-1.702 1.702-1.535.157-4.297.3-7.498.3s-5.963-.143-7.498-.3c-.888-.091-1.611-.814-1.702-1.702-.157-1.535-.3-4.297-.3-6.297s.143-4.762.3-6.297c.091-.888.814-1.611 1.702-1.702C10.037 7.844 12.799 7.701 16 7.701s5.963.143 7.498.3zm-5.612 7.999l-3.558-2.05v4.1l3.558-2.05z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="#" className="flex justify-center items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-full shadow transition duration-150 ease-in-out" aria-label="Discord">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.44 7.325c-1.848-.85-3.822-1.487-5.888-1.844-.255.456-.537 1.047-.735 1.519-2.207-.331-4.406-.331-6.584 0-.199-.472-.489-1.063-.744-1.519-2.069.357-4.043.997-5.891 1.847C1.612 12.513.397 17.566.794 22.547c2.481 1.828 4.888 2.934 7.253 3.669.584-.791 1.1-1.625 1.541-2.5-.844-.319-1.647-.706-2.413-1.156.206-.15.406-.306.6-.466 4.659 2.162 9.719 2.162 14.325 0 .194.163.394.316.6.466-.769.453-1.572.837-2.416 1.156.441.875.957 1.709 1.541 2.5 2.366-.735 4.772-1.841 7.253-3.669.459-5.769-1.056-10.781-4.134-15.222zM12.175 19.619c-1.381 0-2.522-1.272-2.522-2.822s1.103-2.822 2.522-2.822c1.419 0 2.553 1.272 2.522 2.822 0 1.55-1.103 2.822-2.522 2.822zm7.65 0c-1.381 0-2.522-1.272-2.522-2.822s1.103-2.822 2.522-2.822c1.419 0 2.553 1.272 2.522 2.822 0 1.55-1.103 2.822-2.522 2.822z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 dark:text-gray-400 mr-4">© SyncTown, Inc. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
