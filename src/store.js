const initialState = {
  bookMarkedItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_item_to_bookmarks":
      return {
        ...state,
        bookMarkedItems: action.newBookMarkItems,
      };

    default:
      return state;
  }
};

export default reducer;
