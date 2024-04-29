'use client';
import { useState } from 'react';
import Image from 'next/image';
import ButtonAsync from './shared/inputs/ButtonAsync';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Input } from '@nextui-org/react';
import WidgetFilters from './WidgetFilters';
import { useAppDispatch } from '@/lib/store/hooks';
import { fetchSearchProducts } from '@/lib/store/catalog/catalog-actions';

export default function SearchBar() {
   const dispatch = useAppDispatch();
   const [search, setSearch] = useState<string>('');

   const handleChange = (value: string) => {
      setSearch(value);
   };

   const handleSearch = async () => {
      if (search.length < 3) return alert('La búsqueda debe tener al menos 3 caracteres');
      await dispatch(fetchSearchProducts({ search }));
   };

   return (
      <div className="absolute bg-primary grid grid-cols-1 xl:w-[1000px] md:w-[720px] sm:w-full py-4 bottom-[-22px] center-diagonal">
         <div className="absolute w-full bottom-0">
            <div className="w-full flex justify-center">
               <div className="">
                  <ThemeSwitcher />
               </div>
               <Input
                  id="search_input"
                  className="w-[620px] md:inline sm:hidden  center-diagonal text-center focus:outline-none"
                  value={search}
                  onChange={(e) => handleChange(e.currentTarget.value)}
                  placeholder="¿Qué estás buscando?"
                  endContent={<WidgetFilters id="filters-button" />}
               />
               <div className="">
                  <ButtonAsync
                     className="bg-transparent !px-0 !w-[24px]"
                     asyncAction={handleSearch}
                  >
                     <Image src="/svg/search.svg" alt="clear" width={24} height={24} />
                  </ButtonAsync>
               </div>
            </div>
         </div>
      </div>
   );
}
