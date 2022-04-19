import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as spbuData from '../../assets/data/spbu.json'
import { Container, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import spbuIcon from '../../assets/Maps/icon/spbu.svg'
import Map from './Map'
import { Link } from 'react-router-dom'

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
    iconSize: new L.Point(30, 50),
  });
}

export default function jalanAlternatifMap() {

    React.useEffect(() => {
        document.title = "Jalan Alternatif - Sistem Informasi Idul Fitri"
     }, []);

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
                Rute Jalan Alternatif Kabupaten Sumedang
                <br></br>
                <small>Silahkan pindahkan marker pin sesuai dengan lokasi dan tujuan anda</small>
            </Typography>
            <Link to="/">
                <Button color="success" variant="outlined" style={{
            marginTop: '20px',
            marginBottom: '20px'
        }}>
<HomeIcon/>
             
        </Button>
                </Link>
        <Map/>
        </Container>
    )
}