import * as API from './services/launches';
import React, {useState, useEffect} from 'react';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.error);
  }, []);


  return (
    <React.Fragment>
      <h1>SpaceX Launches</h1>
      <ul>
        {launches.map(launch => (
          <li key={`${launch.flight_number}_${launch.launch_date_unix}`}>
            {launch.mission_name} {launch.launch_year}
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}
