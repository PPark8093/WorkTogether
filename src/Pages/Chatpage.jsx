import React, { useEffect, useState } from 'react'
import TitleBar from '../Utils/TitleBar'
import "../Styles/Chatpage.css"
// import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io("https://worktogethersever.vercel.app");

function Chatpage() {
    // const [chatLog, setchatLog] = useState([]);
    const [id, setID] = useState("");
    const [message, setMessage] = useState("");

    // const get_log = () => {
    //     axios.get("https://worktogethersever.vercel.app/chat").then((res) => {setchatLog(res.data);}).catch((err) => console.error("Error", err));
    // }

    const send_message = () => {
        if (!id || !message) {
            alert("ID 또는 Message를 입력하세요 ");
            return;
        }
        const newMessage = id + ": " + message;
        // axios.post("https://worktogetherserver.vercel.app/chat", newLog).then((res) => {setchatLog([res.data, ...chatLog]); setMessage("");}).catch((err) => console.error("Error" + err));
        socket.emit("chat message", newMessage);
        setMessage("");

        // get_log();
    };

    useEffect(() => {
        socket.emit("fetch chats");

        socket.on("load chats", (chats) => {
            setMessage(chats);
        });

        socket.on("chat message", (msg) => {
            setMessage((prev) => [...prev, msg]);
        });

        return(() => {
            socket.off("load chats");
            socket.off("chat message");
        });
    }, []);

    return (
        <div>
            <TitleBar title={"채팅"} goto={"/"} />
            <div className='chat_container'>
                <textarea rows={1} style={{height: "100%"}} value={chatLog} readOnly={true}/>
                <div className='input_container'>
                    <input style={{flex: 1}} placeholder='ID' value={id} onChange={(event) => setID(event.target.value)} />
                    <input style={{flex: 9}} placeholder='Message' value={message} onChange={(event) => setMessage(event.target.value)} onKeyDown={(e) => {if (e.key === "Enter") send_message();}} />
                </div>
                <button onClick={send_message}>전송하기</button>
            </div>
        </div>
    )
}

export default Chatpage
