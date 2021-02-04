import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:3030`
    //baseURL: `https://sate-api-homolog.herokuapp.com`
});

export default api;