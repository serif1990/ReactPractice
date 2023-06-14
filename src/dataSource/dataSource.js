import axios from "axios";

export const dataSource = axios.create({
  baseURL: "https://fakestoreapi.com",
});
