import React, {Fragment} from 'react'
import styled from 'styled-components'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 55.772272, lng: 37.5761262 }}
        gestureHandling="cooperative"
    >
        <Marker position={{ lat: 55.772272, lng: 37.5761262 }} />
    </GoogleMap>
))

const Map = (props) => {
    return (
        <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpAhUoNSEHNsB8dsxIIpjawLMrW59aG2o&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: props.height || `500px`, width: props.width || `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    )
}

export default Map
