import Link from 'next/link'
import Image from 'next/image'

export default function Galerie() {
  // Beispiel-Bilder - ersetze diese durch deine eigenen Bildpfade
  // Die Bilder sollten im public/galerie/ Verzeichnis liegen
  const bilder = [
    // Beispiel: { src: '/galerie/bild1.jpg', alt: 'Beschreibung Bild 1' },
    // Füge hier deine Bilder hinzu
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-red-50/60 to-red-100/40">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-red-50/50 to-red-100/30 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-900 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-red-800 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-red-700 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
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
              <span className="text-black">Foto</span>
              <span className="text-red-800">galerie</span>
            </h1>
            <div className="w-24 h-1 bg-red-800 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Eindrücke vom Summerträff Vaduz
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-12 px-4 bg-gradient-to-b from-red-100/40 via-red-50/60 to-red-100/50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-20 right-10 w-96 h-96 bg-red-800 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-red-900 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-700 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {bilder.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bilder.map((bild, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden border border-red-200 hover:border-red-800/50 transition-all duration-300 shadow-sm hover:shadow-lg group cursor-pointer"
                >
                  <Image
                    src={bild.src}
                    alt={bild.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      {bild.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📸</div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Galerie wird <span className="text-red-800">bald</span> gefüllt
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Die Fotogalerie wird in Kürze mit Bildern vom Summerträff Vaduz 2026 befüllt.
              </p>
              <div className="mt-8 p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-lg border border-red-200 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-black mb-3">
                  So fügst du <span className="text-red-800">Bilder</span> hinzu:
                </h3>
                <ol className="text-left text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Lege deine Bilder in das <code className="bg-white px-2 py-1 rounded">public/galerie/</code> Verzeichnis</li>
                  <li>Öffne die Datei <code className="bg-white px-2 py-1 rounded">app/galerie/page.tsx</code></li>
                  <li>Füge deine Bilder zum <code className="bg-white px-2 py-1 rounded">bilder</code> Array hinzu:
                    <pre className="bg-white p-3 rounded mt-2 text-sm text-left overflow-x-auto">
{`{ src: '/galerie/dein-bild.jpg', alt: 'Beschreibung' }`}
                    </pre>
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-gradient-to-b from-red-100/30 via-white to-white border-t border-red-200 mt-20">
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
