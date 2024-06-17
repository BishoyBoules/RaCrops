import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Racrops',
  description: 'Powered by Bishoy Boules',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        {/* <Navbar/> */}
        <body className={inter.className}>{children}</body>
        {/* <Footer/> */}
    </html>
  )
}
