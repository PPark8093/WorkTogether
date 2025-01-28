import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/TitleBar.css"

function TitleBar({ title, backButton = true, goto }) {
    const navi = useNavigate();

    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
            {backButton && ( // backButton이 true일 때만 렌더링
                <button className='back_button' onClick={() => navi(goto)}>
                    &lt;
                </button>
            )}
            <h1 style={{margin: "2rem 0 2rem 0", flex: 19}}>{title}</h1>
        </div>
    )
}

export default TitleBar
