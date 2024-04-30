import { Divider } from '@nextui-org/react';
import ProductTabs from './product-tabs';
import Keys from './keys';
import CatalogAPI from '@/api/services/catalog-service';

const api = new CatalogAPI();

export default async function Details({ productId }: { productId: string }) {
   const { product } = await api.getProductById({ id: +productId });

   return (
      <>
         <Keys keys={product.sku.split(',')} />
         <h1 className="text-xl mb-2">{product.description}</h1>
         <Divider className="mt-1 mb-2 bg-secondary dark:bg-primary" />
         <div className="flex w-full flex-col">
            <ProductTabs />
         </div>
      </>
   );
}
