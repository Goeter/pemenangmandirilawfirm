'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Scale, X } from 'lucide-react'
import { lawFirmConfig, lawFirmNavigation } from './site-data'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/8 bg-black/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image src="/logo-pml-transparent.png" alt="PML logo" width={52} height={52} className="h-12 w-auto object-contain brightness-0 invert drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white sm:text-base">Pemenang Mandiri</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">Law Firm & Partners</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {lawFirmNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/78 transition-all duration-300 hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={lawFirmConfig.pemenangKonsultanUrl}
            className="ml-3 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/10 px-4 py-2 text-sm font-bold text-[#F4D778] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D4AF37]/16"
          >
            <Scale className="h-4 w-4" />
            Pemenang Konsultan
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-full border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-white/8 lg:hidden ${isOpen ? 'max-h-96' : 'max-h-0'} transition-all duration-300`}>
        <div className="space-y-1 px-4 py-3 sm:px-6">
          {lawFirmNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/8 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={lawFirmConfig.pemenangKonsultanUrl}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-3 text-sm font-bold text-[#F4D778]"
            onClick={() => setIsOpen(false)}
          >
            <Scale className="h-4 w-4" />
            Pemenang Konsultan
          </a>
        </div>
      </div>
    </nav>
  )
}
