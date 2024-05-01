import { Divider } from '@nextui-org/react';
import { notFound } from 'next/navigation';
import Service from '@/api/services/service';
import Image from 'next/image';
import ProductTabs from './product-tabs';
import Keys from './Keys';

const service = new Service();

export default async function Details({ productId }: { productId: string }) {
  const { product, applications, equivalences } = await service.catalog.getProductById({
    id: +productId,
  });

  if (!product) notFound();

  return (
    <>
      <div className="max-w-[500px] h-[500px] basis-full flex justify-center items-center rounded-md bg-white border">
        <Image
          className="rounded-md"
          alt="nextui logo"
          width={500}
          height={500}
          src={product.image}
        />
      </div>
      <div className="self-start flex-1">
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
