import {
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Tag,
  Text
} from '@chakra-ui/react';
import { React } from 'react';
import { HiCalendar } from 'react-icons/hi';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export function LaunchItem(launch) {
  const {
    date_local: date, id, name, success
  } = launch;
  return (
    <Box
      bg="gray.100"
      padding={4}
      margin={4}
      borderRadius="lg"
    >
      <Flex>
        <Text fontSize={['l', 'l', '2xl']}>
          Mission
          <strong>{name}</strong>
          (
          {format(new Date(date), 'yyyy')}
          )
        </Text>
        <Spacer />
        <Tag padding={2} colorScheme={success ? 'green' : 'red'}>
          {success ? 'Success' : 'Failure'}
        </Tag>
      </Flex>

      <Flex align="center">
        <Icon as={HiCalendar} color="gray.500" />
        <Text marginLeft={1} fontSize="sm" color="gray.500">
          {format(new Date(date), 'd MMMM yyyy')}
        </Text>
      </Flex>
      <Link to={`/launchDetails/${id}`}>
        <Button marginTop={2} size="xs" colorScheme="blue">More Details</Button>
      </Link>
    </Box>
  );
}
