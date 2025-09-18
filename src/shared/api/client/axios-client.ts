import axios from "axios"

export function getBaseUrl() {
   if (typeof window === "undefined") {
      return process.env.API_INTERNAL_URL ?? "http://backend:8080"
   } else {
      return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080"
   }
}

export const API = axios.create({
   baseURL: getBaseUrl(),
   withCredentials: true,
   headers: {
      "Content-Type": "application/json",
   },
})
