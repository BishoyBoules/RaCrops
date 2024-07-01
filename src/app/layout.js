import Head from 'next/head'
import './globals.css'
import App from './App'


export const metadata = {
  title: 'Racrops',
  description: 'Powered by Bishoy Boules',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
          <body>
            <App content={children}/>
          </body>
    </html>
  )
}
