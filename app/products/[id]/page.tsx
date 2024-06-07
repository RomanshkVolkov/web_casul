export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import { Card, CardHeader } from '@nextui-org/react';
import ProductSkeleton from '@/app/components/product/skeleton';
import Details from '@/app/components/product/details';
import Service from '@/api-services/services/service';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';


export async function generateMetadata({ params: { id } }: { params: { id: string } }): Promise<Metadata> {
  const service = new Service();
  const { product, applications, equivalences } = await service.catalog.getProductById({ id: +id });

  if (!product) notFound();
const title = `${product.description} | ${product.sku} | ${product.brand}. | Casul | Web`;

const applicationsString = applications.map((application) => `marca-aplicacion: ${application.brand} | modelo-aplicacion: ${application.model} | version-aplicacion: ${application.version} | año-aplicacion: ${application.year}`).join(', ');
const equivalencesString = equivalences.map((equivalence) => `descripcion-equivalencia: ${equivalence.description} | modelo-equivalencia: ${equivalence.brand} | clave-equivalencia: ${equivalence.sku}`).join(', ');
const description = `Descubre los mejores productos para tu auto en Casul. ${title} | ${applicationsString} | ${equivalencesString}`;


  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      title,
      url: `https://casul.mx/products/${id}`,
      description,
      images: [product.image],
      
    }
  };
}

export default function Product({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="flex py-10 xs:px-4 md:py-10 md:px-24 lg:py-12 lg:px-28 bg-background">
      <div className="container xs:max-w-full">
        <Card>
          <CardHeader className="flex gap-3 p-8 items-stretch flex-row lg:flex-row xs:flex-col">
            <Suspense fallback={<ProductSkeleton />}>
              <Details productId={id} />
            </Suspense>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
