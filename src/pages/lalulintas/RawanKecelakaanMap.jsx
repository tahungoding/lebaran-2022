import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as rawanKecelakaanData from '../../../assets/data/rawan-kecelakaan.json'
import { Container, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import * as L from "leaflet";
import rawanKecelakaanIcon from '../../../assets/Maps/icon/kecelakaan.svg'
import { Link } from 'react-router-dom'

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
    iconSize: new L.Point(30, 50),
  });
}

export default function RawanKecelakaanMap() {

    React.useEffect(() => {
        document.title = "Rawan Kecelakaan - Sumedang LRT - Lebaran Realtime"
     }, []);

    let arr_data = rawanKecelakaanData.default;
    let arr = []

    arr_data.forEach(e => {
        let temp = {
            namaJalan: null, 
            lat: null,
            lng: null,
            address: null,
            anatomiKerawanan : [],
            upayaYangDilaksanakan : []
        }
        if (e.location !== null) {
            temp.namaJalan = e.namaJalan
            temp.lat = e.location.lat
            temp.lng = e.location.lng
            temp.address = e.address
            temp.anatomiKerawanan = e.anatomiKerawanan
            temp.upayaYangDilaksanakan = e.upayaYangDilaksanakan
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
        return createIcon(rawanKecelakaanIcon);
      }

    return (
        <Container maxWidth="xl" style={{
            marginTop: '20px',
            marginBottom: '20px'
        }}>
            <Typography variant="h5" component="h2">
                Peta sebaran Rawan kecelakaan di Kabupaten Sumedang
            </Typography>
            <Link to="/">
                <Button color="success" variant="outlined" style={{
            marginTop: '20px',
            marginBottom: '20px'
        }}>
<HomeIcon/>
             
        </Button>
                </Link>
            <MapContainer center={[-6.8387022, 107.9089463]} zoom={12} scrollWheelZoom={false} id="mapid" style={{ height: "100vh" }}>
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
                            <h1 style={{fontWeight: "bold"}}>{marker.namaJalan}</h1> <br/> 
                            <b>Anatomi Kerawanan</b> : {marker.anatomiKerawanan.map(item => (  
                            <li>  
                                {item}  
                            </li>  
                            ))}
                            <br/>
                            <b>Upaya yang dilaksanakan</b> : {marker.upayaYangDilaksanakan.map(item => (  
                            <li>  
                                {item}  
                            </li>  
                            ))}
                            <br /> <small>Lihat di <a target="_blank" href={ 'https://maps.google.com/maps?q=' + marker.lat + ',' + marker.lng }>google maps</a></small>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Container>
    )
}