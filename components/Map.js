import axios from "axios";
import { useState, useEffect, useRef } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const mapboxAccessToken = "pk.eyJ1IjoibWFya3JvYmVydHNvbiIsImEiOiJjbDVtaGQzdWgwdHJxM2ptZ2cydzQ3cWNjIn0.dN0xerIj54xSxmZ4SvxKpA";

mapboxgl.accessToken = mapboxAccessToken;

const Mapbox = () => {
    const [lat, setLat] = useState(51.661121);
    const [lng, setLng] = useState(-3.803750);
    const [zoom, setZoom] = useState(15);
    const [viewState, setViewState] = useState();
    const [curbsID, setCurbsID] = useState();

    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 1,
        transitionDuration: 100,
      });

      const mapContainer = useRef(null);
      const map = useRef(null);
  
      const mapRef = useRef();

      const MapMarker = () => {
        return (
            <Marker latitude={lat} longitude={lng}>
                <DirectionsCarIcon/>
            </Marker>
        )
    };

    const getLatestLocation = async () => {

        console.log("Calling getAssetMeta");

        const { data: { Item : { latitude, longitude, curbs_unit_id } } } = await axios.get("api/getAssetMeta");

        console.log("got new lat long " + latitude, longitude, curbs_unit_id);

        setLat(latitude);
        setLng(longitude);
        setCurbsID(curbs_unit_id);

        // setViewState({
        //     longitude: longitude,
        //     latitude: latitude,
        //     zoom
        // })




    }

    useEffect(() => {
        console.log({ viewport });
    }, [viewport]);

    useEffect(() => {

        console.log("useEffect... ");

        //getLatestLocation().catch(console.error);      

         setViewport({
            ...viewport,
            latitude: lat,
            longitude: lng,
            zoom: 9,
        });

        // navigator.geolocation.getCurrentPosition((pos) => {
   
        //  setViewport({
        //     ...viewport,
        //     latitude: pos.coords.latitude,
        //     longitude: pos.coords.longitude,
        //     zoom: 3.5,
        // });
        // });
   
    }, [lat, lng]);
    
    const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [setLat, setLng]
            },
            properties: {
              title: 'VTX CITY UNIT',
              description: "Longitude is this and Latitude is that"
            }
          },
        ]
      };
      

    const timer = setInterval(() => {
        getLatestLocation();
    }, 10000);

    const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
        });


    /**new mapboxgl.Marker(MapMarker)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
      )
    )
    .addTo(map);**/

    useEffect(() => {
        if (!mapRef.current) return; // wait for map to initialize
            mapRef.current.on('move', () => {            
            setZoom(mapRef.current.getZoom().toFixed(2));
            setLng(mapRef.current.getCenter().lng.toFixed(4));
            setLat(mapRef.current.getCenter().lat.toFixed(4)); 
        });
        });
        
        useEffect(() => {
            console.log({ viewport });
          }, [viewport]);

          useEffect(() => {

            console.log("useEffect... ");
    
            //getLatestLocation().catch(console.error);      
    
             setViewport({
                ...viewport,
                latitude: lat,
                longitude: lng,
                zoom: 9,
            });
    
            // navigator.geolocation.getCurrentPosition((pos) => {
       
            //  setViewport({
            //     ...viewport,
            //     latitude: pos.coords.latitude,
            //     longitude: pos.coords.longitude,
            //     zoom: 3.5,
            // });
            // });
       
        }, [lat, lng]);
    

        useEffect(() => {  
            if (mapRef.current) {
    
                mapRef.current.on('load', async () => {          
    
                    console.log("useEffect... ON LOAD..");
                   
                    getLatestLocation().catch(console.error);      
    
                    const timer = setInterval(() => {
                        // call the function
                        getLatestLocation().catch(console.error);;  
                    }, 10000);
                });
            }
        }); // end of useEffect #2

    return (
        <Map
            initialViewState={{
                longitude: lng,
                latitude: lat,
                zoom
            }}
            {...viewState}
            className='absolute h-screen w-screen'
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={mapboxAccessToken}
        >
            <div className='absolute mx-auto mt-5 p-5 inset-0 flex justify-center items-center h-10 w-2/6 z-40 bg-light-lighter/75 border-2 border-black rounded-lg min-w-fit'>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <MapMarker/>
        </Map>
    )

}

