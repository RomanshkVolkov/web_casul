import { Skeleton } from '@nextui-org/react';

const ProductSkeleton = () => {
   return (
      <Skeleton>
         <div className="w-full max-w-[500px] rounded-md">
            <div className="rounded-md w-[500px] h-[500px]" />
         </div>
      </Skeleton>
   );
};

export default ProductSkeleton;
