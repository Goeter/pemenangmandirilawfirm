export const lawFirmConfig = {
  name: 'Pemenang Mandiri Law Firm & Partners',
  shortName: 'Pemenang Mandiri',
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_LAW_FIRM ?? '6289638714065').replace(/\D/g, ''),
  pemenangKonsultanUrl: process.env.NEXT_PUBLIC_PEMENANG_KONSULTAN_URL || 'https://pemenangkonsultan.vercel.app',
} as const

export const lawFirmWhatsappHref = `https://wa.me/${lawFirmConfig.whatsappNumber}?text=${encodeURIComponent(
  'Hello Pemenang Mandiri Law Firm & Partners, I would like to discuss legal services.',
)}`

export const heroSlides = [
  {
    title: 'Pendampingan Hukum yang Tepat dan Strategis',
    description:
      'Pemenang Mandiri Law Firm & Partners siap mendampingi kebutuhan hukum perdata, pidana, dan sengketa yang memerlukan pendekatan profesional serta terukur.',
    image: '/Foto Banner Law Firm Mandiri Pemenang 1.png',
  },
  {
    title: 'Solusi Hukum Profesional untuk Perdata dan Pidana',
    description:
      'Kami membantu penanganan perkara, telaah dokumen, konsultasi hukum, dan langkah strategis lanjutan untuk individu maupun bisnis.',
    image: '/Foto Banner Law Firm Mandiri Pemenang 1.png',
  },
] as const
