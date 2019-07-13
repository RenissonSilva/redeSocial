import axios from "axios";

export const http = axios.create({
    baseURL: 'http://app.local/api/',
    headers: { 'Content-Type': 'application/json',
        post: { 'Content-type': 'application/x-www-form-urlencoded'} }
})