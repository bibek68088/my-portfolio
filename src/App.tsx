import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"

function App() {


  return (
    <>
      <main className="text-black bg-white body-font">
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Resume/>
          <Testimonials />
          <Contact />
          <Footer />
      </main>
      
    </>
  )
}

export default App
