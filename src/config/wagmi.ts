import {http, createConfig} from 'wagmi'
import {mainnet, sepolia} from 'wagmi/chains'
import {injected} from "@wagmi/core";
import {metaMask, safe, walletConnect} from "@wagmi/connectors";

const projectId = process.env.WALLECT_CONNECT_PROJECT_ID!;

export const wagmiConfig = createConfig({
    chains: [mainnet, sepolia],
    ssr: true,
    connectors: [
        injected(),
        walletConnect({projectId}),
        metaMask(),
        safe(),
    ],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
    },
})