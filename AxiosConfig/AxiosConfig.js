import axios from "axios";
// const url = "https://expert-portal-server.herokuapp.com";
const url = "http://localhost:4000";

const instance = axios.create({
    baseURL: url,
});

export default instance;
