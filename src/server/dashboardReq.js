import axios from "axios";
const baseURL = "http://localhost:3001/applied";

// export const getAllAppliedData = () =>
//   axios.get(baseURL).then((res) => res.data);

export const createFormData = (newForm) =>
  axios.post(baseURL, newForm).then((res) => console.log(res.data));
