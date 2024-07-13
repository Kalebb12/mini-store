import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/home/home"
import Navbar from './components/navbar/navbar'
import CartModal from './components/modal/cart/cart'
import { Checkout } from './pages/checkout/checkout'
function App() {
  return (
    <div>
      <Navbar/>
      <CartModal/>
      <Routes>
        <Route path="/mini-store/" element={<Home />} />
        <Route path="/mini-store/checkout/" element={<Checkout/>} />
      </Routes>
    </div>
  )
}

export default App
