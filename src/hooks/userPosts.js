import { useCallback, useEffect, useState } from "react";

export function usePosts(initialPosts) {
  let [posts, setPosts] = useState(initialPosts);


  const getUserPosts = useCallback(
    (post) =>
      setPosts(posts.filter(({ user_id }) => user_id === post.user_id))
    [posts, setPosts]
    
  );


//   useEffect(() => {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => {
//         setTodos(data);
//         setLoading(false);
//       });
//   }, [setTodos, setLoading]);

  return {
    posts,
    getUserPosts,
  
  };
}
