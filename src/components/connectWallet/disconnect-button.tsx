'use client'
import {useDisconnect} from "wagmi";
import {Button} from "@/components/ui/button";

export default function DisconnectButton() {
    const {disconnect} = useDisconnect()

    return (
        <Button
            variant="destructive"
            onClick={() => disconnect()}>
            断开连接
        </Button>
    )
}