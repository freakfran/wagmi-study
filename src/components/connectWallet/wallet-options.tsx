'use client'
import * as React from 'react'
import {Connector, useConnect} from 'wagmi'
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";

export function WalletOptions() {
    const {connectors, connect} = useConnect()

    return (
        <div className="flex justify-center">
            {connectors.map((connector) => (
                <WalletOption key={connector.uid}
                              connector={connector}
                              onClick={() => connect({connector})}/>
            ))}
        </div>

    )
}

function WalletOption({
                          connector,
                          onClick,
                      }: {
    connector: Connector
    onClick: () => void
}) {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        (async () => {
            const provider = await connector.getProvider()
            setReady(!!provider)
        })()
    }, [connector])

    return (
        <Button className="m-2" disabled={!ready} onClick={onClick}>
            {connector.name}
        </Button>
    )
}