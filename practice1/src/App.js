import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import {useEffect} from "react";

function App() {
  const [posts,setPosts]= useState([])

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((posts) => setPosts(posts.splice(0,10)));
},[]);

  return (
    <div className="App">
<h1 className="bg-primary text-white">Fetch API Data</h1>
{posts.map((post)=>(
  <div key={post.id} className="bg-dark">
    <h1 className="text-info">{post.title}</h1>
    <p className="text-white">{post.body}</p>
    <h1 className="text-info">{post.userId}</h1>
    <h2 className="text-info">{post.id}</h2>
  </div>
))}
    </div>
  );
}
export default App;