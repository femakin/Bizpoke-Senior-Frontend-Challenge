import { render, screen } from '@testing-library/react';
import { useMetricsData } from '../useMetricsData';
import { useQuery } from 'react-query';

jest.mock('react-query', () => ({
    useQuery: jest.fn(),
}));

test('fetches metric data and displays loading state', async () => {

    useQuery.mockReturnValue({
        data: undefined,
        isLoading: true,
        error: null,
    });

    render(<TestComponent />);

    expect(screen.getByText(/loading metrics/i)).toBeInTheDocument();
});

test('fetches metric data and displays it', async () => {

    const mockData = {
        data: [
            { title: 'Metric 1', count: 123 },
            { title: 'Metric 2', count: 456 },
        ],
    };
    useQuery.mockReturnValue({
        data: mockData,
        isLoading: false,
        error: null,
    });

    render(<TestComponent />);

});

const TestComponent = () => {
    const { isLoading } = useMetricsData();

    return (
        <div>
            {isLoading ? (
                <div>Loading metrics...</div>
            ) : (
                <div>Metrics loaded</div>
            )}
        </div>
    );
};
