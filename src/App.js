import React from 'react'
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchtoprated}
      isLargeRow/>
      <Row title='Up Coming' fetchUrl={requests.fetchupcoming} />
      
      
      <Row title='Now Playing' fetchUrl={requests.fetchnowplaying} />
      <Row title='Popular' fetchUrl={requests.fetchpopular} />
      <Row title='Latest' fetchUrl={requests.fetchupcoming} />
      <Row title='Most Visited' fetchUrl={requests.fetchnowplaying} />
     
     
    </div>
  );
}

export default App;
