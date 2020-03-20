import { SET_CLASSROOMS } from "./actionTypes";

import axios from "axios";

export const getCohorts = () => async dispatch => {
  const { data: cohortFiles } = await axios.get(
    "https://api.github.com/repos/CODEDHQ/cohorts/contents/"
  );
  const cohortResponses = await Promise.all(
    cohortFiles.map(cohortFile => axios.get(cohortFile.download_url))
  );
  const cohorts = cohortResponses.map(res => res.data);
  dispatch({ type: SET_CLASSROOMS, payload: cohorts });
};
