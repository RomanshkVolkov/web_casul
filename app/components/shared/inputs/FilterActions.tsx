'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import ButtonAsync from './ButtonAsync';
import { clearFilters } from '@/lib/store/catalog/catalog-slice';
import { fetchSearchProductsByFilters } from '@/lib/store/catalog/catalog-actions';

export default function FilterActions() {
   const { filters } = useAppSelector((state) => state.catalog);
   const dispatch = useAppDispatch();
   const handleClear = async () => {
      dispatch(clearFilters());
   };

   const handleSearch = async () => {
      if (filters.brand === 0) {
         return alert('Debes seleccionar al menos un filtro de marca');
      }
      dispatch(fetchSearchProductsByFilters({ filters }));
   };

   return (
      <div className="flex justify-around mt-4">
         <ButtonAsync asyncAction={handleClear}>
            <span>Limpiar</span>
         </ButtonAsync>
         <ButtonAsync asyncAction={handleSearch}>
            <span>Buscar</span>
         </ButtonAsync>
      </div>
   );
}
