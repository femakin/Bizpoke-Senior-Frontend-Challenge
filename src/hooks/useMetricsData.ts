import { useQuery } from 'react-query';

const fetchMetricData = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/business-metrics`);
    const data = await response.json();
    return data
};

export const useMetricsData = () => {
    return useQuery('metricsData', fetchMetricData);
};