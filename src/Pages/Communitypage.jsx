import React, { useEffect, useState } from 'react'
import "../Styles/CommunityPage.css"
import TitleBar from '../Utils/TitleBar'
import axios from 'axios';

function Communitypage() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        axios.get("https://worktogetherserver.vercel.app/posts").then((res) => {setPosts(res.data);}).catch((error) => console.error("Error", error));
    }, []);

    const get_posts = () => {
        axios.get("https://worktogetherserver.vercel.app/posts").then((res) => {setPosts(res.data);}).catch((error) => console.error("Error", error));
    }

    const submit_post = () => {
        if (!title || !body) {
            alert("title이나 body칸을 입력하세요!");
            return;
        } else {
            const newPost = { title, body };
            axios.post("https://worktogetherserver.vercel.app/posts", newPost).then((res) => {setPosts([res.data, ...posts]); setTitle(""); setBody("");}).catch((error) => console.error("Error", error));    
        }

        get_posts();
    };

    return (
        <div style={{paddingBottom: "4rem"}}>
            <TitleBar title={"게시판"}/>
            <div className='add_container'>
                <input placeholder='title' value={title} onChange={(event) => setTitle(event.target.value)} required/>
                <input placeholder='body' value={body} onChange={(event) => setBody(event.target.value)} required/>
                <button onClick={submit_post}>추가하기</button>
            </div>
            
            {Array.isArray(posts) && posts.length > 0 ? <div className='post_list_container'>
                {posts.map((post, index) => (
                    <div key={post.id || index} className='post'>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div> : <div className='no_posts_container'><h1>현재 게시글이 없습니다!</h1></div>}
        </div>
        
    )
}

export default Communitypage
