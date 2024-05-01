/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import ProductCard from '@/app/components/shared/ProductCard';
import ProductCardSkeleton from '@/app/components/shared/ProductCardSkeleton';
import { serializerProductOrdering } from '@/app/utils/serializers/catalog-serializer';
import {
  fetchSearchProducts,
  fetchSearchProductsByFilters,
} from '@/lib/store/catalog/catalog-actions';
import { setPagination } from '@/lib/store/catalog/catalog-slice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { Pagination } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ContainerProducts() {
  const searchParams = useSearchParams();
  const { products, pagination, ordering, loading, filters, pendingFetch } = useAppSelector(
    (state) => state.catalog
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchParams.has('search') && pendingFetch) {
      const search = searchParams.get('search') as string;
      dispatch(fetchSearchProducts({ search }));
    }
    if (searchParams.has('brand') && pendingFetch) {
      dispatch(fetchSearchProductsByFilters({ filters }));
    }
  }, [searchParams, pendingFetch]);

  const handlePagination = (page: number) => {
    dispatch(setPagination(page));
  };

  return (
    <>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
        {loading
          ? Array.from({ length: pagination.limit }).map((_, index) => (
              <ProductCardSkeleton key={`product_skeleton_card_${index}`} />
            ))
          : serializerProductOrdering(products, ordering)
              .slice(pagination.from, pagination.to)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.description}
                  shortInfo={product.sku}
                  brand={product.brand}
                  image={product.image}
                />
              ))}
      </div>
      <div className="flex justify-end mt-4">
        <Pagination
          classNames={{ cursor: 'bg-primary text-black' }}
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
