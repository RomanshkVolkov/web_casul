// import WidgetFilters from "./components/WidgetFilters";

import Service from '@/api-services/services/service';
import { ProductsCarousel } from './components/ProductsCarousel';
import SearchContainer from './components/catalog/SearchContainer';
import WidgetFilters from './components/WidgetFilters';

export default async function Home() {
  const service = new Service();
  const { data } = await service.catalog.getNewProducts();
  const widget = <WidgetFilters type="icon" />;
  return (
    <div className="flex min-h-screen flex-col items-center justify-start md:p-24 sm:p-6 xs:p-4 bg-background">
      <SearchContainer type="input" widgetFiltersButton={widget} />
      <div className="md:container xs:w-full flex justify center">
        <ProductsCarousel title="Productos nuevos" products={data} />
      </div>
    </div>
  );
}
