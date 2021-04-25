import { Link } from "@reach/router";
import { useEffect, useState } from "react";
import { Header } from "./header";

export function Post({ id }) {
  const [comments, updatePost] = useState({
    comments_array: [],
  });
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => {
        setPost({ post });
      });
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((comments) => {
        updatePost({ ...comments, comments_array: comments });
      });
  }, []);

  return (
    <div>
      <Header />

      <div className="container">
        <p>{post.title}</p>
        <p>{post.body}</p>

        <h3>Comments Section</h3>

        {comments.comments_array.map((comment) => {
          return (
            <div key={comment.id} className="card">
              <div className="card-body">
                <h5 className="card-title">{comment.name}</h5>
                <h5 className="card-title">By: {comment.email}</h5>
                <p className="card-text">{comment.body}</p>
              </div>
            </div>
          );
        })}

        <Link className="btn btn-primary" to="/">
          Back
        </Link>
      </div>
    </div>
  );
}
