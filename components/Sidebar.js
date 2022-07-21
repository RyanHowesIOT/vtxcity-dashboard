import React, { useState } from "react";
import classNames from "classnames";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import { Button } from "@mui/material"
import { Router } from "@mui/icons-material";
import { Icon } from "@mui/material";


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
              alert(json);
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