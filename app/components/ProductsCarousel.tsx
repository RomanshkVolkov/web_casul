'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrCatalog } from 'react-icons/gr';

import ProductCard from './shared/ProductCard';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import SlideNavButtons from './shared/inputs/SlideNavButtons';
import CatalogTypes from '@/types/catalog-types';
import { Link } from '@nextui-org/react';

interface Props {
  title: string;
  products: CatalogTypes['Product'][];
}
export function ProductsCarousel({ title, products }: Props) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="p-5">
        <h1 className="sm:text-3xl xs:text-lg font-bold">{title}</h1>
      </div>

      <div className="w-full p-6">
        {products.length === 0 ? (
          <div className="flex justify-center flex-col items-center gap-4">
            <GrCatalog size={100} />
            <h2 className="text-center text-xl font-semibold">
              No hay productos agregados recientemente
            </h2>
            <p>Visita nuestro catálogo</p>
            <Link href="/catalog" className="mt-4 text-black transition-colors 0">
              <a className="bg-black text-white p-2 rounded-md">Explorar catálogo</a>
            </Link>
          </div>
        ) : (
          <Swiper
            className="!p-2"
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={35}
            breakpoints={{
              480: { slidesPerView: 1 },
              740: { slidesPerView: 3 },
              1275: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide
                key={product.id}
                className="!flex justify-center items-center rounded-xl !h-auto"
              >
                <ProductCard
                  id={product.id}
                  title={product.description}
                  shortInfo={product.sku}
                  brand={product.brand}
                  image={product.image}
                />
              </SwiperSlide>
            ))}
            <SlideNavButtons />
          </Swiper>
        )}
      </div>
    </div>
  );
}
