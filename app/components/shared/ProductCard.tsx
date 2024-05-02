import NextImage from 'next/image';
import { Card, CardHeader, CardBody, Image, Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { url } from '../../url/url-utils';

interface Props {
  id: number;
  title: string;
  shortInfo: string;
  brand: string;
  image: string;
}
export default function ProductCard({ id, title, brand, shortInfo }: Props) {
  return (
    <Card className="rounded-xl">
      <CardBody className="overflow-visible py-2">
        <Image
          as={NextImage}
          alt={`product_image_${title}`}
          className="md:h-[227.133px] sm:h-[220px] xs:h-[220px] object-fill"
          classNames={{
            wrapper: 'bg-cover bg-no-repeat bg-center bg-white',
          }}
          radius="lg"
          src={`https://imagenesbeta.blob.core.windows.net/imagenes/${id}.jpg`}
          width={1420}
          height={500}
          fallbackSrc="/svg/image-not-found.svg"
          loading="lazy"
        />
      </CardBody>
      <Link href={url.product(id)}>
        <CardHeader className="p-4 flex-col items-start max-w-64 sm:max-w-none">
          <small className="text-default-500">{shortInfo}</small>
          <small className="text-default">{brand}</small>
          <Tooltip content={title} className="max-w-64" placement="bottom">
            <h4 className="font-bold text-large overflow-hidden max-h-14">{title}</h4>
          </Tooltip>
        </CardHeader>
      </Link>
    </Card>
  );
}
