import Link from 'next/link'
import Footer from '../components/Footer'

export default function EventHighlights() {
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
              <span className="text-black">Event-</span>
              <span className="text-red-800">Highlights</span>
            </h1>
            <div className="w-24 h-1 bg-red-800 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Unsere <span className="text-red-800">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-red-800 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Kinderfest */}
            <div className="bg-white rounded-lg border border-red-200 hover:border-red-800/50 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-red-800 to-red-900 p-6 text-white">
                <div className="text-4xl mb-3">🎈</div>
                <h3 className="text-2xl font-bold mb-2">Kinderfest</h3>
                <p className="text-red-100 font-semibold">13. Juni 2026</p>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ein Tag ganz für die Kleinen – und für alle, die gerne wieder kurz Kind wären. 
                  Freut euch auf ein buntes Programm mit Spiel, Bewegung und Mitmachaktionen auf 
                  dem Rathausplatz. Familienzeit, die man nicht planen muss – nur vorbeikommen.
                </p>
              </div>
            </div>

            {/* WM-Finale */}
            <div className="bg-white rounded-lg border border-red-200 hover:border-red-800/50 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-red-800 to-red-900 p-6 text-white">
                <div className="text-4xl mb-3">⚽</div>
                <h3 className="text-2xl font-bold mb-2">WM-Finale</h3>
                <p className="text-red-100 font-semibold">19. Juli 2026</p>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Gänsehaut-Moment garantiert: Wir zeigen das WM-Finale live in gemeinsamer Atmosphäre. 
                  Ob Fan-Kurve oder Genuss-Zuschauerin – hier fiebern wir zusammen mit. Snacks, Stimmung 
                  und Sommerabend inklusive.
                </p>
              </div>
            </div>

            {/* Secondhand-Markt */}
            <div className="bg-white rounded-lg border border-red-200 hover:border-red-800/50 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-red-800 to-red-900 p-6 text-white">
                <div className="text-4xl mb-3">🛍️</div>
                <h3 className="text-2xl font-bold mb-2">Secondhand-Markt</h3>
                <p className="text-red-100 font-semibold">27. Juli 2026</p>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Stöbern, entdecken, Lieblingsstücke finden: Beim Secondhand-Markt wird der Rathausplatz 
                  zur Schatzkiste. Kleidung, Accessoires und Kleinkram mit Geschichte – nachhaltig, 
                  unkompliziert und mit dem gewissen „Oh wow, das nehme ich!"-Moment.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-lg border border-red-200 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Mehr <span className="text-red-800">Events</span> folgen
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Das sind nur einige Highlights des Summerträff 2026. Weitere spannende Events 
              werden nach Ablauf der Bewerbungsfrist bekannt gegeben.
            </p>
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
      </section>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  )
}
