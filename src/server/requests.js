import axios from "axios";
const baseURL = "http://localhost:3001/jobs";

export const getJobs = () => axios.get(baseURL).then((res) => res.data);
