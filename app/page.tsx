// import WidgetFilters from "./components/WidgetFilters";

import Service from '@/api/services/service';
import { ProductsCarousel } from './components/ProductsCarousel';

export default async function Home() {
  const service = new Service();
  const { data } = await service.catalog.getNewProducts();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 mt-20 bg-background">
      <ProductsCarousel title="Productos nuevos" products={data} />
    </div>
  );
}
