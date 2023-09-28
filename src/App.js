import TopLayout from './TopLayout';
import SearchBar from "./SearchBar";
import DetailsCard from "./DetailsCard"

import axios from 'axios';
import Map from './Map';

import { useState, useEffect } from 'react';

function App() {
  const [ipAddress, setIpAddress] = useState('')
  const [ipDetails, setIpDetails] = useState({
    ip: '',
    isp: '',
    location: {
      city: '',
      region: '',
      timezone: "",
    }
  })

  const [coordinates, setCoordinates] = useState([70.04915, -418.09462])

  function handleSearch() {
    axios({
      method: 'get',
      url: process.env.REACT_APP_API_URL + ipAddress,
    })
      .then((res) => {
        setIpDetails(res.data)
        setCoordinates([res.data.location.lat, res.data.location.lng])
      })
      .catch((e) => alert('Invalid IP!!!'))
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="App">
      <TopLayout>
        <div style={{ marginBottom: 20 }}>
          <SearchBar onHandleSearch={handleSearch} onSetIpAddress={setIpAddress} />
        </div>
        <div className="details-card-container">
          <DetailsCard ipDetails={ipDetails} />
        </div>
      </TopLayout>
      <Map coordinates={coordinates} />
    </div>
  );
}

export default App;
