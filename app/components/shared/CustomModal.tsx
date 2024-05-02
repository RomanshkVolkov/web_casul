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
import React from 'react';

interface Props {
  id?: string;
  title: string;
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  children: React.ReactNode;
  button: React.ReactNode;
}
export default function CustomModal({ id, title, size, children, button }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip content={title} placement="bottom">
        <Button id={id} onPress={onOpen}>
          {button}
        </Button>
      </Tooltip>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
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
