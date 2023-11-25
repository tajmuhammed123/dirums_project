import './App.css'
import NavBar from './Common/Navbar'
import Home from './Home'

function App() {

  return (
    <div className="main">
        <div className="content">
          <NavBar className="sticky" />
          <div className="min-h-fit">
            <Home />
          </div>
        </div>
      </div>
  )
}

export default App
