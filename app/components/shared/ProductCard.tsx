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
export default function ProductCard({ id, title, brand, shortInfo, image }: Props) {
  return (
    <Card className="rounded-xl">
      <CardBody className="py-2 bg-white flex justify-center">
        <Image
          as={NextImage}
          alt={`product_image_${id}`}
          radius="lg"
          classNames={{ wrapper: 'bg-no-repeat bg-center bg-cover' }}
          src={image}
          width={300}
          height={200}
          fallbackSrc="/svg/image-not-found.svg"
          loading="lazy"
          layout="responsive"
        />
      </CardBody>
      <Link href={url.product(id)}>
        <CardHeader className="p-4 flex-col items-start max-w-64 sm:max-w-none">
          <small className="text-default-500">{shortInfo}</small>
          <Tooltip content={brand} className="max-w-64" placement="bottom">
            <small className="text-default truncate">{brand}</small>
          </Tooltip>
          <Tooltip content={title} className="max-w-64" placement="bottom">
            <h4 className="font-bold text-large overflow-hidden max-h-14">{title}</h4>
          </Tooltip>
        </CardHeader>
      </Link>
    </Card>
  );
}
