// import WidgetFilters from "./components/WidgetFilters";

import service from '@/api/services/service';
import { ProductsCarousel } from './components/ProductsCarousel';

export async function getNewProducts() {
   const { data } = await service.catalog.getNewProducts();
   return data;
}

export default async function Home() {
   const newProducts = await getNewProducts();
   return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
         <div className="container flex justify center">
            <ProductsCarousel title="Productos nuevos" products={newProducts} />
         </div>
      </div>
   );
}
