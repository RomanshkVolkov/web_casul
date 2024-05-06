'use client';

import useSearchForm from '@/lib/hooks/useSearchForm';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { IoMdReturnLeft } from 'react-icons/io';
import { TbSearch } from 'react-icons/tb';

interface Props {
  type?: 'button' | 'input';
  widgetFiltersButton?: React.ReactNode;
}

export default function SearchContainer({ type, widgetFiltersButton }: Props) {
  const { handler } = useSearchForm();
  const [search, setSearch] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isButton = !type || type === 'button';
  const classNameContainer = isButton ? 'bg-content1' : 'bg-transparent w-full';

  const handleSearch = () => {
    handler(search);
    setIsOpen(false);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className={classNameContainer}>
        {isButton ? (
          <Button onClick={() => setIsOpen(true)}>
            <TbSearch size={20} />
          </Button>
        ) : (
          <Input
            placeholder="Buscar"
            onFocus={() => setIsOpen(true)}
            startContent={widgetFiltersButton}
            endContent={<TbSearch size={24} className="cursor-pointer" />}
          />
        )}
      </div>
      {isOpen && (
        <div className="fixed w-screen h-screen top-0 left-0 bg-background z-50">
          <div className="flex justify-between flex-col">
            <div className="h-3/4 bg-content1">
              <div></div>
            </div>
            <div className="p-2 bg-content1">
              <Input
                autoFocus
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
