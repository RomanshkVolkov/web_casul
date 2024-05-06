'use client';
import Image from 'next/image';
import { Modal, ModalContent, ModalBody, useDisclosure, ModalHeader } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { BASE_IMAGE_URL } from '@/app/utils/consts';
import ImageThumbnail from './image-thumbnail';

const SCALE_FACTOR = 3;

export default function ProductImages({ id, alt }: { id: string; alt: string }) {
  const mainImage = `${BASE_IMAGE_URL}/${id}.jpg`;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [images, setImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState(mainImage);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    setImageDimensions({ width: naturalWidth, height: naturalHeight });
    onOpen();
  };

  useEffect(() => {
    fetch(`/api/images/${id}`)
      .then((res) => res.json())
      .then((data: { images: string[] }) => setImages([mainImage, ...data.images]));
  }, [id, mainImage]);

  return (
    <>
      <div className="xs:w-full md:w-auto">
        <div
          className="xs:max-w-[250px] xs:h-[250px] md:max-w-[500px] md:h-[500px] basis-full flex justify-center items-center rounded-md bg-white border mb-2"
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
        className="bg-transparent border-none shadow-none w-auto"
        classNames={{
          body: 'pb-0',
          closeButton: 'text-white bg-danger hover:bg-danger/30 hover:text-danger',
          wrapper: 'items-center',
        }}
      >
        <ModalContent>
          {
            <>
              <ModalHeader />
              <ModalBody className="items-center">
                <div
                  className="rounded-md flex justify-center items-center bg-white md:max-w-[98vw] md:max-h-[90vh] xs:max-w-[300px] xs:max-h-[300px]"
                  style={{
                    //width: imageDimensions.width * SCALE_FACTOR,
                    height: imageDimensions.height * SCALE_FACTOR,
                  }}
                >
                  <Image
                    className="w-full h-full rounded-md  xs:object-scale-down md:object-contain"
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
