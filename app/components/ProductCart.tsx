import { Card, CardHeader, CardBody, Image, Tooltip } from "@nextui-org/react";
import Link from "next/link";

interface Props {
    id: number;
    title: string;
    shortInfo: string;
    image: string;
}
export default function ProductCard({ id, title, shortInfo, image }: Props) {
    return (
        <Card className="pb-4 rounded-xl">
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={1420}
                />
            </CardBody>
            <Link href={`/product/${id}`}>
                <CardHeader className="pb-2 pt-2 px-4 flex-col items-start max-w-64 sm:max-w-none">
                    <small className="text-default-500">{shortInfo}</small>
                    <Tooltip content={title} className="max-w-64" placement="bottom" >
                        <h4 className="font-bold text-large text-elipsis max-h-16">{title}</h4>
                    </Tooltip>
                </CardHeader>
            </Link>
        </Card>
    );
}
