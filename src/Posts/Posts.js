import React, { useState } from "react";
import "./Post.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function Posts({ posts, onPostSelect }) {
  const [postsToShowIndex, setPostsToShowIndex] = useState(6);
  console.log(postsToShowIndex);

  let postsToShow = [];
  postsToShow = posts.slice(0, postsToShowIndex);

  let postList = postsToShow.map((post) => (
    <div className="postContainer">
      <div className="customziedpicture">
        <img src="//unsplash.it/150/100" alt="" />
        <div className="newTagContainer">New</div>
        <div className="playIconContainer">
          <PlayArrowIcon></PlayArrowIcon>
        </div>
      </div>
      <div className="postTextContainer">
        <div>
          <p>
            {post.userId} : {post.id}
          </p>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
        <button onClick={() => onPostSelect(post)}>Select</button>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="postsContainer">{postList}</div>
      {posts.length > 0 && (
        <div className="showMoreLink">
          <h2 onClick={() => setPostsToShowIndex(postsToShowIndex + 6)}>
            Show more items
          </h2>
        </div>
      )}
    </div>
  );
}

export default Posts;
