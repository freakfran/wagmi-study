import {z} from "zod";

export const sendTransactionSchema = z.object({
    address: z.string().startsWith("0x", "Address must start with 0x"),
    amount: z.string().regex(/^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$|^0$|^[0-9]\.[0-9][0-9]?$/
        , "Amount must be a number with up to 2 decimal places")
})

export const Erc20Readable = z.enum(["totalSupply", "name", "symbol", "balanceOf","decimals"])
export const Erc20Writable = z.enum(["approve", "transfer", "transferFrom"])

export const readErc20Schema = z.object({
    contractAddress: z.string().startsWith("0x", "Address must start with 0x"),
    functionName: Erc20Readable,
    args: z.string().optional(),
})

export const writeErc20Schema = z.object({
    contractAddress: z.string().startsWith("0x", "Address must start with 0x"),
    functionName: Erc20Writable,
    args: z.string().optional(),
})