// import WidgetFilters from "./components/WidgetFilters";

import Service from '@/api/services/service';
import { ProductsCarousel } from './components/ProductsCarousel';

export default async function Home() {
  const service = new Service();
  const { data } = await service.catalog.getNewProducts();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between md:p-24 sm:p-6 xs:p-4 bg-background">
      <div className="md:container xs:w-3/4 flex justify center">
        <ProductsCarousel title="Productos nuevos" products={[] || data} />
      </div>
    </div>
  );
}
