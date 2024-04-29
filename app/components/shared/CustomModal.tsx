import {
   Modal,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Button,
   useDisclosure,
} from '@nextui-org/react';
import React from 'react';

interface Props {
   id?: string;
   title: string;
   size: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
   children: React.ReactNode;
   button: React.ReactNode;
   className?: string;
}
export default function CustomModal({ id, title, size, children, button, className }: Props) {
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <>
         <div id={id} className={className}>
            <Button id={id} onPress={onOpen}>
               {button}
            </Button>
         </div>
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
