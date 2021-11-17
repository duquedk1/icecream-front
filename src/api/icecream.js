import axios from "axios";
import { API_URL } from "../components/constants";

 export const getIcecreamAxios = () => {
    const enpoint = "/icecream";
    return axios
      .get(`${API_URL}${enpoint}`)
      .then((result) => {
        console.log("DATA AXIOS", result);
        return result.data
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  export const getIcecreamFetch = () => {
    const enpoint = "/icecream";
     return fetch(`${API_URL}${enpoint}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        return data;
      });
  };