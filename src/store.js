import cloneDeep from "lodash/cloneDeep";

const initialState = {
  bookMarkedItems: [],
  availablePosts: [],
  currentBookMarkTotalPrice: 0,
};

const reducer = (state = initialState, action) => {
  let deepCopy = cloneDeep(state);
  // deep copying will alter the state of everything and
  // will trigger useEffects - this can cause unwanted ciruclars

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

    case "update_item_from_bookmarks":
      return {
        ...state,
        bookMarkedItems: action.newBookMarkItems,
      };

    case "update_bookmark_total":
      return {
        ...state,
        currentBookMarkTotalPrice: action.newPrice,
      };

    default:
      return state;
  }
};

export default reducer;
