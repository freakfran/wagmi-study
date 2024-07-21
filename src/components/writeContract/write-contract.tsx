'use client'

import {useAccount, useWaitForTransactionReceipt, useWriteContract} from "wagmi";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {writeErc20Schema} from "@/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {erc20Abi} from "viem";
import WriteForm from "@/components/writeContract/write-form";

export default function WriteContract() {
    const {isConnected} = useAccount();

    const {
        data: hash
        , writeContract
        , isPending
        , error
    } = useWriteContract()

    const {isLoading: isConfirming, isSuccess: isConfirmed} =
        useWaitForTransactionReceipt({
            hash,
        })

    const form = useForm<z.infer<typeof writeErc20Schema>>({
        resolver: zodResolver(writeErc20Schema),
    })

    async function onSubmit(values: z.infer<typeof writeErc20Schema>) {
        writeContract({
            address: values.contractAddress as `0x${string}`,
            abi: erc20Abi,
            functionName: values.functionName,
            args: values.args?.split(',') as [`0x${string}`, bigint],
        })
    }

    return (
        <>
            {isConnected ?
                <div className="w-full bg-green-400 flex justify-center">
                    <WriteForm
                        form={form}
                        isPending={isPending}
                        onSubmit={onSubmit}
                        isConfirming={isConfirming}
                        isConfirmed={isConfirmed}
                        error={error}
                        hash={hash}
                    />
                </div> : null}
        </>
    );
}