const initialState = { addDate: [] };

const addDateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_DATE":
      return { addDate: [...state.addDate, payload] };
    default:
      return state;
  }
};

export default addDateReducer;


export const AddDate = (newDate) => {
  return { type: "ADD_DATE", payload: newDate };
};

