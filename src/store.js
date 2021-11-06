import cloneDeep from "lodash/cloneDeep";

const initialState = {
  bookMarkedItems: [],
  availablePosts: [],
  currentBookMarkTotalPrice: 0,
};

const reducer = (state = initialState, action) => {
  let deepCopy = cloneDeep(state);

  switch (action.type) {
    case "set_posts":
      return {
        ...deepCopy,
        availablePosts: action.availablePosts,
      };
    case "add_item_to_bookmarks":
      return {
        ...deepCopy,
        bookMarkedItems: action.newBookMarkItems,
      };

    case "remove_item_from_bookmarks":
      return {
        ...deepCopy,
        bookMarkedItems: action.newBookMarkItems,
      };

    case "update_item_from_bookmarks":
      return {
        ...deepCopy,
        bookMarkedItems: action.newBookMarkItems,
      };

    case "update_bookmark_total":
      return {
        ...deepCopy,
        currentBookMarkTotalPrice: action.newPrice,
      };

    default:
      return deepCopy;
  }
};

export default reducer;
