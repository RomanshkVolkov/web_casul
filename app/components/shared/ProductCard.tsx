import NextImage from 'next/image';
import { Card, CardHeader, CardBody, Image, Tooltip } from '@nextui-org/react';
import { url } from '../../url/url-utils';
import { useRouter } from 'next/navigation';

interface Props {
  id: number;
  title: string;
  shortInfo: string;
  brand: string;
  image: string;
}
export default function ProductCard({ id, title, brand, shortInfo, image }: Props) {
  const { push } = useRouter();

  return (
    <Card className="rounded-xl" isPressable onClick={() => push(url.product(id))}>
      <CardBody className="py-2 bg-white flex justify-center items-center">
        <Image
          as={NextImage}
          alt={`product_image_${id}`}
          radius="lg"
          className="w-full h-full"
          classNames={{
            wrapper:
              'bg-no-repeat bg-center bg-cover max-w-[200px] h-[200px] flex justify-center items-center',
          }}
          src={image}
          width={300}
          height={300}
          fallbackSrc="/svg/image-not-found.svg"
          loading="lazy"
          unoptimized
        />
      </CardBody>
      <CardHeader className="p-4 flex-col items-start max-w-64 sm:max-w-none">
        <small className="text-default-500">{shortInfo}</small>
        <Tooltip content={brand} className="max-w-64" placement="bottom">
          <small className="text-default truncate">{brand}</small>
        </Tooltip>
        <Tooltip content={title} className="max-w-64" placement="bottom">
          <h4 className="font-bold text-large overflow-hidden max-h-14 text-left">{title}</h4>
        </Tooltip>
      </CardHeader>
    </Card>
  );
}
