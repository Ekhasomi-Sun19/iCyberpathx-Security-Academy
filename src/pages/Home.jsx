import { useState } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import CodeEditor from '../components/CodeEditor'
import CoreValues from '../components/CoreValues'
import Footer from '../components/Footer'
import '../styles/Home.css'

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="nodejs-home">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <HeroSection />
      <CodeEditor />
      <CoreValues />
      <Footer />
    </div>
  )
}

export default Home

