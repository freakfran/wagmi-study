import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import DisconnectButton from "@/components/connectWallet/disconnect-button";

interface AccountCardProps {
    address: `0x${string}`
    ensAvatar?: string
    ensName?: string
    chain?: string
    balance?: string
}

export function AccountCard({address, ensAvatar, ensName,chain,balance} : AccountCardProps) {

    return (
        <Card className="flex flex-col items-center p-2">
            <CardHeader>
                <CardTitle>钱包信息:</CardTitle>
                {ensName && <CardTitle>{ensName}</CardTitle>}
            </CardHeader>
            <CardContent className="grid gap-4">
                {ensAvatar && <Image alt="ENS Avatar" src={ensAvatar}/>}
                <span>链:{chain}</span>
                <span>地址:{address}</span>
                <span>余额:{balance}</span>
            </CardContent>
            <DisconnectButton/>
        </Card>


    )
}