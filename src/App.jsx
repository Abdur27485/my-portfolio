import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <div className='px-6 lg:px-12 bg-slate-800'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact>
      <About></About>
      <Footer></Footer>
    </div>
  )
}

export default App
