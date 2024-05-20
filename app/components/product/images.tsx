"use client";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalHeader,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BASE_IMAGE_URL } from "@/app/utils/consts";
import ImageThumbnail from "./image-thumbnail";

const SCALE_FACTOR = 3;

export default function ProductImages({
  id,
  alt,
}: {
  id: string;
  alt: string;
}) {
  const mainImage = `${BASE_IMAGE_URL}/${id}.jpg`;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [images, setImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState(mainImage);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    setImageDimensions({ width: naturalWidth, height: naturalHeight });
    onOpen();
  };

  useEffect(() => {
    fetch(`/api/images/${id}`)
      .then((res) => res.json())
      .then((data: { images: string[] }) =>
        setImages([mainImage, ...data.images]),
      );
  }, [id, mainImage]);

  return (
    <>
      <div className="xs:w-full md:w-auto">
        <div
          className="mb-2 flex basis-full items-center justify-center rounded-md border bg-white xs:h-[250px] xs:max-w-[250px] md:h-[500px] md:max-w-[500px]"
          role="button"
          onClick={onOpen}
        >
          <Image
            className="h-full rounded-md object-scale-down"
            alt={alt}
            width={500}
            height={500}
            src={activeImage}
            onClick={handleImageClick}
          />
        </div>
        <div className="flex gap-2">
          {images.map((image, index) => (
            <ImageThumbnail
              key={index}
              image={image}
              isActive={activeImage === image}
              onImageClick={() => setActiveImage(image)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        backdrop="blur"
        className="w-auto border-none bg-transparent shadow-none"
        classNames={{
          body: "pb-0",
          closeButton:
            "text-white bg-danger hover:bg-danger/30 hover:text-danger",
          wrapper: "items-center",
        }}
      >
        <ModalContent>
          {
            <>
              <ModalHeader />
              <ModalBody className="items-center">
                <div
                  className="flex items-center justify-center rounded-md bg-white xs:max-h-[300px] xs:max-w-[300px] md:max-h-[90vh] md:max-w-[98vw]"
                  style={{
                    //width: imageDimensions.width * SCALE_FACTOR,
                    height: imageDimensions.height * SCALE_FACTOR,
                  }}
                >
                  <Image
                    className="h-full w-full rounded-md  xs:object-scale-down md:object-contain"
                    alt={alt}
                    width={imageDimensions.width * SCALE_FACTOR}
                    height={imageDimensions.height * SCALE_FACTOR}
                    src={activeImage}
                  />
                </div>
              </ModalBody>
            </>
          }
        </ModalContent>
      </Modal>
    </>
  );
}
