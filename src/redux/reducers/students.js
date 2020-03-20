import { IS_HERE, NOT_HERE, SELECTED, RELOAD } from "../actions/actionTypes";
const initialState = {
  nothere: [],
  here: [],
  roomName: "",
  selected: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_HERE:
      const students_here = state.nothere.filter(a => a !== action.payload);
      const studentclicked_here = state.nothere.find(a => a === action.payload);
      const here = [...state.here];
      here.push(studentclicked_here);
      return {
        ...state,
        nothere: students_here,
        here: here
      };
    case NOT_HERE:
      const students_nothere = state.here.filter(a => a !== action.payload);
      const studentclicked_nothere = state.here.find(a => a === action.payload);
      const nothere = [...state.nothere];
      nothere.push(studentclicked_nothere);
      return {
        ...state,
        nothere: nothere,
        here: students_nothere
      };
    case SELECTED:
      const students = action.payload["students"];
      const name = action.payload["name"];
      return {
        ...state,
        nothere: [...students],
        roomName: name,
        selected: true
      };
    case RELOAD:
      return {
        ...state,
        nothere: [],
        here: [],
        roomName: "",
        selected: false
      };
    default:
      return state;
  }
};

export default reducer;
