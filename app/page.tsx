export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-white">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-900 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
              <span className="text-black">Summerträff</span>
              <br />
              <span className="text-red-800">Vaduz</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Ein unvergessliches Sommererlebnis in der wunderschönen Hauptstadt Liechtensteins
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-red-800 hover:bg-red-900 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50">
              Jetzt anmelden
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white font-semibold rounded-lg transition-all duration-300">
              Mehr erfahren
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-800 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-800 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Über den <span className="text-red-800">Summerträff</span>
            </h2>
            <div className="w-24 h-1 bg-red-800 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Der Summerträff Vaduz ist ein einzigartiges Sommerfestival, das die Schönheit 
                Liechtensteins mit einer unvergesslichen Atmosphäre verbindet. Erlebe unvergessliche 
                Momente inmitten der malerischen Alpenlandschaft.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Genieße Live-Musik, kulinarische Köstlichkeiten und die warme Gemeinschaft, die 
                diesen besonderen Anlass auszeichnet. Ein Event, das du nicht verpassen solltest!
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-lg border border-red-200">
              <h3 className="text-2xl font-bold text-black mb-6">Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-800 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Live-Musik und Unterhaltung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Kulinarische Spezialitäten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Atemberaubende Alpenkulisse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Gemeinschaft und Geselligkeit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Event <span className="text-red-800">Details</span>
            </h2>
            <div className="w-24 h-1 bg-red-800 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-red-200 hover:border-red-800/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-black mb-2">Datum</h3>
              <p className="text-gray-600">Sommer 2024</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-red-200 hover:border-red-800/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-black mb-2">Ort</h3>
              <p className="text-gray-600">Vaduz, Liechtenstein</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-red-200 hover:border-red-800/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-xl font-bold text-black mb-2">Programm</h3>
              <p className="text-gray-600">Vielseitig & Spannend</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Sei dabei beim <span className="text-red-800">Summerträff Vaduz</span>
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Verpasse nicht diese einzigartige Gelegenheit, einen unvergesslichen Sommer in Vaduz zu erleben.
          </p>
          <button className="px-10 py-5 bg-red-800 hover:bg-red-900 text-white text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50">
            Jetzt anmelden
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-red-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            © 2024 Summerträff Vaduz. Alle Rechte vorbehalten.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">Impressum</a>
            <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">Datenschutz</a>
            <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
