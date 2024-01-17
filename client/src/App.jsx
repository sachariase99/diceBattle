import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GameBoard, PlayerBoard, AiBoard } from './pages'
import { Player } from './components'

function App() {

    return (
      <>
        <Router>
          <Routes>
            <Route path="/" Component={GameBoard} />
            <Route path='/playerboard' Component={PlayerBoard} />
            <Route path='/aiboard' Component={AiBoard} />
          </Routes>
        </Router>
      </>
    )
  }

export default App
