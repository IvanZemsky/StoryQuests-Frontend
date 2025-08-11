"ues client"

import { initQueryClient } from "@/src/shared/api";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function ReactQueryClientProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(initQueryClient)

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}