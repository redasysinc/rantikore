/* tslint.disable */
// @ts-nocheck
// @ts-ignore
import React, {useEffect, useRef} from 'react';
import {useGeolocated} from "react-geolocated";
import mapboxgl from 'mapbox-gl';
import {consecutiveUniqueRandom} from 'unique-random'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
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
    const {coords} = useGeolocated(config);
    const center = {
        lat: coords?.latitude || 6.5244,
        lng: coords?.longitude || 3.3792
    };
    const {lat, lng} = center
    const random = consecutiveUniqueRandom(-1000, 1000);

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
            console.log(arr)
            arr.forEach((coord) => {
                const c = coord()
                const marker = new mapboxgl.Marker({color: 'red'}).setLngLat(c).addTo(mapRef.current)
                marker.getElement().addEventListener('click', () => {
                    console.log('click', c)
                    selectMapItem(c)
                })
            })
            // return ()=>{mapRef.current.colorremove()}
        },
        [mapRef]
    )

    return (
        <div id="map" ref={mapContainerRef}
             style={{width: '70vw', height: '28vw', margin: 'auto'}}
        />
    )
};

export default ProviderMapbox;
