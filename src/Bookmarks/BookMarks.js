import React from "react";
import { useSelector } from "react-redux";
import "./Bookmarks.css";
import { useDispatch } from "react-redux";

function BookMarks() {
  const bookmarkedPosts = useSelector((state) => state.bookMarkedItems);
  const posts = useSelector((state) => state.availablePosts);

  const dispatch = useDispatch();

  const removeBookMark = (bookToRemove) => {
    let updatedBookmarks = bookmarkedPosts.filter((bookMarked) => {
      if (
        bookMarked.userId != bookToRemove.userId ||
        (bookMarked.userId == bookToRemove.userId &&
          bookMarked.id != bookToRemove.id)
      ) {
        return true;
      }
    });

    dispatch({
      type: "remove_item_from_bookmarks",
      newBookMarkItems: updatedBookmarks,
    });

    // add back to availableposts
    let updatedAvailablePosts = [...posts, bookToRemove];

    // sort by userId and id
    updatedAvailablePosts.sort(function (ob1, ob2) {
      if (ob1.userId > ob2.userId) {
        return 1;
      } else if (ob1.userId < ob2.userId) {
        return -1;
      }

      // Else go to the 2nd item
      if (ob1.id < ob2.id) {
        return -1;
      } else if (ob1.id > ob2.id) {
        return 1;
      } else {
        // nothing to split them
        return 0;
      }
    });

    dispatch({
      type: "set_posts",
      availablePosts: updatedAvailablePosts,
    });
  };

  let bookmarkContent = bookmarkedPosts.map((book) => (
    <div className="bookmarkContainer">
      <img
        className="bookmarkPageImage"
        src={"//unsplash.it/1" + book.id + "0/100"}
        alt=""
      />
      <div className="bookmarkPageItemDescription">
        <p>
          {book.userId} : {book.id}
        </p>
        <h5>{book.title}</h5>
        <p>{book.body}</p>
      </div>

      <button className="bookmarkPageItemViewButton">View</button>
      <button
        className="bookmarkPageItemRemoveButton"
        onClick={() => removeBookMark(book)}
      >
        Remove
      </button>
    </div>
  ));

  return (
    <div className="bookMarkListContainer">
      <h1>Bookmarks</h1>
      {bookmarkContent}
    </div>
  );
}

export default BookMarks;
