import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Routing from './routing'
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routing />
      <Footer/>
    </BrowserRouter>

  )
}

export default App
