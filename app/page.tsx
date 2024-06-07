// import WidgetFilters from "./components/WidgetFilters";

import Service from "@/api-services/services/service";
import { ProductsCarousel } from "./components/ProductsCarousel";
import SearchContainer from "./components/catalog/SearchContainer";
import WidgetFilters from "./components/WidgetFilters";
import Filters from "./components/shared/inputs/Filters";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://casul.mx/',
    images: [
      {
        url: 'https://casul.mx/_next/image?url=%2Fimages%2Flogo.webp&w=256&q=75',
        width: 800,
        height: 600,
        alt: 'Casul | Web',
      },
    ],
  },
}

export default async function Home() {
  const service = new Service();
  const { data } = await service.catalog.getNewProducts();
  const widget = <WidgetFilters type="icon" />;
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-background xs:p-4 sm:p-6 md:p-24">
      <div className="mb-4 w-full xs:inline-block sm:hidden">
        <SearchContainer type="input" widgetFiltersButton={widget} />
      </div>
      <Card className="w-full p-8">
        <CardHeader>
          <h2 className="m-auto text-center text-2xl font-bold">
            Busca en nuestro catálogo
          </h2>
        </CardHeader>
        <CardBody>
          <Filters />
        </CardBody>
      </Card>
      <div className="justify center flex md:container xs:w-full">
        <ProductsCarousel title="Productos nuevos" products={data} />
      </div>
    </div>
  );
}
