'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from "./ProductCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import SlideNavButtons from './shared/inputs/SlideNavButtons';


interface Props {
    title: string;
}
const product = {
    id: 0,
    title: "MODULO BOMBA GASOLINA ELECTRICA CHEVROLET TRUCK SILVERADO 1500 V8 4.8 LTS 2010-2013 SILVERADO 1500 V8 5.3 LTS 2010-2013 SILVERADO 1500 V8 6.2 LTS 2010-2013 IMPORTADO ()",
    shortInfo: "S6282-E",
    image: "/images/product-image.jpg",
}
type Product = typeof product;
const products = Array(20).fill(product).map((product, index) => ({ ...product, id: index + 1 }));
export function ProductsCarousel({ title }: Props) {

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="p-5">
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>

            <div className='w-full'>
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
                    {products.map((product: Product) => (
                        <SwiperSlide key={product.id} className='bg-red-200 !flex justify-center items-center rounded-xl'>
                            <ProductCard
                                id={product.id}
                                title={product.title}
                                shortInfo={product.shortInfo}
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