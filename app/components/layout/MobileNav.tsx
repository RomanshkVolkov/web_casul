'use client';

import { Button } from '@nextui-org/react';
import CustomModal from '../shared/CustomModal';
import { CgMenuGridR } from 'react-icons/cg';
import { MdOutlineHome } from 'react-icons/md';
import { GrCatalog } from 'react-icons/gr';
import { useRouter } from 'next/navigation';
import { url } from '@/app/url/url-utils';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function MobileNav() {
  const { push } = useRouter();
  const handleRouter = (path: string) => {
    push(path);
  };
  return (
    <div className="sm:hidden xs:fixed bottom-0 bg-primary w-screen z-[999]">
      <div className="flex justify-center">
        <CustomModal
          title="Menu"
          button={<CgMenuGridR size={20} className="text-secondary" />}
          size="sm"
          btnClassName="p-2 bg-transparent"
          modalPlacement="bottom-center"
        >
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="solid"
              startContent={<MdOutlineHome />}
              onClick={() => handleRouter(url.home)}
            >
              Inicio
            </Button>
            <Button
              variant="solid"
              startContent={<GrCatalog />}
              onClick={() => handleRouter(url.catalog)}
            >
              Catálogo
            </Button>
            <div />
            <div className="flex justify-end">
              <ThemeSwitcher />
            </div>
          </div>
        </CustomModal>
      </div>
    </div>
  );
}
