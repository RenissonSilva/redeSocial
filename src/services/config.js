import axios from "axios";

export const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: { 'Content-Type': 'application/json',
        post: { 'Content-type': 'application/x-www-form-urlencoded'} }
})