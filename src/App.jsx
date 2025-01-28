import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage.jsx'
import CommunityPage from './Pages/Communitypage.jsx'
import './Styles/AllComponents.css'

function App() {
  return (
    <BrowserRouter>
      <div style={{margin: "0 4rem"}}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/community' element={<CommunityPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
