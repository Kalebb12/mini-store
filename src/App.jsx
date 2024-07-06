import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/home/home"
import Navbar from './components/navbar/navbar'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/mini-store/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
