import { Skeleton } from "@/components/ui/skeleton"

export function ReadSkeleton() {
    return (
        <div className="flex flex-col space-y-3 m-2 2xl:w-1/3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}