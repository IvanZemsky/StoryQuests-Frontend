import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_BASE_URL
console.log(API_URL)

export const API = axios.create({
   baseURL: API_URL,
   withCredentials: true,
   headers: {
      "Content-Type": "application/json",
   },
})
