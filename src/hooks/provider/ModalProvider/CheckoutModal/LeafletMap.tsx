import osm from './osm-providers';
import React, { useRef } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";


import { Map } from 'leaflet';

const LeafletMap = ({ center }: { center: any }) => {
  const ZOOM_LEVEL = 9;
  const mapRef = useRef<Map>(null); // create a ref with a current property of type Map or null

  return (
    <div className="col">
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}> {/* use the ref here */}
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;