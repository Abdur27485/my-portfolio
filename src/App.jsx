import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <div className='px-6 lg:px-12 bg-slate-800'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
    </div>
  )
}

export default App
