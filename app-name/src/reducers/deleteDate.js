const initialState = { deleteDates: [] };

const deleteDatesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DELETE_POST":
      return state.deleteDates.filter((elem) => elem.id !== payload.id);
    default:
      return state;
  }
};

export default deleteDatesReducer;


export const deletePost = (deleteDates) => {
  return { type: "DELETE_POST", payload: deleteDates };
};
