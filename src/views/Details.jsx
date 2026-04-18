import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Details(){

    const {id} = useParams();
    const[post, setPost] = useState(null);

    const getData = async ()=>{
        const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await promise.json();
        setPost(json);
        
    }

    useEffect(
        ()=>{
            getData()
        }, []
    )
    
    return (
<>
    <h1>Details Posts</h1>
    <h2>Id: {id}</h2>
    {post && (
        <> 
    <p>Title: {post.title}</p>
    <p>Body: {post.body}</p> 
    </>
    )}
    
</>

        
    );
}

