import { Card, Skeleton } from '@nextui-org/react';

export default function ProductCardSkeleton() {
  return (
    <Card className="w-full p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-[227.133px] rounded-lg bg-default-300" />
      </Skeleton>
      <div className="mt-2 p-2 grid grid-cols-1 gap-4">
        <Skeleton className="w-20 rounded-lg col-span-1">
          <div className="h-2 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg col-span-1">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg col-span-1">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>
  );
}
