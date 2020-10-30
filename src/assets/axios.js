import axios, { responseType } from "axios";

import { SERVER } from "./server";

const createInstance = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:3000/',
        withCredentials: true,
        responseType: 'json'
    });

    instance.interceptors.response.use(handleResponse, handleError)

    return instance;
};

const handleResponse = (res) => {
    return res.data
}

const handleError = (error) => {
    const { response, message } = error
    return "error"
  }

const request = createInstance();

export default request;