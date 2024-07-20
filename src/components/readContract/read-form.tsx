import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {SubmitHandler, UseFormReturn} from "react-hook-form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

interface ReadErc20FormProps {
    form: UseFormReturn<any>,
    isPending: boolean,
    onSubmit: SubmitHandler<any>
}

export default function ReadForm({form, isPending, onSubmit}: ReadErc20FormProps) {

    return (
        <Card className="m-2 2xl:w-1/3">
            <CardHeader>
                <CardTitle>读ERC20合约</CardTitle>
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
                                            <SelectItem value='totalSupply'>totalSupply</SelectItem>
                                            <SelectItem value='name'>name</SelectItem>
                                            <SelectItem value='symbol'>symbol</SelectItem>
                                            <SelectItem value='balanceOf'>balanceOf</SelectItem>
                                            <SelectItem value='decimals'>decimals</SelectItem>
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
                            {isPending ? '查询中...' : '查询'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>

    );

}