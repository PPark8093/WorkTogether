import React, { useEffect, useState } from 'react'
import "../Styles/CommunityPage.css"
import TitleBar from '../Utils/TitleBar'
import axios from 'axios';

function Communitypage() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        get_posts();
    }, []);

    const get_posts = () => {
        axios.get("https://worktogetherserver.vercel.app/posts").then((res) => {setPosts(res.data);}).catch((error) => console.error("Error", error));
    }

    // 새로운 게시글 추가
    const add_post = () => {
        if (!title || !body) {
            alert("title이나 body칸을 입력하세요!");
            return;
        } else {
            const newPost = { title, body, like: 0 };
            axios.post("https://worktogetherserver.vercel.app/posts", newPost).then((res) => {setPosts([res.data, ...posts]); setTitle(""); setBody("");}).catch((error) => console.error("Error", error));    
        }

        get_posts();
    };

    // 이미 있는 게시글에 좋아요만 추가
    const increase_like = (post) => {
        const updatedPost = { ...post, like: post.like + 1 };

        axios
            .post("https://worktogetherserver.vercel.app/posts", updatedPost)
            .then((res) => {
                setPosts(posts.map(p => p._id === post._id ? res.data : p));
            })
            .catch((error) => console.error("Error", error));
    };

    return (
        <div style={{paddingBottom: "4rem"}}>
            <TitleBar title={"게시판"} goto={"/"}/>
            <div className='add_container'>
                <input placeholder='제목' value={title} onChange={(event) => setTitle(event.target.value)} required/>
                <input placeholder='내용' value={body} onChange={(event) => setBody(event.target.value)} required/>
                <button onClick={add_post}>추가하기</button>
            </div>
            
            {Array.isArray(posts) && posts.length > 0 ? (<div className='post_list_container'>
                {posts.map((post, index) => (
                    <div key={post.id || index} className='post_container'>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                            <button className='heart_button' onClick={() => increase_like(post)}>좋</button>
                            <p>{post.like}</p>
                        </div>
                        <div style={{marginLeft: "1rem"}}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                ))}
            </div>) : <div className='no_posts_container'><h1>현재 게시글이 없습니다!</h1></div>}

            <br />
            <a>(좋아요 기능 아직 덜만듬)</a>
        </div>
        
    )
}

export default Communitypage
