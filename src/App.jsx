import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Users from './components/Users'
import Add from './components/Add'
import Read from './components/Read'
function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element = {<Users/>}></Route>
          <Route path="/add" element ={<Add/>}></Route>
          <Route path="/read/:id" element={<Read/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
