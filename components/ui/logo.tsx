import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="SyncTown">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <span className="text-xl font-bold text-gray-900 dark:text-white">SyncTown</span>
      </div>
    </Link>
  )
}
