import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Ex1 from './codes/ex1/Ex1'
function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ex1' element={<Ex1 />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
