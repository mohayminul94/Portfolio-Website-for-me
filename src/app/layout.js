import { Analytics } from '@vercel/analytics/next'
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const description =
  'Rayhan is a Computer Science and Engineering student and aspiring Frontend Developer building responsive, accessible web experiences with React, Next.js, and Tailwind CSS.'

export const metadata = {
  title: 'Rayhan | Frontend Developer',
  description,
  authors: [{ name: 'Md. Mohayminul Islam Rayhan' }],
  openGraph: {
    title: 'Rayhan | Frontend Developer',
    description,
    type: 'website',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport = {
  themeColor: '#FFF8FC',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${jakarta.variable}`}>
      <body className="bg-canvas font-sans text-ink antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
