import { Button, Link } from '@nextui-org/react';
import CustomModal from '../shared/CustomModal';
import { CgMenuGridR } from 'react-icons/cg';
import { MdOutlineHome } from 'react-icons/md';
import { GrCatalog } from 'react-icons/gr';

export default function MobileNav() {
  return (
    <div className="sm:hidden xs:fixed bottom-0 bg-primary w-screen z-[999]">
      <div className="flex justify-center">
        <CustomModal
          title="Menu"
          button={<CgMenuGridR size={20} className="text-secondary" />}
          size="sm"
          btnClassName="p-2 bg-transparent"
        >
          <div className="grid grid-cols-2 gap-4">
            <Button href="/" as={Link} variant="solid" startContent={<MdOutlineHome />}>
              Inicio
            </Button>
            <Button href="/catalog" as={Link} variant="solid" startContent={<GrCatalog />}>
              Catálogo
            </Button>
          </div>
        </CustomModal>
      </div>
    </div>
  );
}
