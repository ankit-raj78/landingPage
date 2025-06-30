import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="SyncTown">
      {/* Music note icon */}
      <svg className="w-8 h-8 fill-current text-teal-500 mr-2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 2v17.5c0 2.485-2.239 4.5-5 4.5s-5-2.015-5-4.5 2.239-4.5 5-4.5c.979 0 1.864.217 2.615.566V7.414l-10 2.5v11.586c0 2.485-2.239 4.5-5 4.5s-5-2.015-5-4.5 2.239-4.5 5-4.5c.979 0 1.864.217 2.615.566V6c0-.35.23-.663.566-.767l12-3c.417-.104.851.138.955.555.021.083.032.169.032.256.001.103-.013.206-.04.306L24 2z"/>
      </svg>
      {/* Logo text */}
      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 font-red-hat-display">
        SyncTown
      </span>
    </Link>
  )
}
