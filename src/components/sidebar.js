"use client"
//import { exportPages } from "next/dist/export/worker";
import {usestate} from"react";
 export default function sidebar(){
    const[sidebarOpen ,setsidebarOpen]=useState(true);
     
    function toggleSidebar(){
        setsidebarOpen(!sidebarOpen)

    }
    if(sidebarOpen){
    return(
        <div className="h-full bg- green-600 w-[300px] py-2 py-3">
            <div className="flex item-center justify-between">
            <h1>  className </h1>
            <button onClick={toggleSidebar}>close</button>

        </div>
        <ul>
            <li className="py-2">Homepage</li>
            <li className="py-2">project</li>
            <li className="py-2">course
            </li>
            <li className="py-2">contact</li>
        </ul>


        </div>
    )
 }
 else{
    return <button onclick={toggleSidebar}>open</button>
 }
}