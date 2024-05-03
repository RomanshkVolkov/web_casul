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
      <div>
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
              <ModalBody>
                <div className="rounded-md">
                  <Image
                    className="rounded-md w-full h-full"
                    alt={alt}
                    width={500}
                    height={500}
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
