import { useQuery } from 'react-query';

const fetchCampaignPerformanceData = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/campaign-performance`);
    const data = await response.json();
    return data
};

export const useCampaignPerformanceData = () => {
    return useQuery('CampaignPerformancedata', fetchCampaignPerformanceData);
};