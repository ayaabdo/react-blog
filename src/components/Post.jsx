import { useEffect, useState } from "react";
// import { Header } from "./header";

export function Post({ id }) {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => response.json())
      .then((post) => {
        setPost({ post });
      });
  }, []);

  return (
    <div>

      <div className="container">
        <p>{post.title}</p>
        <p>{post.body}</p>
        
      </div>
    </div>
  );
}