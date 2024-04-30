'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './shared/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import SlideNavButtons from './shared/inputs/SlideNavButtons';
import CatalogTypes from '@/types/catalog-types';

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

         <div className="w-full">
            <Swiper
               modules={[Navigation, Pagination, A11y]}
               slidesPerView={1}
               spaceBetween={15}
               breakpoints={{
                  480: { slidesPerView: 1 },
                  740: { slidesPerView: 3 },
                  1275: { slidesPerView: 4 },
               }}
            >
               {products.map((product) => (
                  <SwiperSlide
                     key={product.id}
                     className="bg-red-200 !flex justify-center items-center rounded-xl"
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
         </div>
      </div>
   );
}
