import { useEffect, useState } from "react";
// import { usePosts } from "./hooks/userPosts";

// function getUserPosts(){
//     console.log("hello")
// }

export function Header({ user_id }){
    // const { getUserPosts } = usePosts([
    //     { id: 1, title: "first post", body: " body 1 " , user_id:1 },
    //     { id: 2, title: "second post", body: " body 2 " , user_id:1 },
    //   ]);  
    return(
        <div className="mb-2">
        <label htmlFor="user">userID</label>
        <input type="text" id="user"/>
        <button onClick={() => getUserPosts(user_id)}>
            get posts
        </button>
        
        </div>
    )
} 