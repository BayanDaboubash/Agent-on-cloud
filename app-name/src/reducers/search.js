const initialState = { search: "" };

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_SEARCH":
      return { search: payload };
    default:
      return state;
  }
};
export default searchReducer;
//
export const setSearch = (search) => {
  return { type: "SET_SEARCH1", payload: search };
};