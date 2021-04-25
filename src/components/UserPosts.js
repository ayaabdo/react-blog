import { Link } from "@reach/router";
import { useEffect, useState } from "react";
import { Header } from "./header";

export function UserPosts() {
  const [userPosts, updatePosts] = useState({
    posts: [],
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((posts) => {
        posts = posts.slice(0, 10);
        updatePosts({ ...userPosts, posts });
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <h2>My Posts:</h2>
        {userPosts.posts.map((post) => {
          return (
            <div key={post.id} className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body.substring(0, 30)}</p>
                <Link className="card-link" to={`/posts/${post.id}`}>
                  View Post
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}