export default Mapbox;

/**import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Map, {Marker} from 'react-map-gl'


mapboxgl.accessToken = 'pk.eyJ1IjoibWFya3JvYmVydHNvbiIsImEiOiJjbDVtaGQzdWgwdHJxM2ptZ2cydzQ3cWNjIn0.dN0xerIj54xSxmZ4SvxKpA';

var json = {Item: {latitude: 51.661121, longitude: -3.803750}};

export default function App() {

const mapContainer = useRef(null);
const map = useRef(null);

//const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 });
var popup = new mapboxgl.Popup();


const [lng, setLng] = useState(json.Item.longitude);
const [lat, setLat] = useState(json.Item.latitude);

const [lastUpdated, setLastUpdated] = useState(0);

var lastUpdatedString;

const [zoom, setZoom] = useState(15);

const fetchData = async () => {

    var assetUrl = "https://1n6ralxm8l.execute-api.eu-west-2.amazonaws.com/staging/asset/meta?curbs_unit_id=CURBS3";
    console.log("Fetching data from : " + assetUrl);
    // get the data from the api

    const response = await fetch(assetUrl, {
        method: 'GET',
        //body: null, // string or object
        headers: {
        'x-api-key': 'dJNRoeSwrnaxnP1ob9v6n4CxCNi9z67z5vaUK8BQ'
        }
    });
        // convert the data to json
    json = await response.json();
    console.log(JSON.stringify(json));

    let myJsonLat = parseFloat(json.Item.latitude).toFixed(4);
    setLat(lat => {return myJsonLat});
    console.log("Lat in JSON" + myJsonLat);

    let myJsonLong = parseFloat(json.Item.longitude).toFixed(4);
    setLng(lng => {return myJsonLong});
    console.log("Long in JSON" + myJsonLong);

    console.log("last_updated_unix in JSON" + json.Item.last_updated_unix);

    setLastUpdated(parseInt(json.Item.last_updated_unix));   
    console.log("lastUpdated" + lastUpdated);

    lastUpdatedString = new Date(parseInt(json.Item.last_updated_unix)).toISOString();
    console.log("lastUpdatedString" + lastUpdatedString);

    // GUI elements updated
    
    popup
    .setText("ID: " + json.Item.curbs_unit_id + " RSSI: " +  json.Item.rssi + " Last update: "  + lastUpdatedString)
    .addTo(map.current);

    //marker2
    //.setLngLat( [parseFloat(json.Item.longitude).toFixed(4), parseFloat(json.Item.latitude).toFixed(4)])
    //.addTo(map.current)
    //.setPopup(popup);

     //map.current.setCenter([parseFloat(json.Item.longitude).toFixed(4), parseFloat(json.Item.latitude).toFixed(4)]);

}
 

useEffect(() => {             
    if (map.current) return; // initialize map only once  

    map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        
     });

    //fetchData().catch(console.error);;  
     
    }); // end of useEffect #1
 
    // run on load 
    useEffect(() => {  
        if (map.current) {
            map.current.on('load', async () => {           
                
                console.log("useEffect... ON LOAD..");
                
                fetchData().catch(console.error);      

                const timer = setInterval(() => {
                    // call the function
                    fetchData().catch(console.error);;  
                }, 10000);
            });
        }
    }); // end of useEffect #2

    // Just update the zoom value 
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
            map.current.on('move', () => {  
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));          
            setZoom(map.current.getZoom().toFixed(2));
        });
        });



        console.log("Lat outside use effect" + lat);
        console.log("Lng outside use effect" + lng);





        return (
            <div>
            <div ref={mapContainer} className='absolute h-screen w-screen'/>
            <div className='absolute mx-auto mt-5 p-5 inset-0 flex justify-center items-center h-10 w-2/6 z-40 bg-light-lighter/75 border-2 border-black rounded-lg min-w-fit'>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            </div>
            );


    }**/