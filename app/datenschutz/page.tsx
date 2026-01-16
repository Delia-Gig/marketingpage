import Link from 'next/link'
import Footer from '../components/Footer'

export default function Datenschutz() {
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
              <span className="text-black">Datenschutz</span>
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
              <span className="text-red-800">Datenschutzerklärung</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie 
              über die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten bei der 
              Nutzung unserer Website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Verantwortliche <span className="text-red-800">Stelle</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-6 rounded-lg border border-red-200">
              <p className="text-lg text-gray-700 font-semibold mb-2">Standortmarketing Vaduz e.V.</p>
              <p className="text-lg text-gray-700">FL-Handelsregister-Nr.: FL-0002.518.088-6</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Erhebung und <span className="text-red-800">Speicherung</span> personenbezogener Daten
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beim Besuch unserer Website werden automatisch Informationen an den Server unserer 
              Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile 
              gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur 
              automatisierten Löschung gespeichert:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Zweck der <span className="text-red-800">Datenverarbeitung</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
              <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
              <li>Auswertung der Systemsicherheit und -stabilität</li>
              <li>zu weiteren administrativen Zwecken</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Ihre <span className="text-red-800">Rechte</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sie haben das Recht:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              <span className="text-red-800">Kontakt</span> bei Fragen
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden. Nutzen Sie 
              hierfür bitte die Kontaktmöglichkeiten auf unserer Kontaktseite.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-lg border border-red-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Stand:</strong> Diese Datenschutzerklärung wurde zuletzt aktualisiert im Januar 2026.
            </p>
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
