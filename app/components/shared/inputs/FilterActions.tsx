'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import ButtonAsync from './ButtonAsync';
import { clearFilters, setPendingFetch } from '@/lib/store/catalog/catalog-slice';
import { toast } from 'sonner';
import { usePathname, useRouter } from 'next/navigation';

export default function FilterActions() {
  const { filters } = useAppSelector((state) => state.catalog);
  const router = useRouter();
  const pathname = usePathname();

  const dispatch = useAppDispatch();
  const handleClear = async () => {
    dispatch(clearFilters());
    router.replace('/catalog');
  };

  const handleSearch = async () => {
    const { brand, model, family, year } = filters;
    if (brand === 0 || isNaN(brand as number) || brand === null) {
      toast.error('Debes seleccionar al menos una marca');
      return;
    }
    dispatch(setPendingFetch(true));
    const params = new URLSearchParams();
    params.set('brand', brand.toString());
    params.set('model', (model || 0).toString());
    params.set('family', (family || 0).toString());
    params.set('year', (year || 0).toString());
    const query = params.toString();
    if (pathname === '/catalog') {
      router.replace(`/catalog?${query}`);
    } else {
      router.push(`/catalog?${query}`);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-2">
      <ButtonAsync asyncAction={handleClear}>
        <span>Limpiar</span>
      </ButtonAsync>
      <ButtonAsync asyncAction={handleSearch}>
        <span>Buscar</span>
      </ButtonAsync>
    </div>
  );
}
