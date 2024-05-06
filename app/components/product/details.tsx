import { Divider } from '@nextui-org/react';
import { notFound } from 'next/navigation';
import Service from '@/api-services/services/service';
import ProductTabs from './product-tabs';
import Keys from './keys';
import ProductImages from './images';

export default async function Details({ productId }: { productId: string }) {
  const service = new Service();
  const { product, applications, equivalences } = await service.catalog.getProductById({
    id: +productId,
  });

  if (!product) notFound();

  return (
    <>
      <ProductImages id={productId} alt={product.description} />
      <div className="self-start flex-1 xs:w-full">
        <Keys keys={product.sku.split(',')} />
        <h1 className="text-xl mb-2">{product.description}</h1>
        <h2 className="text-base mb-2">{product.brand}</h2>
        <Divider className="mt-1 mb-2 bg-secondary dark:bg-primary" />
        <div className="flex w-full flex-col">
          <ProductTabs applications={applications} equivalences={equivalences} />
        </div>
      </div>
    </>
  );
}
