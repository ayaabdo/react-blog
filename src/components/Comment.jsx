export function Comment ({comment}) {
  return (
    <ul className="comment"> 
    <h2>Comment</h2>
    <li> {comment.name}</li>
     <li>{comment.body}</li>
     <li> { comment.email }</li> 
     </ul>
  )
}