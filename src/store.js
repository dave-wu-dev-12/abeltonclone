const initialState = {
  bookMarkedItems: [],
  availablePosts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_posts":
      return {
        ...state,
        availablePosts: action.availablePosts,
      };
    case "add_item_to_bookmarks":
      return {
        ...state,
        bookMarkedItems: action.newBookMarkItems,
      };

    case "remove_item_from_bookmarks":
      return {
        ...state,
        bookMarkedItems: action.newBookMarkItems,
      };

    default:
      return state;
  }
};

export default reducer;
