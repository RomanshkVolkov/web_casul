'use client';

import { useQueryString } from '@/lib/hooks/useQueryString';
import { setPendingFetch } from '@/lib/store/catalog/catalog-slice';
import { useAppDispatch } from '@/lib/store/hooks';
import { Button, Input } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { IoMdReturnLeft } from 'react-icons/io';
import { TbSearch } from 'react-icons/tb';
import { toast } from 'sonner';

export default function SearchContainer() {
  const pathname = usePathname();
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const { replaceAllParams } = useQueryString(searchParams);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSearch = () => {
    if (search.length < 3) {
      toast.error('La búsqueda debe tener al menos 3 caracteres');
    }

    dispatch(setPendingFetch(true));
    const query = replaceAllParams('search', search);
    const newUrl = `${pathname}?${query}`;

    if (pathname === '/catalog') {
      push(newUrl);
    } else {
      push(newUrl);
    }
    setIsOpen(false);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div>
        <Button onClick={() => setIsOpen(true)}>
          <TbSearch size={20} />
        </Button>
      </div>
      {isOpen && (
        <div className="fixed w-screen h-screen top-0 left-0 bg-background z-50">
          <div className="flex justify-between flex-col">
            <div className="h-3/4 bg-content1">
              <div></div>
            </div>
            <div className="p-2 bg-content1">
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleOnKeyDown}
                startContent={
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="px-1 min-w-fit bg-transparent"
                  >
                    <IoMdReturnLeft />
                  </Button>
                }
                endContent={
                  <Button onClick={handleSearch} className="px-1 min-w-fit bg-transparent">
                    <TbSearch />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
