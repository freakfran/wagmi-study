'use client'
import {WagmiProvider} from 'wagmi'
import React from "react";
import {wagmiConfig} from "@/config/wagmi";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({children}: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}