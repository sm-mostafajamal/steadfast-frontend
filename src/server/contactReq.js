import axios from "axios";

const baseURL = "http://localhost:3001/contact";

export const getALLContactFormData = () =>
  axios.get(baseURL).then((res) => res.data);
export const createNewContactForm = (newForm) =>
  axios.post(baseURL, newForm).then((res) => res.data);
