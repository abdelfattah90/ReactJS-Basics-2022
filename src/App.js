import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ComponentsProps from './pages/main-concepts/ComponentsProps'
import StateAndLifecycle from './pages/main-concepts/StateAndLifecycle'
import HandlingEvents from './pages/main-concepts/HandlingEvents'
import ConditionalRendering from './pages/main-concepts/ConditionalRendering'
import Ex1 from './pages/examples/ex1/Ex1'
import Ex2 from './pages/examples/ex2/Ex2'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/components-props' element={<ComponentsProps />} />
          <Route path='/state-lifecycle' element={<StateAndLifecycle />} />
          <Route path='/handling-events' element={<HandlingEvents />} />
          <Route
            path='/conditional-rendering'
            element={<ConditionalRendering />}
          />
          <Route path='/ex1' element={<Ex1 />} />
          <Route path='/ex2' element={<Ex2 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
