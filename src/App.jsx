import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Events from './Pages/Events'
import Workshops from './Pages/Workshops'
import About from './Pages/About'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>

           <Route path='/events' element={<Events/>}/>
           <Route path='/workshops' element={<Workshops/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App