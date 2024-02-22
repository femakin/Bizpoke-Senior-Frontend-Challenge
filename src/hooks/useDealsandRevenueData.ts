import { useQuery } from 'react-query';

const fetchdealsandrevenueData = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/deals-and-revenue`);
    const data = await response.json();
    return data
};

export const useDealsandRevenueData = () => {
    return useQuery('dealsandrevenueData', fetchdealsandrevenueData);
};