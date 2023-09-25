import { Providers } from './Providers'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Wavestify',
  description: 'A web that allows you to get the stats of your music on Spotify',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark text-foreground bg-chinese-black ${dmSans.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
