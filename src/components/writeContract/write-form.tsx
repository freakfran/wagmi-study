import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {SubmitHandler, UseFormReturn} from "react-hook-form";

interface WriteErc20FormProps {
    form: UseFormReturn<any>,
    isPending: boolean,
    onSubmit: SubmitHandler<any>,
    isConfirming: boolean,
    isConfirmed: boolean,
    hash: `0x${string}` | undefined,
    error: Error | null,
}


export default function WriteForm({form, isPending, onSubmit,isConfirming,isConfirmed,hash,error}: WriteErc20FormProps) {
    return (
        <Card className="m-2 2xl:w-1/3">
            <CardHeader>
                <CardTitle>写ERC20合约</CardTitle>
                <CardDescription>填写合约信息</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className="" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="contractAddress"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>合约地址</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="0x4654...a5sf" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        >
                        </FormField>
                        <FormField
                            control={form.control}
                            name="functionName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>函数名</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="选择函数名"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='approve'>approve</SelectItem>
                                            <SelectItem value='transfer'>transfer</SelectItem>
                                            <SelectItem value='transferFrom'>transferFrom</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <FormField
                            control={form.control}
                            name="args"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>参数</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="a,b" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        没有参数时不填，多个参数用逗号隔开
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <Button
                            className="w-full mt-4"
                            disabled={isPending}
                            type="submit">
                            {isPending ? '交易中...' : '发起交易'}
                        </Button>
                    </form>
                </Form>
                <CardFooter>
                    <p>{isConfirming ? '交易确认中...' : null}</p>
                    <p>{isConfirmed ? '交易成功:' + hash : null}</p>
                    <p className="break-words">{error ? error.message : null}</p>
                </CardFooter>
            </CardContent>
        </Card>
    );
}