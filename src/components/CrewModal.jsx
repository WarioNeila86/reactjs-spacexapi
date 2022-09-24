import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { React, useState, useEffect } from 'react';
import { BsFillEmojiFrownFill, BsPersonCircle } from 'react-icons/bs';
import * as API from '../services/launches';

export function CrewModal(launchDetails) {
  const { crew } = launchDetails;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [crewMembers, setCrewMembers] = useState([]);

  useEffect(() => {
    Promise.all(crew.map((id) => API.getCrewMemberById(id))).then(setCrewMembers).catch(console.error);
  }, []);

  return (
    <Box marginTop={4}>
      <Button size="xs" onClick={onOpen} colorScheme="blue" variant="outline">Crew details</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={['xs', 'xs', 'md']}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={['l', 'l', '2xl']}>Crew information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              !crewMembers || crewMembers.length === 0
                ? (
                  <HStack>
                    <Icon as={BsFillEmojiFrownFill} color="red.200" />
                    <Text fontSize={['sm', 'sm', 'md']}>No crew info available for given launch</Text>
                  </HStack>
                )
                : (
                  <Box>
                    <List>
                      {crewMembers.map((member) => (
                        <ListItem key={member.id} marginTop={4}>
                          <ListIcon as={BsPersonCircle} color="blue.600" />
                          {member.name}
                          {' '}
                          <Avatar name={member.name} src={member.image} size="xs" />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )
            }
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
