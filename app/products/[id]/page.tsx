import { Suspense } from 'react';
import { Card, CardHeader } from '@nextui-org/react';
import ProductSkeleton from '@/app/components/product/skeleton';
import Details from '@/app/components/product/details';

export default function Product({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="flex py-12 px-28 bg-background">
      <div className="container">
        <Card>
          <CardHeader className="flex gap-3 p-8 items-stretch">
            <Suspense fallback={<ProductSkeleton />}>
              <Details productId={id} />
            </Suspense>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
