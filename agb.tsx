import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function AGBPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Synevo
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/dienstleistungen" className="text-gray-600 hover:text-primary">Dienstleistungen</Link>
            <Link href="/uber-uns" className="text-gray-600 hover:text-primary">Über uns</Link>
            <Link href="/kontakt" className="text-gray-600 hover:text-primary">Kontakt</Link>
            <Link href="/agb" className="text-primary font-semibold">AGB</Link>
            <Link href="/datenschutz" className="text-gray-600 hover:text-primary">Datenschutz</Link>
          </nav>
          <Button className="md:hidden">Menü</Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-xl">Unsere Vertragsbedingungen für eine faire Zusammenarbeit</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="prose max-w-none">
              <h2>1. Geltungsbereich</h2>
              <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Synevo und ihren Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, Synevo stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>

              <h2>2. Vertragsschluss</h2>
              <p>Der Vertrag kommt durch die Annahme des Kundenauftrags durch Synevo zustande. Die Annahme kann schriftlich, per E-Mail oder durch Beginn der Leistungserbringung erfolgen.</p>

              <h2>3. Leistungsumfang</h2>
              <p>Der Umfang der von Synevo zu erbringenden Leistungen ergibt sich aus der Leistungsbeschreibung des jeweiligen Angebots oder der Auftragsbestätigung. Änderungen oder Erweiterungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung.</p>

              <h2>4. Mitwirkungspflichten des Kunden</h2>
              <p>Der Kunde ist verpflichtet, Synevo bei der Erbringung der vereinbarten Leistungen in angemessenem Umfang zu unterstützen. Dazu gehört insbesondere die rechtzeitige Zurverfügungstellung aller notwendigen Informationen und Unterlagen.</p>

              <h2>5. Vergütung und Zahlungsbedingungen</h2>
              <p>Die Vergütung für die Leistungen von Synevo ergibt sich aus dem jeweiligen Angebot oder der Auftragsbestätigung. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.</p>

              <h2>6. Gewährleistung und Haftung</h2>
              <p>Synevo erbringt die vereinbarten Leistungen mit der erforderlichen Sorgfalt und nach bestem Wissen und Gewissen. Eine Gewährleistung für den Eintritt bestimmter wirtschaftlicher oder sonstiger Erfolge wird nicht übernommen. Die Haftung von Synevo ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.</p>

              <h2>7. Vertraulichkeit und Datenschutz</h2>
              <p>Synevo verpflichtet sich, alle im Rahmen der Zusammenarbeit erlangten Kenntnisse und Informationen vertraulich zu behandeln. Die Verarbeitung personenbezogener Daten erfolgt in Übereinstimmung mit den geltenden datenschutzrechtlichen Bestimmungen.</p>

              <h2>8. Schlussbestimmungen</h2>
              <p>Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Sollten einzelne Bestimmungen unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz von Synevo.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Über Synevo</h3>
              <p>Ihr vertrauenswürdiger Partner für Marketing und Management Lösungen.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Schnelllinks</h3>
              <ul className="space-y-2">
                <li><Link href="/dienstleistungen" className="hover:underline">Dienstleistungen</Link></li>
                <li><Link href="/uber-uns" className="hover:underline">Über uns</Link></li>
                <li><Link href="/kontakt" className="hover:underline">Kontakt</Link></li>
                <li><Link href="/agb" className="hover:underline">AGB</Link></li>
                <li><Link href="/datenschutz" className="hover:underline">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:underline">Impressum</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Folgen Sie uns</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-primary">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4