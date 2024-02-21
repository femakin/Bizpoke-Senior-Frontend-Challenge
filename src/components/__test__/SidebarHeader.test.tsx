// import React from 'react';
// import { render, screen } from '@testing-library/react';

// import SidebarHeader from '../SidebarHeader';


// jest.mock('react-router-dom', () => ({
//     useNavigate: jest.fn(),
//     useLocation: jest.fn(() => ({ pathname: '/' }))
// }));


// describe('SidebarHeader component', () => {
//     it('renders the upper and lower sections with icons and text', () => {

//         render(<SidebarHeader />);

//         const upperSection = screen.getByTestId('upper-section');
//         expect(upperSection).toBeInTheDocument();

//         const lowerSection = screen.getByTestId('lower-section');
//         expect(lowerSection).toBeInTheDocument();

//     });

// });


import React from 'react';
import { render, screen } from '@testing-library/react';


import SidebarHeader from '../SidebarHeader';
import SideIcons from '../../data';

// Assuming this is where your icons data is stored
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
    // useLocation: jest.fn(() => ({ pathname: '/' })),
}));



// const mockNavigate = useNavigate as jest.Mock; // Type casting for clarity

describe('SidebarHeader component', () => {
    it('renders the upper and lower sections with icons and text', () => {
        // Render the component
        render(<SidebarHeader />);

        // Assert upper section is present
        const upperSection = screen.getByTestId('upper-section');
        expect(upperSection).toBeInTheDocument();

        // Assert upper section has items (assuming you have items)
        const upperItems = screen.getAllByRole('listitem', { hidden: false });
        expect(upperItems.length).toBe(SideIcons.Upper_SideIcons.length);

        // Assert lower section is present
        const lowerSection = screen.getByTestId('lower-section');
        expect(lowerSection).toBeInTheDocument();

        // Assert lower section has items (assuming you have items)
        const lowerItems = screen.getAllByRole('listitem', { hidden: false });
        expect(lowerItems.length).toBe(SideIcons.Lower_SideIcons.length);

        // Add tests for icon and name color changes (if applicable)
    });
});

