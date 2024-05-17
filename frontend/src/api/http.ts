import axios from "axios";

export default () => {
  const baseURL = "http://localhost/api/";
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return instance;
};
