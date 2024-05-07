import { Chip, Divider, Skeleton } from '@nextui-org/react';

const ProductSkeleton = () => {
  return (
    <>
      <div className="xs:w-full md:w-auto">
        <Skeleton className="rounded-md mb-2">
          <div className="xs:max-w-[250px] xs:h-[250px] md:max-w-[500px] md:h-[500px basis-full flex justify-center items-center">
            <div className="h-full rounded-md" />
          </div>
        </Skeleton>
        <div className="flex gap-2">
          <Skeleton className="rounded-md">
            <div className="max-w-[80px] w-[80px] h-[80px]" />
          </Skeleton>
          <Skeleton className="rounded-md">
            <div className="max-w-[80px] w-[80px] h-[80px]" />
          </Skeleton>
        </div>
      </div>

      <div className="self-start flex-1">
        <Skeleton className="rounded-full mb-1 inline-block">
          <Chip>MR1408110</Chip>
        </Skeleton>
        <Skeleton className="mb-1 rounded-md">
          <div className="min-h-[30px]" />
        </Skeleton>
        <Skeleton className="mb-1 rounded-md inline-block">
          <div className="min-w-[260px] min-h-[30px]" />
        </Skeleton>
        <Skeleton className="mb-2 rounded-md max-w-[184px]">
          <div className="min-h-[24px]" />
        </Skeleton>
        <Divider className="mt-1 mb-2 bg-secondary dark:bg-primary" />
        <div className="flex gap-2 mb-3">
          <Skeleton className="w-full rounded-md">
            <div className="w-full min-h-[32px]" />
          </Skeleton>
          <Skeleton className="w-full rounded-md">
            <div className="w-full min-h-[32px]" />
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
