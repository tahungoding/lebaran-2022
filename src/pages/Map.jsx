import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import {
  TileLayer,
  MapContainer,
  LayersControl
} from "react-leaflet";
import { Button } from '@mui/material';

import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'


// Base map tile:
const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const Map = () => {
// Save map instance to state here:
  const [map, setMap] = useState(null);
// Save routing machine instance to state here:
  const [routingMachine, setRoutingMachine] = useState(null)

// Start-End point for the routing machine
  const [start, setStart] = useState([38.9072, -77.0369])
  const [end, setEnd] = useState([37.7749, -122.4194])

// Routing machine ref
  const RoutingMachineRef = useRef(null)

// Create the routing-machine instance:
  useEffect(() => {
    if (!map) return 
    if (map) {
      RoutingMachineRef.current = L.Routing.control({
        position: 'topleft',
        lineOptions: {
          styles: [
            {
              color: '#757de8',
            },
          ],
        },
        waypoints: [start, end],
      })
      setRoutingMachine(RoutingMachineRef.current)
    }
  }, [map])

// Set waypoints when start and end points are updated:
  useEffect(() => {
    if (routingMachine) {
      routingMachine.addTo(map)
      routingMachine.setWaypoints([start, end])
    }
  }, [routingMachine, start, end])

// Update start and end points on button click:
  const handleClick = () => {
    if (start[0] === 38.9072) {
      setStart([40.7128, -74.0060])
      setEnd([47.6062, -122.3321])
    }
    if (start[0] === 40.7128) {
      setStart([38.9072, -77.0369])
      setEnd([37.7749, -122.4194])
    }
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>Click To Change Waypoints</Button>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={3}
        zoomControl={false}
        style={{ height: "100vh", width: "100%", padding: 0 }}
        // Set the map instance to state when ready:
        whenCreated={map => setMap(map)}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default Map;
