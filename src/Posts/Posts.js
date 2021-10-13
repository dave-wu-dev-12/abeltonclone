import React, { useState } from "react";
import "./Post.css";

function Posts({ posts, onPostSelect }) {
  const [postsToShowIndex, setPostsToShowIndex] = useState(6);
  console.log(postsToShowIndex);

  let postsToShow = [];
  postsToShow = posts.slice(0, postsToShowIndex);

  let postList = postsToShow.map((post) => (
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

  return (
    <div>
      <div className="postsContainer">{postList}</div>
      <div className="showMoreLink">
        <h2 onClick={() => setPostsToShowIndex(postsToShowIndex + 6)}>
          Show more items
        </h2>
      </div>
    </div>
  );
}

export default Posts;
