import { useEffect, useState } from "react";


export function Posts({ userId }) {
  const [userPosts] = useState({
    posts: [],
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json))
  }, []);

  return (
      <p>bla bla </p>
    // <div>
    //     <p>ay haga</p>
    //   <div className="container">
    //     {userPosts.posts.map((post) => {
    //       return (
    //         <div key={post.id} className="card">
    //           <div className="card-body">
    //             <h5 className="card-title">{post.title}</h5>
    //             <p className="card-text">{post.body}</p>

    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}
