import { fetchClient, mockMiddleware } from "@/src/shared/api";

export async function ProfilePage() {
   await mockMiddleware(fetchClient)
   
   return ( <div></div> );
}