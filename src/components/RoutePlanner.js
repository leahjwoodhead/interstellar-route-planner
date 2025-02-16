import React, {useState, useEffect} from "react";
import styled, { keyframes } from 'styled-components'
import { fetchGateData } from "../utils/api";

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const AnimatedTitle = styled.header`
  animation: ${fadeInOut} 5s infinite;
  background-colour: white;
  color: white;
  font-size: 100px;
  margin-top: 100px;
`

function RoutePlanner() {
  const [gateData, setGateData] = useState([]);



  useEffect(() => {
    
    async function fetchData() {
      const gateData = await fetchGateData()
      setGateData(gateData)
      console.log(gateData)
    }

    fetchData()
}, []); 
  

  return (
      <div>
        <AnimatedTitle>
          Interstellar Route Planner
        </AnimatedTitle>
      </div>
    )
}


export default RoutePlanner;