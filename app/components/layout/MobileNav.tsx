import { Button } from '@nextui-org/react';
import CustomModal from '../shared/CustomModal';
import { CiMenuKebab } from 'react-icons/ci';

export default function MobileNav() {
  return (
    <div className="sm:hidden xs:fixed bottom-0 bg-primary w-screen">
      <div className="flex justify-end">
        <CustomModal
          title="Menu"
          button={<CiMenuKebab size={20} className="text-secondary" />}
          size="sm"
        >
          <div className="flex flex-col items-center justify-center">
            <Button>Inicio</Button>
            <Button>Productos</Button>
            <Button>Carrito</Button>
            <Button>Cuenta</Button>
          </div>
        </CustomModal>
      </div>
    </div>
  );
}
