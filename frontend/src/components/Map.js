import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {

  const Marker = ({ text }) => <div>{text}</div>;

  return (
    <div className='googleMap'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCe7czOJ2TbTk6b7qVlni-MT4V0xMN0P38' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      <Marker
        lat={42.698038021581375}
        lng={23.32138233558241}
        text="Sveta Sofiq"
      />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
