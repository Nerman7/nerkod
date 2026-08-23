import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Portfolio />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
