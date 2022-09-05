import { LaunchItem } from './LaunchItem';
import { Heading } from '@chakra-ui/react';
import * as API from '../services/launches';
import { useState, useEffect } from 'react';

export function LaunchesList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.error);
  }, []);

  return (
    <>
      <Heading as="h1" size="xl" margin={4}>
        SpaceX Launches
      </Heading><section>
        {launches.map(launch => (
          <LaunchItem key={`${launch.flight_number}_${launch.launch_date_unix}`} {...launch} />
        ))}
      </section>
    </>
  )
}