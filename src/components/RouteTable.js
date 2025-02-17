import React, {useState, useEffect} from "react";
import styled, { keyframes } from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10px;
  align-items: center;
`;

const StyledSelect = styled.select`
  padding: 10px;
  width: 300px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Text = styled.span`
  font-size: 18px;
`


function RouteTable(props) {
    const [selectedCurrentGate, setSelectedCurrentGate] = useState('');
    const [selectedTargetGate, setSelectedTargetGate] = useState('');


    const handleCurrentGateChange = (event) => {
        setSelectedCurrentGate(event.target.value);
        props.setCurrentGate(selectedCurrentGate)
        console.log(`Gate 1 selected: ${event.target.value}`);
      };
    
      const handleTargetGateChange = (event) => {
        setSelectedTargetGate(event.target.value);
        props.setTargetGate(selectedTargetGate)
        console.log(`Gate 2 selected: ${event.target.value}`);
      };

    return (
    <FormContainer>
      <StyledForm>
        <StyledSelect value={selectedCurrentGate} onChange={(e) => handleCurrentGateChange(e)}>
            <option value="">Select Gate</option>
            {props.gateNames.map((gateName => {
                return (
                    <option value={gateName}>{gateName}</option>
                )
            }))}
        </StyledSelect>
        <Text>to</Text>
        <StyledSelect value={selectedTargetGate} onChange={(e) => handleTargetGateChange(e)}>
            <option value="">Select Gate</option>
            {props.gateNames.map((gateName => {
                return (
                    <option value={gateName}>{gateName}</option>
                )
            }))}
        </StyledSelect>
      </StyledForm>
    </FormContainer>
    )
}

export default RouteTable;