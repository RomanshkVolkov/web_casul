import CustomModal from './shared/CustomModal';
import Filters from './shared/inputs/Filters';
import { TbFilterCog } from 'react-icons/tb';

interface Props {
   id?: string;
}

export default function WidgetFilters({ id }: Props) {
   const filtersButton = <TbFilterCog size={20} />;
   return (
      <CustomModal
         id={id}
         title="Filtros"
         button={filtersButton}
         size="sm"
         className="bg-transparent"
         buttonClassName="bg-transparent"
      >
         <div className="flex flex-wrap items-center justify-between">
            <Filters />
         </div>
      </CustomModal>
   );
}
