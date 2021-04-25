
import { Router } from "@reach/router";
import './Blog.css';
import { Auth } from "./components/Auth";


function Blog() {
  return (
    <Router>
      
      <Auth path="/"/>
      <Profile path="/profile" />
      <Auth path="/" />
    </Router>
  );
}

export default Blog;