'use client'

import { useEffect, useState } from 'react'
import { BriefcaseBusiness, CircleCheck, Landmark, MessageCircle } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { heroSlides, lawFirmWhatsappHref } from '@/components/site-data'

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

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 180000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navigation />
      <section id="home" className="relative min-h-[78vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div key={slide.title} className={`absolute inset-0 hero-slide ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.58) 45%, rgba(0,0,0,.55) 100%), url('${slide.image}')` }} />
        ))}
        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Pemenang Mandiri Law Firm</p>
            <h1 className="mt-5 text-balance text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{heroSlides[activeSlide].title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-[15px] sm:leading-8">{heroSlides[activeSlide].description}</p>
            <div className="mt-8 flex gap-2">
              {heroSlides.map((slide, index) => <button key={slide.title} aria-label={`Slide ${index + 1}`} onClick={() => setActiveSlide(index)} className={`h-2.5 rounded-full transition-all ${index === activeSlide ? 'w-10 bg-[#D4AF37]' : 'w-2.5 bg-white/40'}`} />)}
            </div>
          </div>
        </div>
      </section>

      <section id="practice-areas" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center"><p className="section-kicker justify-center">Practice Areas</p><h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Focused legal services for key matters.</h2></div>
          <div className="grid gap-5 lg:grid-cols-2">{practiceAreas.map((area) => { const Icon = area.icon; return <article key={area.title} className="gold-card rounded-[1.75rem] p-6 sm:p-7"><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/16 text-[#D4AF37]"><Icon className="h-6 w-6" /></div><div><h3 className="text-2xl font-black text-white">{area.title}</h3><p className="mt-3 text-sm leading-7 text-white/66">{area.description}</p></div></div><div className="mt-6 grid gap-3 sm:grid-cols-2">{area.points.map((point) => <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/26 px-4 py-3 text-sm text-white/74"><CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" /><span>{point}</span></div>)}</div></article>})}</div>
        </div>
      </section>

      <section id="about-us" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16"><div className="mx-auto max-w-7xl"><div className="gold-card rounded-[1.75rem] p-6 sm:p-7"><p className="section-kicker">About Us</p><h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">A legal partner for insurance claim-related issues.</h2><p className="mt-5 text-sm leading-7 text-white/68 sm:text-[15px]">Pemenang Mandiri Law Firm & Partners is prepared to support clients with practical legal insight, careful case review, and coordinated follow-up.</p></div></div></section>

      <section id="contact" className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20"><div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.01)_100%)] px-6 py-10 text-center shadow-2xl shadow-black/20 sm:px-8 sm:py-12"><p className="section-kicker justify-center">Contact</p><h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">Let’s discuss your legal needs.</h2><div className="mt-8 flex justify-center"><a href={lawFirmWhatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-[#08110d]"><MessageCircle className="h-4 w-4" />Chat on WhatsApp</a></div></div></section>
      <Footer />
    </main>
  )
}
