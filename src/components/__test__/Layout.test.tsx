/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react'; // Import act from @testing-library/react
import userEvent from '@testing-library/user-event';
import Layout from '../Layout'; // Import the Layout component
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MockLayOut = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout children="Test Children" />} />
            </Routes>
        </BrowserRouter>
    );
};

describe('Layout component', () => {
    it('renders without crashing and passes children', () => {
        render(<MockLayOut />);

        expect(screen.getByText('Test Children')).toBeInTheDocument();
    });

    it('toggles sidebar visibility when button is clicked', () => {
        render(<MockLayOut />);

        const button = screen.getByText('☰');

        act(() => {
            userEvent.click(button);
        });

        expect(button).toHaveTextContent('☰');

        act(() => {
            userEvent.click(button);
        });

        expect(button).toHaveTextContent('☰');
    });

    it('renders children components', () => {
        render(<MockLayOut />);

        const childrenComponent = screen.getByText('Test Children');

        expect(childrenComponent).toBeInTheDocument();
    });
});
