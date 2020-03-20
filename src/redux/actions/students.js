import { IS_HERE, NOT_HERE, SELECTED, RELOAD } from "./actionTypes";

export const ishere = student => {
  return {
    type: IS_HERE,
    payload: student
  };
};
export const reload = () => {
  return {
    type: RELOAD
  };
};
export const nothere = student => {
  return {
    type: NOT_HERE,
    payload: student
  };
};
export const classselected = students => {
  return {
    type: SELECTED,
    payload: students
  };
};
