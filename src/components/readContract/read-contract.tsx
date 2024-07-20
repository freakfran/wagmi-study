'use client'
import ReadForm from "@/components/readContract/read-form";
import ReadResult from "@/components/readContract/read-result";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {readErc20Schema} from "@/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {erc20Abi} from "viem";
import {useReadContract} from "wagmi";
import {useState} from "react";
import {ReadSkeleton} from "@/components/readContract/read-skeleton";

export default function ReadContract() {
    const [
        contractAddress,
        setContractAddress
    ] = useState<`0x${string}`>();

    const [
        functionName,
        setFunctionName
    ] = useState<"symbol" | "totalSupply" | "name" | "balanceOf" | "allowance" | "decimals" | undefined>();

    const [
        args,
        setArgs
    ] = useState('');


    // 读取多个合约
    // const {
    //     data: contractData
    //     , error: contractError
    //     , isPending: isContractPending
    //     , isSuccess: isContractSuccess
    //     , isLoading: isContractLoading
    // } = useReadContracts({
    //     contracts: [
    //         {
    //             abi: erc20Abi,
    //             functionName: 'totalSupply',
    //             address: contractAddress
    //         },
    //         {
    //             abi: erc20Abi,
    //             functionName: 'name',
    //             address: contractAddress
    //         },
    //     ],
    //     query: {
    //         enabled: !!contractAddress
    //     }
    //
    // })
    // const [totalSupply, name] = contractData || [];

    //读取单个合约
    const {
        data
        , error
        , isLoading
    } = useReadContract(
        {
            abi: erc20Abi,
            functionName: functionName,
            address: contractAddress,
            args: args.trim() === '' ? undefined : args.split(',') as [`0x${string}`],
            query: {
                enabled: !!functionName && !!contractAddress
            }
        }
    )

    const form = useForm<z.infer<typeof readErc20Schema>>({
        resolver: zodResolver(readErc20Schema),
    })

    async function onSubmit(values: z.infer<typeof readErc20Schema>) {
        setContractAddress(values.contractAddress as `0x${string}`);
        setFunctionName(values.functionName)
        if (values.args) {
            setArgs(values.args)
        }
    }

    return (
        <div className="w-full flex flex-row justify-center bg-yellow-300">
            <ReadForm form={form} isPending={isLoading} onSubmit={onSubmit}/>
            {
                isLoading ?
                    <ReadSkeleton/>
                    :
                    <ReadResult functionName={functionName!} result={data?.toString()} error={error}/>
            }

        </div>

    )
}