import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Routing from './routing'
function App() {

  return (
    <BrowserRouter>
     
      <Routing />
      <Footer/>
    </BrowserRouter>

  )
}

export default App
