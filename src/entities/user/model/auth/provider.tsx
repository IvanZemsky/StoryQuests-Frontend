"use client"

import { Session } from "../types"
import { AuthContext } from "./context"

export function AuthContextProvider({
   value,
   children,
}: {
   value: { session: Session | null }
   children: React.ReactNode
}) {
   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
