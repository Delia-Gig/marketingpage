import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-white border-t border-red-200">
      <div className="max-w-6xl mx-auto">
        {/* NAP-Daten */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-red-200">
          <div>
            <h3 className="text-lg font-bold text-black mb-4">
              <span className="text-red-800">Standortmarketing Vaduz e.V.</span>
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="mr-3 text-red-800 text-lg">📍</span>
                <div>
                  <p className="font-medium text-gray-900">Adresse</p>
                  <p>Adresse folgt</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-3 text-red-800 text-lg">📞</span>
                <div>
                  <p className="font-medium text-gray-900">Telefon</p>
                  <a href="tel:" className="hover:text-red-800 transition-colors">Telefon folgt</a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-3 text-red-800 text-lg">✉️</span>
                <div>
                  <p className="font-medium text-gray-900">E-Mail</p>
                  <a href="mailto:kontakt@summertraeff-vaduz.li" className="hover:text-red-800 transition-colors">
                    E-Mail folgt
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Rechtliches</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/impressum" className="text-gray-600 hover:text-red-800 transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="text-gray-600 hover:text-red-800 transition-colors">Datenschutz</Link>
              <Link href="/kontakt" className="text-gray-600 hover:text-red-800 transition-colors">Kontakt</Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            © 2026 Summerträff Vaduz. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
