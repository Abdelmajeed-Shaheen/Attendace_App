import { SET_CLASSROOMS } from "../actions/actionTypes";

const initialState = {
  classroms: [],
  selected: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLASSROOMS:
      const classroms = action.payload;
      return {
        ...state,
        classroms
      };
    default:
      return state;
  }
};

export default reducer;
