'use client';
import { usePathname } from 'next/navigation';
import { Button, Input, Tooltip } from '@nextui-org/react';
import { ChangeEvent, useState } from 'react';
import { TbSearch } from 'react-icons/tb';

import { url } from '@/app/url/url-utils';
import useSearchForm from '@/lib/hooks/useSearchForm';

interface Props {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export default function InputSearchBar({ startContent, endContent }: Props) {
  const pathname = usePathname();
  const { handler } = useSearchForm();

  const [search, setSearch] = useState<string>('');
  const isCatalogSite = pathname === url.catalog;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    handler(search);
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
        className="sm:w-[620px] md:w-[580px] center-diagonal text-center focus:outline-none"
        value={search}
        onChange={(e) => handleChange(e)}
        placeholder="¿Qué estás buscando?"
        startContent={!isCatalogSite && startContent}
        endContent={!isCatalogSite && endContent}
        onKeyDown={onkeydownForSearch}
      />

      <div>
        <Tooltip content="Buscar" placement="bottom">
          <Button className="bg-transparent !px-0 !w-[24px]" onClick={handleSearch}>
            <TbSearch size={24} className="text-secondary" />
          </Button>
        </Tooltip>
      </div>
    </>
  );
}
