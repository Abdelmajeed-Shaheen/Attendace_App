import { combineReducers } from "redux";

import classromsReducer from "./classrooms";
import studentsReducer from "./students";

const rootReducer = combineReducers({
  classromsState: classromsReducer,
  studentsState: studentsReducer
});

export default rootReducer;
