'use client'

import Image from 'next/image'
import { useLanguage } from './language-context'
import { lawFirmConfig } from './site-data'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/8 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10 text-center">
        <Image src="/logo-pml-transparent.png" alt="Pemenang Mandiri Law Firm & Partners" width={72} height={72} className="mx-auto h-18 w-auto drop-shadow-[0_0_16px_rgba(212,175,55,0.6)]" />
        <p className="mt-4 text-lg font-black text-white">Pemenang Mandiri</p>
        <p className="font-bold text-[#D4AF37]">{t.navSubtitle}</p>
        <div className="mt-5">
          <a
            href={lawFirmConfig.pemenangKonsultanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-[#D4AF37]/30 px-4 py-2 text-sm font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/10"
          >
            Pemenang Konsultan
          </a>
        </div>
      </div>
      <div className="border-t border-white/8 px-4 py-5 text-center text-xs text-white/42">
        {t.footerCopyright}
      </div>
    </footer>
  )
}
