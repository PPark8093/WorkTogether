import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import Communitypage from './Pages/Communitypage.jsx'
import './App.css'
import './Styles/AllComponents.css'
import Chatpage from './Pages/Chatpage.jsx'

function App() {
  return (
    <BrowserRouter>
      <div style={{margin: "0 4rem"}}>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/community' element={<Communitypage/>}/>
          <Route path='/chat' element={<Chatpage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
