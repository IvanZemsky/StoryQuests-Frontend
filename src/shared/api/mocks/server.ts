import { setupServer } from "msw/node"
import { storiesHandlers } from "./handlers/story"

export const server = setupServer(...storiesHandlers)
