import React, {useState, useEffect} from "react";
import styled, { keyframes } from 'styled-components'


const GateListContainer = styled.ul`
 list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 2000px;
`

const GateListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 50px;
  background-color: grey;
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  margin-top: 100px;
`

function ListGates(props) {
    return (
        <GateListContainer>
            {props.gateNames.map(gateName => (
                <GateListItem>
                    {gateName.toUpperCase()}
                </GateListItem>
            )) 
            }
        </GateListContainer>
    )
}

export default ListGates;