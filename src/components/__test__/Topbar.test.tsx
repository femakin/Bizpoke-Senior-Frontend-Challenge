import React from 'react';
import { render, screen } from '@testing-library/react';
import Topbar from '../Topbar';
// Assuming Topbar is in a file named Topbar.js

describe('Topbar component', () => {
    it('renders the title and search input correctly', () => {
        render(<Topbar />);

        // Assert title presence and content
        const title = screen.getByText(/Dashboard/i); // Case-insensitive search
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Dashboard');

        // Assert search input presence, attributes, and placeholder
        const searchInput = screen.getByRole('textbox');
        expect(searchInput).toBeInTheDocument();
        expect(searchInput).toHaveAttribute('type', 'text');
        expect(searchInput).toHaveAttribute('id', 'search-input');
        expect(searchInput).toHaveAttribute('placeholder', 'Search...');
        expect(searchInput).toHaveClass('focus:border-blue-500'); // Check focus style

        // Assert search icon presence
        const searchIcon = screen.getByTestId('search-icon'); // Assuming you add a testId
        expect(searchIcon).toBeInTheDocument();
    });

});
