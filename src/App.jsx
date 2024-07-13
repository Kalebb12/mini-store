import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/home/home"
import Navbar from './components/navbar/navbar'
import CartModal from './components/modal/cart/cart'
import { Checkout } from './pages/checkout/checkout'
import Details from './components/details/details'
function App() {
  return (
    <div>
      <Navbar/>
      <CartModal/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mini-store/" element={<Home />} />
        <Route path="/mini-store/checkout/" element={<Checkout/>} />
        <Route path="/mini-store/product/:id" element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App
