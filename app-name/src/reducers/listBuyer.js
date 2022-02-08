const initialState = { listBuyer: [] };

const listBuyerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LISTBUYER":
      return { listBuyer: payload };
    default:
      return state;
  }
};

export default listBuyerReducer;

export const setListBuyer = (listBuyer) => {
  return { type: "SET_LISTBUYER", payload: listBuyer };
};