import { Suspense } from 'react';
import { Card, CardHeader } from '@nextui-org/react';
import ProductSkeleton from '@/app/components/product/skeleton';
import Details from '@/app/components/product/Details';

export default function Product({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="flex py-10 xs:px-4 md:py-10 md:px-24 lg:py-12 lg:px-28 bg-background">
      <div className="container xs:max-w-full">
        <Card>
          <CardHeader className="flex gap-3 p-8 items-stretch flex-row lg:flex-row xs:flex-col xs:items-center">
            <Suspense fallback={<ProductSkeleton />}>
              <Details productId={id} />
            </Suspense>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
