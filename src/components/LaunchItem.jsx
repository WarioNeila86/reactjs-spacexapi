import { Box, Text, Spacer, Tag, Flex, Icon, Button } from '@chakra-ui/react';
import { HiCalendar } from "react-icons/hi";
import { format } from 'date-fns';
import { Link } from 'react-router-dom';


export function LaunchItem(launch) {
  return (
    <Box
      bg="gray.100"
      padding={4}
      margin={4}
      borderRadius="lg"
    >
      <Flex>
        <Text fontSize="2xl">
          Mission <strong>{launch.name}</strong> ({format(new Date(launch.date_local), 'yyyy')})
        </Text>
        <Spacer />
        <Tag padding={2} colorScheme={launch.success ? 'green' : 'red'}>
          {launch.success ? 'Success' : 'Failure'}
        </Tag>
      </Flex>

      <Flex align="center">
        <Icon as={HiCalendar} color="gray.500" />
        <Text marginLeft={1} fontSize="sm" color="gray.500">
          {format(new Date(launch.date_local), 'd MMMM yyyy')}
        </Text>
      </Flex>
      <Link to={`/launchDetails/${launch.id}`}>
        <Button marginTop={2} size="xs" colorScheme="blue">More Details</Button>
      </Link>
    </Box>
  );
}