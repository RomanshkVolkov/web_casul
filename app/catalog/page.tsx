import WidgetFilters from '../components/WidgetFilters';
import PaginationOrdering from '../components/shared/inputs/PaginationOrdering';
import ContainerProducts from '../components/catalog/ContainerProducts';
import SearchContainer from '../components/catalog/SearchContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://casul.mx/catalog',
    images: [
      {
        url: 'https://casul.mx/_next/image?url=%2Fimages%2Flogo.webp&w=256&q=75',
        width: 800,
        height: 600,
        alt: 'Casul | Web',
      },
    ],
  },
};


export default function Catalog() {
  return (
    <div className="w-full px-4">
      <div className="bg-content1 w-full flex justify-between mb-6 rounded-xl shadow-lg dark:shadow-black/50">
        <div className="w-full">
          <div className="md:hidden xs:flex w-full justify-between p-6">
            <SearchContainer />
            <WidgetFilters />
          </div>
          <div className="w-full md:block sm:hidden xs:hidden">
            <PaginationOrdering />
          </div>
        </div>
      </div>
      <ContainerProducts />
    </div>
  );
}
