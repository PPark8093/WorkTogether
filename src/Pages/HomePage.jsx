import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/HomePage.css"
import TitleBar from '../Utils/TitleBar';

function HomePage() {
  const navi = useNavigate();

  return (
    <div>
      <TitleBar title={"Work Together"} backButton={false}/>
      <button onClick={() => {navi("/community")}}>게시판</button>
    </div>
  )
}

export default HomePage
