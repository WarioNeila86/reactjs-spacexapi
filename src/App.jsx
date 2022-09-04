import * as API from './services/launches';
import React, {useState, useEffect} from 'react';
import logo from './assets/logo-spacex.png';
import './App.css';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.error);
  }, []);


  return (
    <React.Fragment>
      <img src={logo} width={300}></img>
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
