import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Baijamjuree} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto'})
const baijamjuree = Baijamjuree({ subsets: ['latin'], weight: '700', variable: '--bai-jamjuree' })

export const metadata = {
  title: 'NLW SpaceTime',
  description: 'Uma cápsula do tempo construida com Raect, Next.js, Tailwind, TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
