import {useState} from "react"
import { usePosts } from "./hooks/usePosts";

function getUserPosts(){
    // useState
}

export function Header({params}){
    const { getUserPosts } = usePosts([
        { id: 1, title: "first post", completed: true },
        { id: 2, title: "second post", completed: true },
      ]);  
    return(
        <div className="mb-2">
        <label htmlFor="user">userID</label>
        <input type="text" id="user"/>
        <button onClick={getUserPosts}>
            get posts
        </button>
        
        </div>
    )
} 