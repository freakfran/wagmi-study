import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import {useReadContract, useReadContracts} from "wagmi";
import {erc20Abi} from "viem";
import {ReadSkeleton} from "@/components/readContract/read-skeleton";

interface ReadErc20ResultProps {
    functionName: string;
    result: any;
    error: Error | null;
}

export default function ReadResult({functionName, result, error}: ReadErc20ResultProps) {
    return (
        <Card className="m-2 2xl:w-1/3">
            <CardHeader>
                <CardTitle>查询结果</CardTitle>
            </CardHeader>
            <CardContent>
                {
                    error ?
                        <h3>error: {error.message}</h3>
                        :
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="functionName">{functionName}</Label>
                                    <Input id="functionName" disabled={true} value={result}/>
                                </div>
                            </div>
                        </form>
                }

            </CardContent>
        </Card>
    );
}