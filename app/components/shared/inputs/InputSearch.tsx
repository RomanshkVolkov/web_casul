'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button, Image, Input, Tooltip } from '@nextui-org/react';
import { ChangeEvent, useState } from 'react';
import { TbSearch } from 'react-icons/tb';

import { url } from '@/app/url/url-utils';
import { toast } from 'sonner';
import { useQueryString } from '@/lib/hooks/useQueryString';
import { useAppDispatch } from '@/lib/store/hooks';
import { setPendingFetch } from '@/lib/store/catalog/catalog-slice';

interface Props {
   children: React.ReactNode;
}

export default function InputSearch({ children }: Props) {
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const dispatch = useAppDispatch();
   const { replaceAllParams } = useQueryString(searchParams);

   const [search, setSearch] = useState<string>('');

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
   };

   const handleSearch = async () => {
      // Primero, validar la longitud de la búsqueda
      if (search.length < 3) {
         return toast.error('La búsqueda debe tener al menos 3 caracteres');
      }
      const query = replaceAllParams('search', search);

      const newUrl = `${url.catalog}?${query}`;
      dispatch(setPendingFetch(true));
      if (pathname === url.catalog) {
         router.replace(newUrl);
      } else {
         router.push(newUrl);
      }
   };

   const onkeydownForSearch = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
         handleSearch();
      }
   };

   return (
      <>
         <Input
            id="search_input"
            className="w-[620px] md:inline sm:hidden  center-diagonal text-center focus:outline-none"
            value={search}
            onChange={(e) => handleChange(e)}
            placeholder="¿Qué estás buscando?"
            endContent={children}
            onKeyDown={onkeydownForSearch}
         />

         <div className="">
            <Tooltip content="Buscar" placement="bottom">
               <Button className="bg-transparent !px-0 !w-[24px]" onClick={handleSearch}>
                  <TbSearch size={24} className="text-secondary" />
               </Button>
            </Tooltip>
         </div>
      </>
   );
}
