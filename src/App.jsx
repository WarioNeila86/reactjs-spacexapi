import * as API from './services/launches';
import React, { useState, useEffect } from 'react';
import { LaunchItem } from './components/LaunchItem';
import { Heading, Image } from '@chakra-ui/react';
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
          <LaunchItem key={`${launch.flight_number}_${launch.launch_date_unix}`} {...launch} />
        ))}
      </section>
    </React.Fragment>
  )
}
