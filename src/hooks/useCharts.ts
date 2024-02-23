import { useQuery } from 'react-query';

const fetchrevenueData = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/top-revenue-channel`);
    const data = await response.json();
    return data
};

export const useTopRevenueData = () => {
    return useQuery('toprevenueeData', fetchrevenueData);
};