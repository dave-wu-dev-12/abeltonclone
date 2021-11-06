import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Bookmarks.css";
import { useDispatch } from "react-redux";

function BookMarks() {
  const bookmarkedPosts = useSelector((state) => state.bookMarkedItems);
  const posts = useSelector((state) => state.availablePosts);
  const dispatch = useDispatch();
  const currentBookMarkTotalPrice = useSelector(
    (state) => state.currentBookMarkTotalPrice
  );

  useEffect(() => {
    // reset all posts viewmore content
    let updatedBookmarks = bookmarkedPosts.map((book) => {
      book.viewMore = false;
      return book;
    });

    dispatch({
      type: "update_item_from_bookmarks",
      newBookMarkItems: updatedBookmarks,
    });

    // get current total price
    getCurrentBookmarkTotal();
  }, []);

  const getCurrentBookmarkTotal = () => {
    let newTotalPrice = 0;
    bookmarkedPosts.map((book) => {
      let floatPrice = parseFloat(book.price);
      newTotalPrice += floatPrice;
    });

    dispatch({
      type: "update_bookmark_total",
      newPrice: newTotalPrice,
    });
  };

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

  const showMoreForBook = (bookmarkToShowMore) => {
    let updatedBookmarks = bookmarkedPosts.map((book) => {
      if (
        bookmarkToShowMore.userId == book.userId &&
        bookmarkToShowMore.id == book.id
      ) {
        book.viewMore = !book.viewMore;
      }
      return book;
    });

    dispatch({
      type: "update_item_from_bookmarks",
      newBookMarkItems: updatedBookmarks,
    });
  };

  let bookmarkContent = bookmarkedPosts.map((book) => (
    <>
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

        <button
          className="bookmarkPageItemViewButton"
          onClick={() => showMoreForBook(book)}
        >
          View More
        </button>
        <button
          className="bookmarkPageItemRemoveButton"
          onClick={() => removeBookMark(book)}
        >
          Remove
        </button>
      </div>
      {book.viewMore && (
        <div>
          <h5>{"$" + book.price}</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            deserunt ratione earum odio tenetur magni iure, ut, illo natus ad
            possimus? Ipsum ex cumque recusandae distinctio perspiciatis ab
            velit veniam doloremque nulla minus? Itaque, facilis. Deleniti
            perferendis sapiente animi reprehenderit adipisci expedita, maiores
            recusandae esse aut, officiis quaerat earum dolorum!
          </p>
        </div>
      )}
    </>
  ));

  return (
    <div className="bookMarkListContainer">
      <h1>Bookmarks</h1>
      <h1>Total Price: ${currentBookMarkTotalPrice}</h1>
      {bookmarkContent}
    </div>
  );
}

export default BookMarks;
