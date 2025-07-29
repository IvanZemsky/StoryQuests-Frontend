import { setupWorker } from "msw/browser"
import { storiesHandlers } from "./handlers/story"

export const worker = setupWorker(...storiesHandlers)
