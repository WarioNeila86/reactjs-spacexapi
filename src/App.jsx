import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Image } from '@chakra-ui/react';
import { LaunchesList } from './components/LaunchesList';
import logo from './assets/logo-spacex.png';

export function App() {
  return (
    <React.Fragment>
      <Image src={logo} width={300} margin={4}></Image>
      <Routes>
        <Route path='/' element={<LaunchesList />} />
      </Routes>
    </React.Fragment>
  )
}
