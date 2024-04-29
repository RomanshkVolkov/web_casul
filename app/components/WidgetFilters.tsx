import Image from 'next/image';
import CustomModal from './shared/CustomModal';
import Filters from './shared/inputs/Filters';

interface Props {
   id?: string;
}

export default function WidgetFilters({ id }: Props) {
   const filtersButton = <Image src="/svg/filters.svg" alt="filter" width={24} height={24} />;
   return (
      <CustomModal
         id={id}
         title="Filtros"
         button={filtersButton}
         size="sm"
         className="bg-transparent"
      >
         <div className="flex flex-wrap items-center justify-between">
            <Filters />
         </div>
      </CustomModal>
   );
}
