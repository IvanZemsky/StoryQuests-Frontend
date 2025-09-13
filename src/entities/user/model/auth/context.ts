"use client"

import { createContext, useContext } from "react"
import { Session } from "../types"

export const AuthContext = createContext<{ session: Session | null }>({
   session: null,
})

export function useAuthContext() {
   const context = useContext(AuthContext)

   if (!context) {
      throw new Error("All sub components of AuthContext must be wrapped in AuthContext")
   }

   return context
}
