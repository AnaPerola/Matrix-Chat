import React from 'react';
import appConfig from '../config.json';
import HomePage from './HomePage/index';

const App = () => {

  return (
    <>
    {/* <Navigation > */}
      <HomePage config={appConfig}/>
    {/* </Navigation> */}
    </>
  );
}
export default App;
