export const initialState = {
  user: null,
  // token:
  //   "BQDrPp7GksXt5SajrNRxmtmgVPG-yegopAftJg3ZKQ8164P8BS…dNMhr4tCjenasQioYTy8_hpvy9sy_n5vQ8v5qJWnX2GFNe2gz",
  playlists: [],
  playing: false,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
