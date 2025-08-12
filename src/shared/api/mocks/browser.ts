import { setupWorker } from "msw/browser"
import { storiesHandlers } from "./handlers/story"
import { authHandlers } from "./handlers/auth"

export const worker = setupWorker(...storiesHandlers, ...authHandlers)
