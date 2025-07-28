import {QueryClient as ApiClient} from "curry-query";

export const API = new ApiClient({
   baseURL: "http://localhost:3000/api",
})