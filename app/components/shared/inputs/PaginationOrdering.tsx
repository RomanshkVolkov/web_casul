'use client';

import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import { Select, SelectItem, Tooltip } from '@nextui-org/react';
import { setLimitPagination, setOrdering } from '@/lib/store/catalog/catalog-slice';
import CatalogTypes from '@/types/catalog-types';

export default function PaginationOrdering() {
   const { pagination, ordering } = useAppSelector((state) => state.catalog);
   const dispatch = useAppDispatch();

   const orderingOptions = [
      { value: 'default', label: 'Por defecto' },
      { value: 'asc', label: 'Nombre (A-Z)' },
      { value: 'desc', label: 'Nombre (Z-A)' },
   ];

   const itemsPerPageOptions = [
      { value: 8, label: '8' },
      { value: 16, label: '16' },
      { value: 24, label: '24' },
      { value: 32, label: '32' },
   ];

   const handleChangeOrdering = (value: string) => {
      dispatch(setOrdering(value as CatalogTypes['CatalogOrdering']));
   };

   const handleChangeItemsPerPage = (value: number) => {
      if (value === 0) return;
      dispatch(setLimitPagination(value));
   };

   return (
      <div className="flex justify-end w-full p-4 gap-4">
         <div className="w-40 flex col-span-1">
            <Tooltip content="Ordenar por" placement="left">
               <Select
                  placeholder="Ordenar por"
                  aria-label="ordering filter"
                  defaultSelectedKeys={[ordering]}
                  value={ordering}
                  onChange={(e) => handleChangeOrdering(e.target.value)}
               >
                  {orderingOptions.map((option) => (
                     <SelectItem key={option.value} value={option.value}>
                        {option.label}
                     </SelectItem>
                  ))}
               </Select>
            </Tooltip>
         </div>
         <div className="flex col-span-1/2">
            <Tooltip content="Mostrar" placement="left">
               <Select
                  placeholder="Mostrar"
                  className="w-[100px]"
                  aria-label="items per page filter"
                  defaultSelectedKeys={[pagination.limit]}
                  value={pagination.limit}
                  onChange={(e) => handleChangeItemsPerPage(Number(e.target.value))}
               >
                  {itemsPerPageOptions.map((option) => (
                     <SelectItem key={option.value} value={option.value}>
                        {option.label}
                     </SelectItem>
                  ))}
               </Select>
            </Tooltip>
         </div>
      </div>
   );
}
