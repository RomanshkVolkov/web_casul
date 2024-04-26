// import WidgetFilters from "./components/WidgetFilters";

import { ProductsCarousel } from "./components/ProductsCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
      <div className="container flex justify center">
        <ProductsCarousel title="Productos nuevos" />
        {/* <WidgetFilters /> */}
      </div>
    </div>
  );
}
