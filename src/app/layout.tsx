import Container from '@components/organisms/Container'
import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import '../assets/styles/global.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: false,
})

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  userScalable: true,
}

export const metadata: Metadata = {
  title: {
    default: 'Bootcamp',
    template: 'Bootcamp | %s',
  },
  description: 'Created Last Night',
  // manifest: '/manifest.json',
}

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className='h-full bg-white'>
      <body className={`${dmSans.className} h-full`}>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
