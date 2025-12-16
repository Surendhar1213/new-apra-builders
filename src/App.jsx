import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import MobileMenu from './Components/MobileMenu/MobileMenu'
import Cursor from './Components/Common/Cursor'
import BodyLines from './Components/Common/BodyLines'
import Preloader from './Components/Preloader/Preloader'
import AboutSidebar from './Components/Header/AboutSidebar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Features from './Components/Features/Features'
import Rooms from './Components/Rooms/Rooms'
import Project from './Components/Project/Project'
import Team from './Components/Team/Team'
// import Video from './Components/Video/Video'
import Testimonial from './Components/Testimonial/Testimonial'
// import News from './Components/News/News'
import CTA from './Components/CTA/CTA'
import Footer from './Components/Footer/Footer'

import SearchPopup from './Components/Common/SearchPopup'
import ColorSwitcher from './Components/Common/ColorSwitcher'
import ScrollToTop from './Components/Common/ScrollToTop'
import { initGlobalScripts } from './utils/initGlobalScripts'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Initialize global scripts with a slight delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (window.jQuery) {
        initGlobalScripts(window.jQuery);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-wrapper">
      <Cursor />
      <Preloader />
      <BodyLines />

      <Header />
      <AboutSidebar />
      <MobileMenu />

      <Hero />
      <About />
      <Services />
      <Features />
      <Rooms />
      <Project />
      <Team />
      {/* <Video /> */}
      <Testimonial />
      {/* <News /> */}
      <CTA />
      <Footer />

      <SearchPopup />
      <ColorSwitcher />
      <ScrollToTop />
    </div>
  )
}

export default App
