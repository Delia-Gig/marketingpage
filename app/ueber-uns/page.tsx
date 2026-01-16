import Link from 'next/link'

export default function UeberUns() {
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
              <span className="text-black">Über</span>{' '}
              <span className="text-red-800">uns</span>
            </h1>
            <div className="w-24 h-1 bg-red-800 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Unser <span className="text-red-800">Engagement</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Der Summerträff Vaduz ist ein Gemeinschaftsprojekt, das von engagierten 
              Menschen aus Vaduz und der Region ins Leben gerufen wurde. Unser Ziel ist es, 
              einen lebendigen und vielfältigen Sommer auf dem Rathausplatz zu gestalten, 
              der Menschen aller Altersgruppen zusammenbringt.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Unsere <span className="text-red-800">Vision</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wir glauben an die Kraft der Gemeinschaft und daran, dass öffentliche Räume 
              Orte der Begegnung, des Austauschs und der Freude sein sollten. Der Summerträff 
              soll ein Ort sein, an dem Kultur, Musik, Sport und Geselligkeit auf natürliche 
              Weise zusammenkommen.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Gemeinsam <span className="text-red-800">gestalten</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Der Summerträff lebt von der Beteiligung regionaler Vereine, Institutionen 
              und engagierter Einzelpersonen. Wir laden alle ein, sich mit eigenen Ideen 
              und Angeboten einzubringen und den Summerträff 2026 aktiv mitzugestalten.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-lg border border-red-200">
            <h3 className="text-2xl font-bold text-black mb-4">
              Interesse an einer <span className="text-red-800">Mitarbeit</span>?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wenn Sie oder Ihr Verein Interesse haben, den Summerträff 2026 mitzugestalten, 
              freuen wir uns über Ihre Bewerbung.
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
      <footer className="py-12 px-4 bg-white border-t border-red-200 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            © 2026 Summerträff Vaduz. Alle Rechte vorbehalten.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-red-800 transition-colors">Impressum</Link>
            <Link href="#" className="text-gray-600 hover:text-red-800 transition-colors">Datenschutz</Link>
            <Link href="#" className="text-gray-600 hover:text-red-800 transition-colors">Kontakt</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
