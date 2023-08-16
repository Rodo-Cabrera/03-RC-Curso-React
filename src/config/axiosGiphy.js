import axios from "axios";


const urlCategoriesApi = import.meta.env.VITE_GIPHY_BASE_URL;


export const giphyAxios = axios.create({
  baseURL: urlCategoriesApi,
  timeout: 15000,
  headers: {
    "Content-Type": 'application/json'
  }
})