const listGateNames = (gateData) => {
    const gateNames = gateData.map(gate => {
        return gate['gate_name']
    });

    return gateNames
}

export {listGateNames}