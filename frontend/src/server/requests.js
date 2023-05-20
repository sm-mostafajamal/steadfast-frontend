import axios from "axios";
const baseURL = "http://localhost:3001/jobs";
const applyURL = "http://localhost:3001/apply";

export const getJobs = () => axios.get(baseURL).then((res) => res.data);

export const getAllAppliedData = () =>
  axios.get(applyURL).then((res) => res.data);

export const createApplyFormData = (newForm) =>
  axios.post(applyURL, newForm).then((res) => res.data);
