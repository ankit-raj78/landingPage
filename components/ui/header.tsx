'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import Logo from './logo'
// import Dropdown from '../utils/dropdown'
import MobileMenu from './mobile-menu'
import ThemeToggle from './theme-toggle'

export default function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">
              {/* <li className="px-5 py-2">
                <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out">About</Link>
              </li> */}
              <li className="px-5 py-2">
                <Link href="/features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out">Features</Link>
              </li>
              {/* 1st level: hover */}
              {/* <Dropdown title="Resources">
                
                <li>
                  <Link href="/help" className="flex font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 py-2 px-4 leading-tight transition duration-150 ease-in-out">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="flex font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 py-2 px-4 leading-tight transition duration-150 ease-in-out">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="flex font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 py-2 px-4 leading-tight transition duration-150 ease-in-out">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="flex font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 py-2 px-4 leading-tight transition duration-150 ease-in-out">
                    Community
                  </Link>
                </li>
              </Dropdown> */}
              {/* <li className="px-5 py-2">
                <Link href="/testimonials" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out">Testimonials</Link>
              </li> */}
            </ul>

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li className="ml-1">
                <ThemeToggle />
              </li>
              <li className="ml-6">
                <Link className="btn-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 ml-3" href="/waitlist">
                  Join Waitlist
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
