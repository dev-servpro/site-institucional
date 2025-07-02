import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "authorization": `${process.env.NEXT_PUBLIC_API_AUTH}`,
  },
});

export { api };
