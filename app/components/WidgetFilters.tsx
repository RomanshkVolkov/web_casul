import CustomModal from './shared/CustomModal';
import Filters from './shared/inputs/Filters';
import { TbFilterCog } from 'react-icons/tb';

interface Props {
  id?: string;
  type?: 'button' | 'icon';
}

export default function WidgetFilters({ id, type }: Props) {
  const isButton = !type || type === 'button';
  const buttonClassName = isButton ? '' : 'px-1 min-w-fit bg-transparent';
  const filtersButton = <TbFilterCog size={20} />;
  return (
    <CustomModal
      id={id}
      title="Filtros"
      button={filtersButton}
      size="sm"
      btnClassName={buttonClassName}
    >
      <div className="flex flex-wrap items-center justify-between">
        <Filters />
      </div>
    </CustomModal>
  );
}
