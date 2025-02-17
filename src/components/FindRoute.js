import React, {useState, useEffect} from "react";
import styled, { keyframes } from 'styled-components'
import RouteTable from "./RouteTable"



function FindRoute(props) {
    const [targetGate, setTargetGate] = useState("")
    const [currentGate, setCurrentGate] = useState("")
    const [routeInfo, setRouteInfo] = useState([])

    const checkSelection = () => {
        
    }

    
    return (
        <div>
            <RouteTable gateNames={props.gateNames} setCurrentGate={setCurrentGate} setTargetGate={setTargetGate}/>
            {}
        </div>
    )
}

export default FindRoute;