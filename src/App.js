import './App.css';
import {useState } from "react"
import {Post} from "./components/Post"
import {Header} from "./components/Header"
import {Comment} from "./components/Comment"



function App() {

  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  
  

  const handlePostList = (user_id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
    .then(response => response.json())
    .then(json => setPosts(json))
  }
  


  const handleCommentList = (post_id) => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
    .then(response => response.json())
    .then(json => setComments(json))
  }
  
  // const handleShowComments

  return (
    <div className="App">
      <h1>User Posts</h1>
      <Header handlePostList = {handlePostList} />
      <div className="posts-container">
        { posts.map((post) => {
       return <Post  key={post.id} post = {post} handleCommentList = {handleCommentList} />
      }) }
      </div>

      <div className="comments-container">
        { comments.map((comment) => {
       return <Comment  key={comment.id} comment = {comment}  />
      }) }
      </div>


    </div>
  );
}

export default App;