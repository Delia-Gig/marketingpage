import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-red-200/50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-end items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="hidden sm:block text-right mr-2">
            <span className="text-lg font-bold text-black">Summerträff</span>
            <span className="text-lg font-bold text-red-800"> Vaduz</span>
          </div>
          <div className="relative">
            {/* Logo SVG */}
            <svg
              width="45"
              height="45"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-110 transition-transform duration-300"
            >
              {/* Hintergrund-Kreis */}
              <circle cx="25" cy="25" r="24" fill="#991B1B" stroke="#000" strokeWidth="2"/>
              {/* Sonne/Event Symbol */}
              <circle cx="25" cy="25" r="12" fill="#FEF2F2" opacity="0.9"/>
              {/* Strahlen */}
              <path d="M25 5 L25 8 M25 42 L25 45 M5 25 L8 25 M42 25 L45 25" stroke="#991B1B" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12.5 12.5 L14.5 14.5 M35.5 35.5 L37.5 37.5 M37.5 12.5 L35.5 14.5 M12.5 37.5 L14.5 35.5" stroke="#991B1B" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </Link>
      </div>
    </header>
  )
}
