import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/home/home"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/mini-store/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
