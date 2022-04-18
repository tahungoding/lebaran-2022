import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'

const spbu = '../../assets/data/spbu.json'

export default function DevMap() {

    let koordinat = []

    React.useEffect(() => {
        axios.get(spbu).then((response) => {
            let arr  = response.data;
            let arr_temp = null;
            arr.forEach((e,i) => {
                if (e.location !== null) {
                    arr_temp = parseFloat(e.location.lat) + ', ' + parseFloat(e.location.lng)
                    koordinat.push(arr_temp)
                }
            });
        });
    }, []);

    return (
        <MapContainer center={[-6.8387022, 107.9089463]} zoom={13} scrollWheelZoom={false} id="mapid" style={{height: "50vh"}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-6.8387022, 107.9089463]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    )
}
