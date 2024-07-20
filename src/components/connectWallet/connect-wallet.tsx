'use client'
import {useAccount, useBalance, useEnsAvatar, useEnsName} from "wagmi";
import {AccountCard} from "@/components/connectWallet/account-card";
import {WalletOptions} from "@/components/connectWallet/wallet-options";
import SendTransaction from "@/components/connectWallet/send-transaction";

export default function ConnectWallet() {
    // 获取当前连接的账户信息
    const {isConnected,address,chain} = useAccount()
    // 获取账户余额
    const balance = useBalance({address})
    // ENS
    const {data: ensName} = useEnsName({address})
    const {data: ensAvatar} = useEnsAvatar({name: ensName!})
    if (isConnected){
        return (
            <div className="flex flex-col items-center bg-blue-600 text-white p-2 rounded-md">
                <AccountCard
                    address={address!}
                    ensName={ensName!}
                    ensAvatar={ensAvatar!}
                    chain={chain?.name}
                    balance={balance.data?.value.toString() + 'wei'}
                />
                <SendTransaction/>
            </div>
        )
    }
    return (
        <div>
            <WalletOptions/>
        </div>
    )

}