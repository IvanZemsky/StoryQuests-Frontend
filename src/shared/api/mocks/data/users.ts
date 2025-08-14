import { components } from "../../schema/generated"

export const mockUsers: components["schemas"]["User"][] = [
   {
      id: "1",
      login: "User1",
   },
   {
      id: "2",
      login: "User2",
   },
]

export const userPasswords = new Map<string, string>()

userPasswords.set("User1", "1234")
userPasswords.set("User2", "1234")