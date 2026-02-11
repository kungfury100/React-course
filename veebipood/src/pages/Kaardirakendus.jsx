import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'
import ChangeView from '../components/ChangeView'


import React, { useState } from 'react'

function Kaardirakendus() {
  const [shops, ] = useState([
    {name: "Kristiine keskus", lat: 59.427, lng: 24.723, openTime: "9-21"},
    {name: "Solarise keskus", lat: 59.433, lng: 24.752, openTime: "9-22"},
    {name: "Ülemiste keskus", lat: 59.422, lng: 24.793, openTime: "10-23"}
  ])
  const [view, setView] = useState({center: [59.437, 24.745], zoom: 13});

  return (
    <div>
      <button onClick={() => setView({center: [59.437, 24.745], zoom: 13})}>Tallinn</button>
      <button onClick={() => setView({center: [58.378, 26.728], zoom: 13})}>Tartu</button>
      <button onClick={() => setView({center: [59.376, 28.193], zoom: 13})}>Narva</button>
      <button onClick={() => setView({center: [58.385, 24.496], zoom: 13})}>Pärnu</button>
      
      <MapContainer className='map' center={[59.437, 24.745]} zoom={13} scrollWheelZoom={false}>
        <ChangeView center={view.center} zoom={view.zoom}></ChangeView>
        <TileLayer
          className='tilelayer'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map(shop =>
          <Marker key={shop.name} position={[shop.lat, shop.lng]}>
            <Popup>
              {shop.name} <br /> {shop.lat} {shop.lng} <br /> Avatud {shop.openTime}
              
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  )
}

export default Kaardirakendus