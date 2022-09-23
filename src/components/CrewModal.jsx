import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure
} from '@chakra-ui/react'

export function CrewModal() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box marginTop={4}>
      <Button size='xs' onClick={onOpen} colorScheme='blue' variant='outline'>Crew details</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crew information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Bla bla bla</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}