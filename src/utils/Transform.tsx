interface Metric {
    title: string;
    count: number;
    changePercentage: number;
}

const transformMetricData = (apiResponse: any): Metric[] => {
    return Object.entries(apiResponse).map(([title, data]: [string, any]) => ({
        title,
        count: data.count,
        changePercentage: data.changePercentage,
    }));
};

export default transformMetricData;
