import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:3001`
    //baseURL: `https://git.heroku.com/sate-api-homolog.git`
});

export default api;