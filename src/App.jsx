import * as API from './services/launches';
import React, { useState, useEffect } from 'react';
import { Heading, Box, Image, Text, Spacer, Tag, Flex } from '@chakra-ui/react';
import { HiCalendar } from "react-icons/hi";
import { format } from 'date-fns';
import logo from './assets/logo-spacex.png';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.error);
  }, []);


  return (
    <React.Fragment>
      <Image src={logo} width={300} margin={4}></Image>
      <Heading as="h1" size="xl" margin={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map(launch => (
          <Box
            key={`${launch.flight_number}_${launch.launch_date_unix}`}
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
        ))}
      </section>
    </React.Fragment>
  )
}
