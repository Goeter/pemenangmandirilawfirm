import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pemenang Mandiri Law Firm & Partners',
  description: 'Professional legal services for criminal and civil matters.',
  keywords:['law firm','firma hukum','pengacara','civil law','criminal law','insurance claim lawyer'],
  robots:{index:true,follow:true},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
