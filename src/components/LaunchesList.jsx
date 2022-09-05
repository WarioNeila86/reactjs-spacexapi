import { LaunchItem } from './LaunchItem';
import { Heading, Spinner, Box } from '@chakra-ui/react';
import * as API from '../services/launches';
import { useState, useEffect } from 'react';

export function LaunchesList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.error);
  }, []);

  return (
    <>
      <Heading as="h1" size="xl" align='center' margin={4}>
        SpaceX Launches
      </Heading>
      {!launches || launches.length === 0
        ? (
          <Box align='center'>
            <Spinner size="lg" />
          </Box>

        )
        : (
          <section>
            {launches.map(launch => (
              <LaunchItem key={`${launch.flight_number}_${launch.launch_date_unix}`} {...launch} />
            ))}
          </section>
        )}
    </>
  )
}