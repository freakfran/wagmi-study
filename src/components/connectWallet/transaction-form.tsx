import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {BaseError} from "viem";
import React from "react";
import {SubmitHandler, UseFormReturn} from "react-hook-form";
import {CardHeader} from "@/components/ui/card";


interface TransactionFormProps {
    form: UseFormReturn<any>,
    isPending: boolean,
    isConfirming: boolean,
    isConfirmed: boolean
    hash: `0x${string}` | undefined,
    error: Error | null,
    onSubmit: SubmitHandler<any>
}

export default function TransactionForm({form, isPending, isConfirming, isConfirmed, hash, error, onSubmit}: TransactionFormProps) {

    return (
        <Form {...form}>
            <form className="w-1/4 p-4 bg-black rounded-md m-2" onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader className="text-center">
                    <h2 className="text-xl font-bold">发送ETH</h2>
                </CardHeader>
                <FormField
                    control={form.control}
                    name="address"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>地址</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="0x4654...a5sf" {...field} />
                            </FormControl>
                            {/*<FormDescription>*/}
                            {/*    This is your public display name.*/}
                            {/*</FormDescription>*/}
                            <FormMessage/>
                        </FormItem>
                    )}
                >
                </FormField>

                <FormField
                    control={form.control}
                    name="amount"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>数量</FormLabel>
                            <FormControl>
                                <Input className="text-black" type="number" placeholder="0.05" {...field} />
                            </FormControl>
                            {/*<FormDescription>*/}
                            {/*    This is your public display name.*/}
                            {/*</FormDescription>*/}
                            <FormMessage/>
                        </FormItem>
                    )}
                >
                </FormField>

                <Button
                    className="w-full mt-4"
                    disabled={isPending}
                    type="submit">
                    {isPending ? '等待确认...' : '发送'}
                </Button>
                {hash &&
                    <div>
                        <span className="break-words">Transaction Hash: {hash}</span>
                    </div>
                }
                {isConfirming && <div>Waiting for confirmation...</div>}
                {isConfirmed && <div>Transaction confirmed.</div>}
                {error && (
                    <div className="text-red-500">Error: {(error as BaseError).shortMessage || error.message}</div>
                )}
            </form>
        </Form>
    );
}