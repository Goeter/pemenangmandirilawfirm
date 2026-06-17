export const lawFirmConfig = {
  name: 'Pemenang Mandiri Law Firm & Partners',
  shortName: 'Pemenang Mandiri',
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_LAW_FIRM ?? '6289638714065').replace(/\D/g, ''),
  pemenangKonsultanUrl: process.env.NEXT_PUBLIC_PEMENANG_KONSULTAN_URL || 'https://pemenangkonsultan.vercel.app',
} as const

export const lawFirmWhatsappHref = `https://wa.me/${lawFirmConfig.whatsappNumber}?text=${encodeURIComponent(
  'Hello Pemenang Mandiri Law Firm & Partners, I would like to discuss legal services.',
)}`

export const lawFirmNavigation = [] as const
