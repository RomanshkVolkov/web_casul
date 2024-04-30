import Image from 'next/image';
import { useSwiper } from 'swiper/react';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

export default function SlideNavButtons() {
   const swiper = useSwiper();

   return (
      <div className="border-2 border-gray-200 w-fit px-2 py-1 rounded-xl mt-4 space-x-4">
         <button className="p-1 rounded-md" onClick={() => swiper.slidePrev()}>
            <FaChevronLeft size={20} />
         </button>
         <button className="p-1 rounded-md" onClick={() => swiper.slideNext()}>
            <FaChevronRight size={20} />
         </button>
      </div>
   );
}
