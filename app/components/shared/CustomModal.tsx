import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import React from "react";

interface Props {
    title: string;
    size: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    children: React.ReactNode;
    button: React.ReactNode;
}
export default function CustomModal({ title, size, children, button }: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <>
            <div id="filters-button" className="flex flex-wrap gap-3">
                <Button id="filters-button" onPress={onOpen}>{button}</Button>
            </div>
            <Modal
                size={size}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button color="warning" onPress={onClose}>
                                    Buscar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
