import { ArrowRight, BadgeCheck, BriefcaseBusiness, CircleCheck, Handshake, Landmark, MessageCircle, Scale, ShieldCheck } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { lawFirmWhatsappHref } from '@/components/site-data'

const practiceAreas = [
  {
    title: 'Criminal Law (Pidana)',
    description:
      'Legal representation and strategic guidance for investigation, prosecution, and court proceedings with a calm and professional approach.',
    points: ['Criminal defense', 'Legal consultation', 'Case assessment', 'Court representation'],
    icon: Landmark,
  },
  {
    title: 'Civil Law (Perdata)',
    description:
      'Support for disputes, contract matters, debt collection, and broader civil issues with practical and effective legal direction.',
    points: ['Contract disputes', 'Debt and collection matters', 'Property disputes', 'Civil litigation support'],
    icon: BriefcaseBusiness,
  },
]

const values = [
  { title: 'Professional Integrity', icon: ShieldCheck },
  { title: 'Client-Focused Approach', icon: Handshake },
  { title: 'Practical Legal Solutions', icon: Scale },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navigation />

      <section id="home" className="px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-10">
        <div className="hero-panel mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2rem] border border-white/8 px-6 py-10 shadow-2xl shadow-black/30 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-14">
          <div className="max-w-3xl self-center">
            <p className="section-kicker">Trusted Legal Services</p>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional legal support with a calm, modern, and reliable approach.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-[15px] sm:leading-8">
              Pemenang Mandiri Law Firm & Partners assists individuals and businesses in criminal and civil matters, while also serving as a legal partner for resolving insurance claim-related issues.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#practice-areas" className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2C45C]">
                View Practice Areas
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                Contact Us
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="gold-outline rounded-2xl bg-white/[0.02] p-4">
                    <Icon className="h-5 w-5 text-[#D4AF37]" />
                    <p className="mt-3 text-sm font-bold text-white/88">{value.title}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid gap-4 self-center">
            <div className="overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/20 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_50%,#111827_100%)] p-8">
              <div className="h-64 rounded-[1.25rem] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_35%),linear-gradient(135deg,#1e293b_0%,#334155_50%,#111827_100%)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[#D4AF37] text-sm font-black tracking-[0.3em] uppercase">Modern Legal Practice</div>
                  <div className="mt-3 text-2xl font-black text-white">Professional Legal Representation</div>
                  <div className="mt-2 text-white/70 text-sm">Premium law firm experience with modern legal solutions</div>
                </div>
              </div>
            </div>
            <div className="gold-card rounded-[1.75rem] p-6 lg:ml-auto lg:max-w-[32rem]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/16 text-[#D4AF37]">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#D4AF37]">Focused Support</p>
                  <p className="mt-1 text-lg font-black text-white">Legal services tailored to practical needs</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-black/30 p-4">
                  <p className="text-sm font-black text-white">Criminal Law</p>
                  <p className="mt-2 text-sm leading-6 text-white/64">Careful guidance and representation through legal proceedings.</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-black/30 p-4">
                  <p className="text-sm font-black text-white">Civil Law</p>
                  <p className="mt-2 text-sm leading-6 text-white/64">Practical advice and legal action for disputes and obligations.</p>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-[#D4AF37]/16 bg-[#D4AF37]/7 p-4 text-sm leading-7 text-white/74">
                <span className="font-bold text-[#F2DA7B]">Insurance claim-related matters:</span> we can act as a legal partner to support dispute resolution, review documents, and help clients move forward more confidently.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="practice-areas" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="section-kicker justify-center">Practice Areas</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Focused legal services for key matters.</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/64 sm:text-[15px]">Our one-page profile keeps the experience simple while clearly presenting the main legal areas handled by the firm.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {practiceAreas.map((area) => {
              const Icon = area.icon
              return (
                <article key={area.title} className="gold-card rounded-[1.75rem] p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/16 text-[#D4AF37]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">{area.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/66">{area.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {area.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/26 px-4 py-3 text-sm text-white/74">
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

      <section id="about-us" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="gold-card rounded-[1.75rem] p-6 sm:p-7">
            <p className="section-kicker">About Us</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">A legal partner for insurance claim-related issues.</h2>
            <p className="mt-5 text-sm leading-7 text-white/68 sm:text-[15px]">
              Pemenang Mandiri Law Firm & Partners is prepared to support clients with practical legal insight, careful case review, and coordinated follow-up. We understand that claim disputes can involve both legal interpretation and business sensitivity.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/68 sm:text-[15px]">
              Because of that, the firm can serve as a partner to help resolve legal issues linked to insurance claims—whether through consultation, document review, negotiation support, or further legal action when required.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Integrity', desc: 'Professional handling with ethical standards.', icon: BadgeCheck },
              { title: 'Responsive', desc: 'Straightforward communication and client support.', icon: Handshake },
              { title: 'Effective', desc: 'Practical solutions matched to the issue at hand.', icon: ShieldCheck },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="gold-card rounded-[1.75rem] p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/16 text-[#D4AF37]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/64">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.01)_100%)] px-6 py-10 text-center shadow-2xl shadow-black/20 sm:px-8 sm:py-12">
          <p className="section-kicker justify-center">Contact</p>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">Let’s discuss your legal needs.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/66 sm:text-[15px]">
            Reach out for an initial discussion regarding criminal law, civil law, or legal issues related to insurance claims.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={lawFirmWhatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-[#08110d] shadow-lg shadow-[#25D366]/18 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3CE076]">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
