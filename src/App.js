import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Service'
import About from './components/About'
import Tours from './components/Tours'
import Footer from './components/Footer'

function App() {
  console.log('hello')
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Tours></Tours>
      <Footer></Footer>
    </>
  )
}

export default App
