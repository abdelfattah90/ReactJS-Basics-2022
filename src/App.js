import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Ex1 from './codes/ex1/Ex1'
import Ex2 from './codes/ex2/Ex2'
import Ex3 from './codes/ex3/Ex3'
import Ex4 from './codes/ex4/Ex4'
function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ex1' element={<Ex1 />} />
          <Route path='/ex2' element={<Ex2 />} />
          <Route path='/ex3' element={<Ex3 />} />
          <Route path='/ex4' element={<Ex4 />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
