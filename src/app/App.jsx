import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {LangProvider} from '../store/context/LangContext'

const inter = Inter({ subsets: ['latin'] })

const App = ({content}) => {
  return (
    <LangProvider>
        <Navbar/>
        <section>{content}</section>
        <Footer/>
    </LangProvider>
  )
}

export default App