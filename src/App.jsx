import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/home/home"
import Navbar from './components/navbar/navbar'
import CartModal from './components/modal/cart/cart'
function App() {
  return (
    <div>
      <Navbar/>
      <CartModal/>
      <Home/>
    </div>
  )
}

export default App
