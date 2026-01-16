import Link from 'next/link'

export default function Kontakt() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-block text-red-800 hover:text-red-900 transition-colors mb-6"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-black">Kontakt</span>
            </h1>
            <div className="w-24 h-1 bg-red-800 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Wir freuen uns auf <span className="text-red-800">Ihre Nachricht</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Haben Sie Fragen zum Summerträff Vaduz 2026? Möchten Sie sich mit einer Idee oder 
              einem Angebot beteiligen? Wir sind gerne für Sie da und freuen uns über Ihre Kontaktaufnahme.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-lg border border-red-200 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-black">
                <span className="text-red-800">Standortmarketing Vaduz e.V.</span>
              </h3>
              <p className="text-lg text-gray-700">
                Verein Standortmarketing Vaduz
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-red-200">
              <h3 className="text-xl font-bold text-black">FL-Handelsregister-Nr.</h3>
              <p className="text-lg text-gray-700">FL-0002.518.088-6</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black">MwSt.-Nr</h3>
              <p className="text-lg text-gray-700">59634</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              <span className="text-red-800">Bewerbung</span> für den Summerträff 2026
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sie möchten sich mit einem Konzert, einer Sportstunde, einem kulturellen Angebot oder 
              einer anderen Aktivität am Summerträff 2026 beteiligen? Nutzen Sie unser 
              Bewerbungsformular, um sich zu bewerben.
            </p>
            <div className="pt-4">
              <a 
                href="https://summertraeff.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-red-800 hover:bg-red-900 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
              >
                Jetzt bewerben
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Allgemeine <span className="text-red-800">Anfragen</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Für allgemeine Fragen zum Summerträff Vaduz, zur Infrastruktur oder zu anderen 
              Anliegen stehen wir Ihnen gerne zur Verfügung. Bitte nutzen Sie die Kontaktmöglichkeiten 
              über die offiziellen Kanäle von Standortmarketing Vaduz e.V.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-lg border border-red-200">
            <h3 className="text-xl font-bold text-black mb-4">
              <span className="text-red-800">Hinweis</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bitte beachten Sie, dass wir für Bewerbungen und offizielle Anfragen das 
              Bewerbungsformular bzw. die offiziellen Kontaktkanäle verwenden. Vielen Dank 
              für Ihr Verständnis.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-red-200 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            © 2026 Summerträff Vaduz. Alle Rechte vorbehalten.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/impressum" className="text-gray-600 hover:text-red-800 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-gray-600 hover:text-red-800 transition-colors">Datenschutz</Link>
            <Link href="/kontakt" className="text-gray-600 hover:text-red-800 transition-colors">Kontakt</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
