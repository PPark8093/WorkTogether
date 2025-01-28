import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage.jsx'
import Communitypage from './Pages/Communitypage.jsx'
import './Styles/AllComponents.css'

function App() {
  return (
    <BrowserRouter>
      <div style={{margin: "0 4rem"}}>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/community' element={<Communitypage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
