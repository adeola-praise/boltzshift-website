import Footer from './layout/footer'
import Navbar from './layout/navbar'
import About from './sections/about-us'
import Branding from './sections/branding'
import ContactUs from './sections/contact-us'
import CTA from './sections/CTA'
import Hero from './sections/hero'
import Plans from './sections/plans'
import Portfolio from './sections/portfolio'
import Processes from './sections/processes'
import Services from './sections/services'
import Testimonials from './sections/testimonials'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Processes />
      <Plans />
      <ContactUs/>
      <Testimonials />
      <CTA />
      <Branding />
      <Footer />
    </>
  )
}

export default App
