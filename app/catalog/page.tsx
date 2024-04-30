import WidgetFilters from '../components/WidgetFilters';
import PaginationOrdering from '../components/shared/inputs/PaginationOrdering';
import ContainerProducts from './components/ContainerProducts';

export default function Catalog() {
   return (
      <div className="w-full px-4">
         <div className="bg-content1 w-full flex justify-between mb-6 rounded-xl">
            <div className="md:block sm:hidden p-4">{}</div>
            <div>
               <div className="md:hidden sm:flex justify-around p-6">
                  <WidgetFilters />
               </div>
               <div className="w-[520px] md:block sm:hidden xs:hidden">
                  <PaginationOrdering />
               </div>
            </div>
         </div>
         <ContainerProducts />
      </div>
   );
}
