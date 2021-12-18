import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Contact() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 22.809681,
    longitude: 91.094582,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default Contact