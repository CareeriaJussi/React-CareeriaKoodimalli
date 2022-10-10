import React, { useState, useEffect } from 'react';
import './App.css';

const Posts = () => {

const [posts, setPosts] = useState([])

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(oliot => setPosts(oliot))
},[]
)

  return (
      <>
      <h2>Posts from typicode</h2>

      {

        posts && posts.map(p => 
          <div className='posts' key ={p.id}>
          <h4>{p.title}</h4>
          <p>{p.body}</p>
          <p>User ID: {p.userId}</p>
          <p>ID: {p.id}</p>
          </div>
          )
      }
     
      </>    
  );
}

export default Posts;