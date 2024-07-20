'use client'
import React from "react";
import TransactionForm from "@/components/connectWallet/transaction-form";
import {z} from "zod";
import {useSendTransaction, useWaitForTransactionReceipt} from "wagmi";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {parseEther} from "viem";
import {sendTransactionSchema} from "@/schema";

export default function SendTransaction() {
    const {
        data: hash,
        error,
        isPending,
        sendTransaction
    } = useSendTransaction()

    const form = useForm<z.infer<typeof sendTransactionSchema>>({
        resolver: zodResolver(sendTransactionSchema),
    })

    async function onSubmit(values: z.infer<typeof sendTransactionSchema>) {
        sendTransaction({
            to: values.address as `0x${string}`,
            value: parseEther(values.amount.toString())
        });
    }

    const {isLoading: isConfirming, isSuccess: isConfirmed} = useWaitForTransactionReceipt({
        hash,
    })

    return (
        <div className="flex flex-row items-center justify-center w-full">
            <TransactionForm
                form={form}
                isPending={isPending}
                isConfirming={isConfirming}
                isConfirmed={isConfirmed}
                hash={hash} error={error}
                onSubmit={onSubmit}
            />

        </div>
    )
}