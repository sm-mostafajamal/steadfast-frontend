import axios from "axios";
const baseURL = "https://steadfast-d3c4.onrender.com/api/jobs";
const applyURL = "https://steadfast-d3c4.onrender.com//apply";

export const getJobs = () => axios.get(baseURL).then((res) => res.data);

export const getAllAppliedData = () =>
  axios.get(applyURL).then((res) => res.data);

export const createApplyFormData = (newForm) =>
  axios.post(applyURL, newForm).then((res) => res.data);
