import {
  ArrowRight,
  BriefcaseBusiness,
  CircleCheck,
  Landmark,
  MessageCircle,
} from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { lawFirmWhatsappHref } from '@/components/site-data'

const practiceAreas = [
  {
    title: 'Criminal Law (Pidana)',
    description:
      'Legal representation and strategic guidance for investigation, prosecution, and court proceedings with a calm and professional approach.',
    points: [
      'Criminal defense',
      'Legal consultation',
      'Case assessment',
      'Court representation',
    ],
    icon: Landmark,
  },
  {
    title: 'Civil Law (Perdata)',
    description:
      'Support for disputes, contract matters, debt collection, and broader civil issues with practical and effective legal direction.',
    points: [
      'Contract disputes',
      'Debt and collection matters',
      'Property disputes',
      'Civil litigation support',
    ],
    icon: BriefcaseBusiness,
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navigation />

      {/* HERO */}
      <section
        id="home"
        className="px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-10"
      >
        <div className="hero-panel mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2rem] border border-white/8 px-6 py-10 shadow-2xl shadow-black/30 sm:px-8 lg:px-10 lg:py-14">
          <div className="max-w-3xl">
            <p className="section-kicker">Trusted Legal Services</p>

            <h1 className="mt-5 text-balance text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional legal support with a calm, modern, and reliable
              approach.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-[15px] sm:leading-8">
              Pemenang Mandiri Law Firm & Partners assists individuals and
              businesses in criminal and civil matters, while also serving as a
              legal partner for resolving insurance claim-related issues.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#practice-areas"
                className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2C45C]"
              >
                View Practice Areas
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section
        id="practice-areas"
        className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="section-kicker justify-center">Practice Areas</p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Focused legal services for key matters.
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/64 sm:text-[15px]">
              Our one-page profile keeps the experience simple while clearly
              presenting the main legal areas handled by the firm.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {practiceAreas.map((area) => {
              const Icon = area.icon

              return (
                <article
                  key={area.title}
                  className="gold-card rounded-[1.75rem] p-6 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/16 text-[#D4AF37]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-white">
                        {area.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/66">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {area.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/26 px-4 py-3 text-sm text-white/74"
                      >
                        <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about-us"
        className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="gold-card rounded-[1.75rem] p-6 sm:p-7">
            <p className="section-kicker">About Us</p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              A legal partner for insurance claim-related issues.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/68 sm:text-[15px]">
              Pemenang Mandiri Law Firm & Partners is prepared to support
              clients with practical legal insight, careful case review, and
              coordinated follow-up. We understand that claim disputes can
              involve both legal interpretation and business sensitivity.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/68 sm:text-[15px]">
              Because of that, the firm can serve as a partner to help resolve
              legal issues linked to insurance claims—whether through
              consultation, document review, negotiation support, or further
              legal action when required.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20"
      >
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.01)_100%)] px-6 py-10 text-center shadow-2xl shadow-black/20 sm:px-8 sm:py-12">
          <p className="section-kicker justify-center">Contact</p>

          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            Let’s discuss your legal needs.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/66 sm:text-[15px]">
            Reach out for an initial discussion regarding criminal law, civil
            law, or legal issues related to insurance claims.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={lawFirmWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-[#08110d] shadow-lg shadow-[#25D366]/18 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3CE076]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* STICKY WHATSAPP */}
      <a
        href="https://wa.me/6289638714065"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <Footer />
    </main>
  )
}