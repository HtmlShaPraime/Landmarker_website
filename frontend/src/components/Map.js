import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import NewLocation from './newLocation';
import { useAuthContext } from '../hooks/useAuthContext';

const Map = ({ center, zoom }) => {

  const Marker = ({ text }) => <h3>{text}</h3>

  const {user} = useAuthContext()

  const [landmarks, setLandmarks] = useState(null)
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch('/server/locations')
      const json = await response.json()

      if (response.ok) {
        setLandmarks(json)
      }
    }

    fetchLocations()
  }, [])

  const handleMapClick = (event) => {
    var lat = event.lat;
    var lng = event.lng;
    console.log(lat, lng);

    setLat(lat)
    setLng(lng)
  };

  return (
    <div className='googleMap'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCe7czOJ2TbTk6b7qVlni-MT4V0xMN0P38' }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onClick={(e) => handleMapClick(e)}
      >
        {landmarks && landmarks.map((landmark) => (
          <Marker
            key={landmark._id}
            lat={landmark.latitude}
            lng={landmark.longitude}
            text={landmark.locationName}
          />
        ))}
      </GoogleMapReact>

      {user && (<NewLocation />)}

      <br />

      {/* <div className="test">
        {landmarks && landmarks.map((landmark) => (
          <p key={landmark._id}>{landmark.locationName}</p>
        ))}
      </div> */}
    </div>
  );
};

export default Map;