const initialState = { listSeller: [] };

const listSellerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LISTBUYER":
      return { listSeller: payload };
    default:
      return state;
  }
};

export default listSellerReducer;

export const setListBuyer = (listSeller) => {
  return { type: "SET_LISTBUYER", payload: listSeller };
};