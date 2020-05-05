import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Container from '../src/components/Container/Container';
import Head from '../src/components/Head/Head';

function App() {
  return (
   <React.Fragment>
     <Navbar/>
     <Head/>
     <Container/>
   </React.Fragment>

  );
}

export default App;
