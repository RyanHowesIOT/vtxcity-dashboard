import React, { useState } from "react";
import classNames from "classnames";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import { Button } from "@mui/material"
import { Router } from "@mui/icons-material";
import { Icon } from "@mui/material";



const fetchData = async () => {

    var assetUrl = "https://1n6ralxm8l.execute-api.eu-west-2.amazonaws.com/staging/asset/meta?curbs_unit_id=CURBS3";
    console.log("Fetching data from : " + assetUrl);
    // get the data from the api

    const response = await fetch(assetUrl, {
        method: 'GET',
        headers: {
        'x-api-key': 'dJNRoeSwrnaxnP1ob9v6n4CxCNi9z67z5vaUK8BQ'
        }
    });
        // convert the data to json
    json = await response.json();


    let myJsonLat = parseFloat(json.Item.latitude).toFixed(4);
    setLat(lat => {return myJsonLat});


    let myJsonLong = parseFloat(json.Item.longitude).toFixed(4);
    setLng(lng => {return myJsonLong});
    console.log(myJsonLat, myJsonLong);



}

const Sidebar = () => {

    //const Menu = useMemo(
        //() => menuItems.find((menu)) => menu.link === Router.pathname),
        //[router.pathname]
    //);

    const wrapperClasses = classNames(
        "h-screen pt-8 pb-4 bg-light flex flex-col border w-20% z-40 min-w-[10%]"
        );
    
    return <div className={wrapperClasses}>
        <div className="flex flex-col">
            
            <div className="flex items-center justify-center text-xl">
                <div className={classNames}>Units</div>
            </div>
        </div>

        <div className="flex flex-col mt-8">
        <Button onClick={() => {
              alert(myJsonLat, myJsonLong);
            }}>UNIT 1</Button>
        <Button onClick={() => {
              alert(json);
            }}>UNIT 2</Button>
        <Button onClick={() => {
              alert(json);
            }}>UNIT 3</Button>
        <Button onClick={() => {
              alert(json);
            }}>UNIT 4</Button>
        <Button onClick={() => {
              alert(json);
            }}>UNIT 5</Button>
        <Button onClick={() => {
              alert(json);
            }}>UNIT 6</Button> 
        <Button onClick={() => {
              alert(json);
            }}>UNIT 7</Button> 
        <Button onClick={() => {
              alert(json);
            }}>UNIT 8</Button> 
        <Button onClick={() => {
              alert(json);
            }}>UNIT 9</Button> 
        <Button onClick={() => {
              alert(json);
            }}>UNIT 10</Button>     
        </div>
        <div>
            
        </div>
        </div>;    
};

export default Sidebar;