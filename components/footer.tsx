import Image from 'next/image'
import { lawFirmConfig, lawFirmNavigation } from './site-data'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo-pml-transparent.png" alt="PML logo" width={56} height={56} className="h-14 w-auto" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-white">Pemenang Mandiri</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">Law Firm & Partners</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/62">
            Practical and professional legal support for criminal, civil, and insurance claim-related matters.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#D4AF37]">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/68">
            {lawFirmNavigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-white">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#D4AF37]">Connected Website</h3>
          <a href={lawFirmConfig.pemenangKonsultanUrl} className="mt-4 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/78 transition-colors hover:border-[#D4AF37]/40 hover:text-white">
            Pemenang Konsultan
          </a>
        </div>
      </div>
      <div className="border-t border-white/8 px-4 py-5 text-center text-xs text-white/42">
        © 2026 Pemenang Mandiri Law Firm & Partners. All rights reserved.
      </div>
    </footer>
  )
}
