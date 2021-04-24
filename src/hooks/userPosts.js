import { useCallback, useEffect, useState } from "react";

export function userPosts(initialPosts) {
  let [posts, setPosts] = useState(initialPosts);


  const getUserPosts = useCallback(
    // fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    // .then((response) => response.json())
    // .then((json) => console.log(json)) 
    console.log("hello")
    
  );


  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTodos(data);
  //       setLoading(false);
  //     });
  // }, [setTodos, setLoading]);

  return {
    posts,
    getUserPosts,
  
  };
}
