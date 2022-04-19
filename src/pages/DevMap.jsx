import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as spbuData from '../../assets/data/spbu.json'
import { Container, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function DevMap() {

    let arr_data = spbuData.default;
    let arr = []

    arr_data.forEach(e => {
        let temp = {
            lat: null,
            lng: null
        }
        if (e.location !== null) {
            temp.lat = e.location.lat
            temp.lng = e.location.lng
            arr.push(temp)
        }
    });

    arr.map((marker,i) => {
        console.log(marker.lat)
    })

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
             Back to Home</Button>
            <MapContainer center={[-6.8387022, 107.9089463]} zoom={15} scrollWheelZoom={true} id="mapid" style={{ height: "100vh" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {arr.map((marker, i) => (
                    <Marker key={i} position={[marker.lat, marker.lng]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Container>
    )
}