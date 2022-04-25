import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import * as faskesData from '../../../assets/data/faskes.json'
import { Container, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import * as L from "leaflet";
import faskesIcon from '../../../assets/Maps/icon/faskes.svg'
import { Link } from 'react-router-dom'

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
    iconSize: new L.Point(30, 50),
  });
}

export default function FaskesMap() {

    React.useEffect(() => {
        document.title = "Fasilitas Kesehatan - Sumedang LRT - Lebaran Realtime"
     }, []);

    let arr_data = faskesData.default;
    let arr = []

    arr_data.forEach(e => {
        let temp = {
            title: null, 
            lat: null,
            lng: null,
            address: null
        }
        if (e.location !== null) {
            temp.title = e.title
            temp.lat = e.location.lat
            temp.lng = e.location.lng
            temp.address = e.address
            arr.push(temp)
        }
    });

    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    function handleClick(e) {
        setSelectedIndex(e.target.options.index)
    }

    function getMarkerIcon(index) {
        if(index === selectedIndex)
              return createIcon("https://user-images.githubusercontent.com/1596072/85960867-3baf9700-b9af-11ea-854e-7ef6e656d447.png");
        return createIcon(faskesIcon);
      }

    return (
        <Container maxWidth="xl" style={{
            marginTop: '20px',
            marginBottom: '20px'
        }}>
            <Typography variant="h5" component="h2">
                Peta sebaran fasilitas kesehatan di Kabupaten Sumedang
            </Typography>
            <Link to="/">
                <Button color="success" variant="outlined" style={{
            marginTop: '20px',
            marginBottom: '20px'
                }}>
        <HomeIcon/>
             
        </Button>
                </Link>
            <MapContainer className="markercluster-map" center={[-6.8387022, 107.9089463]} zoom={15} maxZoom={18} scrollWheelZoom={false} id="mapid" style={{ height: "100vh" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <MarkerClusterGroup
                    spiderfyDistanceMultiplier={1}
                    showCoverageOnHover={false}
                  >
                {arr.map((marker, i) => (
                        <Marker 
                        key={i} 
                        position={[marker.lat, marker.lng]}
                        icon={getMarkerIcon(i)}
                        onclick={handleClick}
                        >
                            <Popup>
                                <b>{marker.title}</b> <br/> {marker.address}  <br /> <small>Lihat di <a target="_blank" href={ 'https://maps.google.com/maps?q=' + marker.lat + ',' + marker.lng }>google maps</a></small>
                            </Popup>
                        </Marker>
                ))}
                </MarkerClusterGroup>
            </MapContainer>
        </Container>
    )
}