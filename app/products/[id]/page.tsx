import Image from 'next/image';
import { Card, CardHeader } from '@nextui-org/react';
import Details from '@/app/components/product/Details';

export default function Product() {
   return (
      <div className="flex min-h-screen py-12 px-28 bg-background">
         <div className="container">
            <Card>
               <CardHeader className="flex gap-3 p-8">
                  <div className="w-full max-w-[500px]">
                     <Image
                        className="rounded-md w-full"
                        alt="nextui logo"
                        width={500}
                        height={500}
                        src="/images/product-image.jpg"
                     />
                  </div>

                  <Details />
               </CardHeader>
            </Card>
         </div>
      </div>
   );
}
