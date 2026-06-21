'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { lawFirmConfig } from './site-data'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image src="/logo_pemenang.jpeg" alt="Pemenang logo" width={52} height={52} className="h-12 w-12 rounded-full object-cover" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white sm:text-base">Pemenang Mandiri</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Law Firm & Partners</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <Link href="#home" className="text-sm font-semibold text-white transition hover:text-[#D4AF37]">Home</Link>
          <a href={lawFirmConfig.pemenangKonsultanUrl} className="text-sm font-semibold text-white transition hover:text-[#D4AF37]">Pemenang Konsultan</a>
        </div>

        <button type="button" aria-label="Toggle navigation" className="rounded-full border border-white/10 p-2 text-white lg:hidden" onClick={() => setIsOpen((current) => !current)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-white/8 lg:hidden ${isOpen ? 'max-h-40' : 'max-h-0'} transition-all duration-300`}>
        <div className="space-y-1 px-4 py-3 sm:px-6">
          <Link href="#home" className="block rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/5" onClick={() => setIsOpen(false)}>Home</Link>
          <a href={lawFirmConfig.pemenangKonsultanUrl} className="block rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/5" onClick={() => setIsOpen(false)}>Pemenang Konsultan</a>
        </div>
      </div>
    </nav>
  )
}
