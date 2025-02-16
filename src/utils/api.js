import axios from 'axios';

const fetchGateData = async () => {
  try {
    const response = await axios.get('https://yl4yitmtlc.execute-api.eu-west-1.amazonaws.com/dev/gates');
    console.log('Data:', response.data);
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export {fetchGateData}