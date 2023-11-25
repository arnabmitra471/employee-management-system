import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Users from './components/Users'
function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element = {<Users/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
