import React from 'react'
import TitleBar from '../Utils/TitleBar'
import "../Styles/Chatpage.css"

function Chatpage() {

    return (
        <div>
            <TitleBar title={"채팅"} goto={"/"} />
            <div className='chat_container'>
                <textarea rows={1} style={{height: "100%"}} />
                <div className='input_container'>
                    <input style={{flex: 1}} placeholder='ID'/>
                    <input style={{flex: 9}} placeholder='입력' />
                </div>
                <button>전송하기</button>
            </div>
        </div>
    )
}

export default Chatpage
