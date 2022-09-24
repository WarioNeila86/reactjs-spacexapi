import { React, useState, useEffect } from 'react';
import { Heading, Spinner, Box } from '@chakra-ui/react';
import { LaunchItem } from './LaunchItem';
import * as API from '../services/launches';

export function LaunchesList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.error);
  }, []);

  return (
    <>
      <Heading as="h1" size="xl" align="center" margin={4}>
        SpaceX Launches
      </Heading>
      {!launches || launches.length === 0
        ? (
          <Box align="center">
            <Spinner size="lg" />
          </Box>

        )
        : (
          <Box maxWidth="1024px" margin="auto">
            {launches.map((launch) => (
              <LaunchItem key={`${launch.id}`} {...launch} />
            ))}
          </Box>
        )}
    </>
  );
}
