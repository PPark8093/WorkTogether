import React from 'react'
import { useNavigate } from 'react-router-dom'

function TitleBar({ title, backButton = true, goto }) {
    const navi = useNavigate();

    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
            {backButton && ( // backButton이 true일 때만 렌더링
                <button
                    style={{ backgroundColor: "transparent", border: "none", outline: "none", flex: 1, margin: 0 }}
                    onClick={() => navi(goto)}
                >
                    &lt;
                </button>
            )}
            <h1 style={{margin: "2rem 0 2rem 0", flex: 19}}>{title}</h1>
        </div>
    )
}

export default TitleBar
