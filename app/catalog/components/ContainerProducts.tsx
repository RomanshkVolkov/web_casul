'use client';

import ProductCard from '@/app/components/ProductCart';
import { serializerProductOrdering } from '@/app/utils/serializers/catalog-serializer';
import { setPagination } from '@/lib/store/catalog/catalog-slice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { Pagination } from '@nextui-org/react';

interface Props {}
export default function ContainerProducts(props: Props) {
   const {} = props;
   const { products, pagination, ordering } = useAppSelector((state) => state.catalog);
   const dispatch = useAppDispatch();

   const handlePagination = (page: number) => {
      dispatch(setPagination(page));
   };

   return (
      <>
         <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
            {serializerProductOrdering(products, ordering)
               .slice(pagination.from, pagination.to)
               .map((product) => (
                  <ProductCard
                     key={product.id}
                     id={product.id}
                     title={product.description}
                     shortInfo={product.sku}
                     image={product.image}
                  />
               ))}
         </div>
         <div className="flex justify-end mt-4">
            <Pagination
               onChange={(page) => handlePagination(page)}
               isCompact
               showControls
               showShadow
               total={pagination.pages}
               page={pagination.page}
               initialPage={1}
            />
         </div>
      </>
   );
}
