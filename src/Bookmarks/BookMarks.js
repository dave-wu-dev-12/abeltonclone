import React from "react";
import { useSelector } from "react-redux";
import "./Bookmarks.css";

function BookMarks() {
  const bookmarkedPosts = useSelector((state) => state.bookMarkedItems);

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
      <button className="bookmarkPageItemRemoveButton">Remove</button>
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
