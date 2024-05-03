'use client';
import Image from 'next/image';
import { Modal, ModalContent, ModalBody, useDisclosure, ModalHeader } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { BASE_IMAGE_URL } from '@/app/utils/consts';
import ImageThumbnail from './image-thumbnail';

export default function ProductImages({ id, alt }: { id: string; alt: string }) {
  const mainImage = `${BASE_IMAGE_URL}/${id}.jpg`;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [images, setImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState(mainImage);

  useEffect(() => {
    fetch(`/api/images/${id}`)
      .then((res) => res.json())
      .then((data: { images: string[] }) => setImages([mainImage, ...data.images]));
  }, [id, mainImage]);

  return (
    <>
      <div className="xs:w-full md:w-auto">
        <div
          className="max-w-[500px] h-[500px] basis-full flex justify-center items-center rounded-md bg-white border mb-2"
          role="button"
          onClick={onOpen}
        >
          <Image
            className="h-full rounded-md object-scale-down"
            alt={alt}
            width={500}
            height={500}
            src={activeImage}
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
        className="bg-transparent border-none shadow-none"
        classNames={{
          body: 'pb-0',
          closeButton: 'text-white bg-danger hover:bg-danger/30 hover:text-danger',
        }}
      >
        <ModalContent>
          {
            <>
              <ModalHeader />
              <ModalBody className="items-center">
                <div className="rounded-md max-w-[800px] h-[800px] w-full flex justify-center items-center bg-white">
                  <Image
                    className="rounded-md h-full object-scale-down"
                    alt={alt}
                    width={600}
                    height={600}
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
