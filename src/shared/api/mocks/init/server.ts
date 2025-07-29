import { server } from "../server"

export function initServerSideMocks() {
   if (process.env.NEXT_PUBLIC_ENABLE_MOCKS) {
      server.listen()
   }
}
