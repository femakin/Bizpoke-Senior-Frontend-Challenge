import { render, screen } from '@testing-library/react';
import Topbar from '../Topbar';

describe('Topbar component', () => {
    it('renders the title and search input correctly', () => {
        render(<Topbar />);


        const title = screen.getByText(/Dashboard/i);
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Dashboard');

        const searchInput = screen.getByRole('textbox');
        expect(searchInput).toBeInTheDocument();
        expect(searchInput).toHaveAttribute('type', 'text');
        expect(searchInput).toHaveAttribute('id', 'search-input');
        expect(searchInput).toHaveAttribute('placeholder', 'Search...');
        expect(searchInput).toHaveClass('focus:border-blue-500');

        const searchIcon = screen.getByTestId('search-icon');
        expect(searchIcon).toBeInTheDocument();
    });

});
