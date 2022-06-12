// https://react-google-maps-api-docs.netlify.app/#section-getting-started

//import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Map() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const containerStyle = {
    width: '600px',
    height: '600px'
  };

  const center = {
    lat: 35.9037556,
    lng: 139.7831018
  };

  return (
    <LoadScript
        googleMapsApiKey={API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
  );
}


