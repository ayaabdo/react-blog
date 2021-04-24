import {useState} from "react"
  
export function Header ({handlePostList}) {
  const [userId, setUserId] = useState()
  return (
    <div>
    <input type="text" onChange ={(e) => setUserId(e.target.value)  }  />
    <button
    onClick= {()=>{ handlePostList(userId)  }} > List Posts </button>
    </div>
  );
}