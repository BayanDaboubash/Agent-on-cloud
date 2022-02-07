const initialState = { listDate: [] };

const listDateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LISTDATE":
      return { listDate: payload };
    default:
      return state;
  }
};

export default listDateReducer;

export const setListDate = (listDate) => {
  return { type: "SET_LISTDATE", payload: listDate };
};
