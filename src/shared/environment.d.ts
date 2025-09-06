declare global {
   namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_API_URL: string
        NEXT_PUBLIC_ENABLE_MOCKS: "true" | "false"
      }
   }
}

export {};
