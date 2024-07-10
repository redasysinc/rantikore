/* tslint.disable */
// @ts-nocheck
// @ts-ignore
import React, {useEffect, useRef, useState} from 'react';
import {useGeolocated} from "react-geolocated";
import mapboxgl from 'mapbox-gl';
import {consecutiveUniqueRandom} from 'unique-random'
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const config = {
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 15000,
}

const ProviderMapbox: React.FC = ({selectMapItem}) => {
    const mapContainerRef = useRef();
    const mapRef = useRef();
    const random = consecutiveUniqueRandom(-1000, 1000);
    const {coords} = useGeolocated(config);
    let center = {
        lat: coords?.latitude ||39.8422277,
        lng: coords?.longitude || -75.4671909
    };
    navigator.geolocation.getCurrentPosition((position)=>{
        center = {
            lat:position.coords.latitude,
            lng:position.coords.longitude
        }
    })
    const {lat, lng} = center
    useEffect(() => {
        mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

        mapRef.current = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [center.lng, center.lat],
            zoom: 10
        });

        new mapboxgl.Marker().setLngLat([center.lng, center.lat]).addTo(mapRef.current)
        const arr = new Array(5).fill(() => ({lng: center.lng + random() / 10000, lat: center.lat + random() / 10000}))
         arr.forEach((coord) => {
            const c = coord()
            const marker = new mapboxgl.Marker({color: 'red'}).setLngLat(c).addTo(mapRef.current)
            marker.getElement().addEventListener('click', () => {
                selectMapItem(c)
            })
        })
    }, [])

    return (
        <div id="map" ref={mapContainerRef}
             style={{width: '70vw', height: '28vw', margin: 'auto'}}
        />
    )
};

export default ProviderMapbox;
