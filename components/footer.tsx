import Image from 'next/image'
import { lawFirmConfig } from './site-data'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <Image src="/logo-pml-transparent.png" alt="PML logo" width={56} height={56} className="h-14 w-auto" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white">Pemenang Mandiri</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">Law Firm & Partners</p>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-white/62">
          Professional legal services with a modern and client-focused approach.
        </p>
        <div className="mt-5 text-center">
          <a href={lawFirmConfig.pemenangKonsultanUrl} className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/78">
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
