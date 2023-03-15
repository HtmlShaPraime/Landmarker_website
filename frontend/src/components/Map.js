import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';

const Map = ({ center, zoom }) => {

  const Marker = ({ text }) => <p>{text}</p>;

  const [landmarks, setLandmarks] = useState(null)

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
    console.log("Clicked on map!");
  };

  return (
    <div className='googleMap'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCe7czOJ2TbTk6b7qVlni-MT4V0xMN0P38' }}
        defaultCenter={center}
        defaultZoom={zoom}
        // onClick={handleMapClick}
        yesIWantToUseGoogleMapApiInternals
        onChildClick={(e) => handleMapClick(e)}
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

      <div className="test">
        {landmarks && landmarks.map((landmark) => (
          <p key={landmark._id}>{landmark.locationName}</p>
        ))}
      </div>
    </div>
  );
};

export default Map;