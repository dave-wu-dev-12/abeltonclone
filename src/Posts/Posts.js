import React from "react";
import "./Post.css";

function Posts({ posts, onPostSelect }) {
  let postList = posts.map((post) => (
    <div className="postContainer">
      <img src="//unsplash.it/150/100" alt="" />
      <p>
        {post.userId} : {post.id}
      </p>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
      <button onClick={() => onPostSelect(post)}>Select</button>
    </div>
  ));

  return <div className="postsContainer">{postList}</div>;
}

export default Posts;
