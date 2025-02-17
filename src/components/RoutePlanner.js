import React, {useState, useEffect} from "react";
import styled, { keyframes } from 'styled-components'
import { fetchGateData } from "../utils/api";
import { listGateNames } from "../utils/utils";
import ListGates from "./ListGates";
import FindRoute from "./FindRoute"
import FindTransport from "./FindTransport"

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const AnimatedTitle = styled.header`
  animation: ${fadeInOut} 5s infinite;
  color: white;
  font-size: 100px;
  margin-top: 100px;
`

const PageDescription = styled.p`
  color: grey;
  font-size: 20px;
`

const PageBorder = styled.div`
  border: 2px solid grey;
  width: 2000px;
  margin-top: 100px;
  height: 2000px
`

const TabButton = styled.button`
  color: grey;
  font-size: 80px;
  margin: 20px;
  background: none;
  border: none;
  padding: 30;
  cursor: pointer;
  outline: none; 

  &:hover {
    background-color: white;
    border-radius: 10%
  }
`

function RoutePlanner() {
  const [gateData, setGateData] = useState([]);
  const [gateNames, setGateNames] = useState([])
  const [selectedTab, setSelectedTab] = useState("gates")
  const [tabs, setTabs] = useState(["gates", "routes", "transport"])
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    
    async function fetchData() {
      const gateData = await fetchGateData()
      setGateData(gateData)
      setGateNames(listGateNames(gateData))
      setLoading(false)
    }

    fetchData()
}, []); 


  const renderTabContent = (gateNames) => {

    if (selectedTab == "gates") {
      return (
        <ListGates gateNames={gateNames} />
      )
    } else if (selectedTab == "routes") {
        return (
          <FindRoute gateNames={gateNames}/>
        )
    } else if (selectedTab == "transport") {
      return (
        <FindTransport/>
      )
    }
  }

  const updateTabSelection = (e) => {
    setSelectedTab(e.target.value)
  }

  

  return (
      <div>
        <PageBorder>
          <AnimatedTitle>
            Interstellar Route Planner
          </AnimatedTitle>
          <PageDescription>
            Use this tool to get Hyperspace Gate information and to work out the cost of your journey.
          </PageDescription>
          {tabs.map(tab => {
            return (
              <TabButton value={tab} onClick={(e) => updateTabSelection(e)}>
                {tab} 
              </TabButton>
            )
          })}
          <div>
            {isLoading ? (
                  <p>Loading</p>
            ) : (
              renderTabContent(gateNames)
              )
            }
          </div>
        </PageBorder>
      </div>
    )
}


export default RoutePlanner;