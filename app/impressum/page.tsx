import Link from 'next/link'

export default function Impressum() {
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
              <span className="text-black">Impressum</span>
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
              Disclaimer <span className="text-red-800">(Beschränkung der Verantwortlichkeit)</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dies ist die Website von Standortmarketing Vaduz e.V. (nachfolgend SMV genannt). 
              Die nachstehenden Ausführungen gelten für alle Seiten und Unterseiten dieser Website. 
              Personen, welche auf diese Webseiten zugreifen und Informationen abrufen, erklären 
              sich mit den nachfolgenden Bestimmungen einverstanden:
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              <span className="text-red-800">Benutzung</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              SMV unternimmt alle Anstrengungen, um einen sicheren Betrieb der Website sicherzustellen. 
              Dennoch können Mängel wie z.B. Datenverlust oder -verfälschung, Virenbefall, Betriebsunterbruch 
              etc. nicht ausgeschlossen werden. Der Zugriff auf die Webseiten erfolgt deshalb auf eigene 
              Gefahr und in eigener Verantwortung.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              <span className="text-red-800">Haftungsausschluss</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              SMV lehnt jegliche Haftung für Schäden oder Folgeschäden ab, die sich aus dem Zugriff auf 
              ihre Website beziehungsweise auf einzelne Teile davon (wie z.B. heruntergeladene Dokumente), 
              deren Benutzung (bzw. aus der Unmöglichkeit des Zugriffs oder der Benutzung) oder Links auf 
              andere Websites ergeben.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              <span className="text-red-800">Gewährleistungsausschluss</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              SMV übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität 
              der bereitgestellten Informationen. Haftungsansprüche gegen den Websitebetreiber, die sich auf 
              Schäden materieller oder ideeller Art beziehen, welche durch die Nutzung der dargebotenen 
              Informationen verursacht wurden, sind grundsätzlich ausgeschlossen. SMV behält es sich ausdrücklich 
              vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu 
              ergänzen oder zu löschen.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Verknüpfte <span className="text-red-800">Websites (Links)</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Die Webseiten enthalten zum Teil Links zu Websites von Dritten. SMV übernimmt für deren Inhalt, 
              den darauf angebotenen Produkten, Dienstleistungen oder sonstigen Angeboten sowie für die Einhaltung 
              von Datenschutzbestimmungen keine Verantwortung. Das Aktivieren eines Links erfolgt auf eigene 
              Verantwortung.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-lg border border-red-200 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Vertretungsberechtigte <span className="text-red-800">Person</span>
              </h2>
              <p className="text-lg text-gray-700">
                Verein Standortmarketing Vaduz
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black">FL-Handelsregister-Nr.</h3>
              <p className="text-lg text-gray-700">FL-0002.518.088-6</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black">MwSt.-Nr</h3>
              <p className="text-lg text-gray-700">59634</p>
            </div>

            <div className="space-y-2 pt-4 border-t border-red-200">
              <h3 className="text-xl font-bold text-black">Inhalt</h3>
              <p className="text-lg text-gray-700">© Copyright ERLEBE VADUZ</p>
            </div>
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
