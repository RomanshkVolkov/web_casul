import WidgetFilters from '../components/WidgetFilters';
import PaginationOrdering from '../components/shared/inputs/PaginationOrdering';
import ContainerProducts from './components/ContainerProducts';

export default function Catalog() {
   const product = {
      id: 0,
      description:
         'MODULO BOMBA GASOLINA ELECTRICA CHEVROLET TRUCK SILVERADO 1500 V8 4.8 LTS 2010-2013 SILVERADO 1500 V8 5.3 LTS 2010-2013 SILVERADO 1500 V8 6.2 LTS 2010-2013 IMPORTADO ()',
      sku: 'S6282-E',
      image: '/images/product-image.jpg',
   };
   const products = Array(20)
      .fill(product)
      .map((product, index) => ({ ...product, id: index + 1 }));
   return (
      <div className="w-full px-4">
         <div className="bg-content1 w-full h-20 flex justify-between mb-6">
            <div className="col-span-1 md:inline sm:hidden p-4">{}</div>
            <div className="md:hidden sm:flex justify-around p-6">
               <WidgetFilters />
            </div>
            <div className="w-[520px] md:inline sm:hidden ">
               <PaginationOrdering />
            </div>
         </div>
         <ContainerProducts />
      </div>
   );
}
