import { setupServer } from "msw/node"
import { storiesHandlers } from "./handlers/story"
import { authHandlers } from "./handlers/auth"

export const server = setupServer(...storiesHandlers, ...authHandlers)
