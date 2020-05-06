import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Container from '../components/Container/Container';
import Head from '../components/Head/Head';
import moduleName from '../components/Card/Card'
import Search from '../components/SearchForm/SearchForm';
import Card from '../components/Card/Card';


function App() {
  return (
   <React.Fragment>
     <Navbar/>
     <Head/>
     <Search/>
     <Container child={Card}/>
   </React.Fragment>

  );
}

export default App;
