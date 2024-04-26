import Image from 'next/image';
import { useSwiper } from 'swiper/react';

export default function SlideNavButtons() {
    const swiper = useSwiper();

    return (
        <div className='border-2 border-gray-200 w-fit px-2 py-1 rounded-xl mt-4 space-x-4'>
            <button
                className='p-1 rounded-md'
                onClick={() => swiper.slidePrev()}
            >
                <Image src='/svg/left-arrow.svg' width={20} height={20} alt='left-arrow' />
            </button>
            <button
                className='p-1 rounded-md'
                onClick={() => swiper.slideNext()}
            >
                <Image src='/svg/right-arrow.svg' width={20} height={20} alt='right-arrow' />
            </button>
        </div>
    );
}
