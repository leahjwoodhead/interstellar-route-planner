import React, {useState, useEffect} from "react";
import styled, { keyframes } from 'styled-components'
import { fetchGateData } from "../utils/api";
import { listGateNames } from "../utils/utils";

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

const PageDescription = styled.p`
  color: white;
  font-size: 20px;
`

const GateListContainer = styled.ul`
 list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1500px;
`

const GateListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 50px;
  border-radius: 40%;
  background-color: grey;
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  margin-top: 100px;
`

function RoutePlanner() {
  const [gateData, setGateData] = useState([]);
  const [gateNames, setGateNames] = useState([])



  useEffect(() => {
    
    async function fetchData() {
      const gateData = await fetchGateData()
      setGateData(gateData)
      setGateNames(listGateNames(gateData))
    }

    fetchData()
}, []); 
  

  return (
      <div>
        <AnimatedTitle>
          Interstellar Route Planner
        </AnimatedTitle>
        <PageDescription>
          Use this tool to get Hyperspace Gate information and to work out the cost of your journey.
        </PageDescription>
        <GateListContainer>
          {gateNames.map(gateName => (
              <GateListItem>
                {gateName.toUpperCase()}
              </GateListItem>
            )) 
          }
        </GateListContainer>
  
      </div>
    )
}


export default RoutePlanner;