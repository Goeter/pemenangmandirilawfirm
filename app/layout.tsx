import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pemenang Mandiri Law Firm & Partners',
  description:
    'Professional legal services for criminal, civil, and insurance claim-related matters.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
