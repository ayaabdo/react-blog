export function Post ({post , handleCommentList}) {
  return (
    <ul class="post"> 
    <li> {post.userId}</li>
     <li>{post.title}</li>
     <li> { post.body }</li> 
     <li><button class="btn" onClick= {()=>{
        handleCommentList(post.id); 
        const postContainer = document.querySelector('.posts-container');
        console.log(postContainer);
        postContainer.style.display = "none";
    
    }}>show comments</button></li>
     </ul>
  )
}