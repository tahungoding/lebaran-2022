import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as spbuData from '../../assets/data/spbu.json'
import { Container, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import spbuIcon from '../../assets/Maps/icon/spbu.svg'
import Map from './Map'

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
    iconSize: new L.Point(30, 50),
  });
}

export default function DevMap() {

    let arr_data = spbuData.default;
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
        return createIcon(spbuIcon);
    }

    return (
        <Container maxWidth="xl" style={{
            marginTop: '20px',
            marginBottom: '20px'
        }}>
            <Typography variant="h5" component="h2">
                Peta sebaran SPBU di Kabupaten Sumedang
            </Typography>
            <Button href="/" color="success" variant="outlined" style={{
            marginTop: '20px',
            marginBottom: '20px'
        }}><HomeIcon/>
             </Button>
             <MapContainer center={[-6.8387022, 107.9089463]} zoom={13} scrollWheelZoom={false} id="mapid" style={{ height: "100vh" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
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
        </MapContainer>
        <Map/>
        </Container>
    )
}