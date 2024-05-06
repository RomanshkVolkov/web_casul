import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useQueryString } from './useQueryString';
import { toast } from 'sonner';
import { useAppDispatch } from '../store/hooks';
import { setPendingFetch } from '../store/catalog/catalog-slice';
import { url } from '@/app/url/url-utils';

export default function useSearchForm() {
  const { push, replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const { replaceAllParams } = useQueryString(searchParams);

  const handler = (search: string) => {
    if (search.length < 3) {
      toast.error('La búsqueda debe tener al menos 3 caracteres');
    }

    dispatch(setPendingFetch(true));
    const query = replaceAllParams('search', search);
    const newUrl = `${url.catalog}?${query}`;

    if (pathname === url.catalog) {
      replace(newUrl);
    } else {
      push(newUrl);
    }
  };

  return { handler };
}
