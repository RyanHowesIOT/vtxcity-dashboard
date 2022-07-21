import React from "react";
import Sidebar from "./Sidebar";
import Map from "./Map";




const Layout = () => {
    return (
        <div className="flex flex-row justify-start">
            <Sidebar />
            <div className="w-screen h-screen">
            <Map />  
            </div>
        </div>
    );
};

export default Layout