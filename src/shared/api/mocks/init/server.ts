import { server } from "../server"

export function initServerSideMocks() {
   if (process.env.NEXT_PUBLIC_ENABLE_MOCKS === "true") {
      server.listen({
         onUnhandledRequest(req, print) {
            if (!req.url.startsWith(`${process.env.NEXT_PUBLIC_API_URL}/_next`)) {
               return
            }
            return print.warning()
         },
      })
   }
}
