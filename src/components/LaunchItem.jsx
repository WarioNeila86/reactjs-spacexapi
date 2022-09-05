import { Box, Text, Spacer, Tag, Flex } from '@chakra-ui/react';
import { HiCalendar } from "react-icons/hi";
import { format } from 'date-fns';


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
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag padding={4} colorScheme={launch.launch_success ? 'green' : 'red'}>
          {launch.launch_success ? 'Success' : 'Failure'}
        </Tag>
      </Flex>

      <Flex align="center">
        <HiCalendar />
        <Text marginLeft={1} fontSize="sm">
          {format(new Date(launch.launch_date_local), 'd MMMM yyyy')}
        </Text>
      </Flex>
    </Box>
  );
}