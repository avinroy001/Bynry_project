// import React from "react";
// import GoogleMapReact from "google-map-react";
// import "./Map.css";
// import { Icon } from "@iconify/react";
// import locationIcon from "@iconify/icons-mdi/map-marker";



// const LocationPin = ({ text }) => (
//   <div className="pin">
//     <Icon icon={locationIcon} className="pin-icon" />
//     <p className="pin-text">{text}</p>
//   </div>
// );

// const Map = ({data}) => {

//     const location = {
//         address: `${data.address.number} ${data.address.street},${data.address.city}` ,
//         lat: data.address.geolocation.lat,
//         lng: data.address.geolocation.long,
//       };
//     // const location = {
//     //     address: "1600 Amphitheatre Parkway, Mountain View, california.",
//     //     lat: 40.3467,
//     //     lng:30.1310,
//     //   };
//     //   console.log(location.lat);
//   return (
//     <div className="map">
//       <div className="google-map">
//         <GoogleMapReact
//           defaultCenter={{ lat: location.lat, lng: location.lng }}
//           defaultZoom={17}
//         >
//           {/* Render the LocationPin component with correct props */}
//           <LocationPin
//             lat={location.lat}
//             lng={location.lng}
//             text={location.address}
//           />
//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// };

// export default Map;

// -----------------------------------
import React, { useEffect, useRef } from "react";

function GoogleMap({ data }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    
    const { lat, lng } = data.address.coordinates|| {};
    console.log(lat);
    if (lat !== undefined && lng !== undefined) {
      const iframe = iframeRef.current;
      iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`;
    }
  }, [data]);

  return (
    <div>
        
      <iframe
        ref={iframeRef}
        title="Google Map"
        height="300"
        width="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
