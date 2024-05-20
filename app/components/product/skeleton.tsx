import { Chip, Divider, Skeleton } from "@nextui-org/react";

const ProductSkeleton = () => {
  return (
    <>
      <div className="xs:w-full md:w-auto">
        <Skeleton className="mb-2 rounded-md">
          <div className="flex basis-full items-center justify-center xs:h-[250px] xs:max-w-[250px]  md:h-[500px] md:max-w-[500px]">
            <div className="h-full rounded-md" />
          </div>
        </Skeleton>
        <div className="flex gap-2">
          <Skeleton className="rounded-md">
            <div className="h-[80px] w-[80px] max-w-[80px]" />
          </Skeleton>
          <Skeleton className="rounded-md">
            <div className="h-[80px] w-[80px] max-w-[80px]" />
          </Skeleton>
        </div>
      </div>

      <div className="flex-1 self-start">
        <Skeleton className="mb-1 inline-block rounded-full">
          <Chip>MR1408110</Chip>
        </Skeleton>
        <Skeleton className="mb-1 rounded-md">
          <div className="min-h-[30px]" />
        </Skeleton>
        <Skeleton className="mb-1 inline-block rounded-md">
          <div className="min-h-[30px] min-w-[260px]" />
        </Skeleton>
        <Skeleton className="mb-2 max-w-[184px] rounded-md">
          <div className="min-h-[24px]" />
        </Skeleton>
        <Divider className="mb-2 mt-1 bg-secondary dark:bg-primary" />
        <div className="mb-3 flex gap-2">
          <Skeleton className="w-full rounded-md">
            <div className="min-h-[32px] w-full" />
          </Skeleton>
          <Skeleton className="w-full rounded-md">
            <div className="min-h-[32px] w-full" />
          </Skeleton>
        </div>
        <Skeleton className="rounded-md">
          <div className="min-h-[250px]" />
        </Skeleton>
      </div>
    </>
  );
};

export default ProductSkeleton;
