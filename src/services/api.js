import axios from "axios";

const api = axios.create({
  baseURL: "https://boralabackend.onrender.com",
});

export { api };
