'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

interface Props {
  id?: string;
  title: string;
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  modalPlacement?: 'auto' | 'top' | 'bottom' | 'center' | 'top-center' | 'bottom-center';
  children: React.ReactNode;
  button: React.ReactNode;
  btnClassName?: string;
}
export default function CustomModal({
  id,
  title,
  size,
  children,
  button,
  btnClassName,
  modalPlacement,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [onClose, pathname]);

  return (
    <>
      <Tooltip content={title} placement="bottom">
        <Button id={id} onPress={onOpen} className={btnClassName}>
          {button}
        </Button>
      </Tooltip>
      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
        placement={modalPlacement ? modalPlacement : 'center'}
        className={modalPlacement ? 'mb-0 xs:mb-10' : ''}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
