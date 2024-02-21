import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { useNavigate } from 'react-router-dom';
import SidebarHeader from '../SidebarHeader';
// import SideIcons from '../../data';
// Assuming this is where your icons data is stored

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(), // Mock useNavigate for testing
}));

// const mockNavigate = useNavigate as jest.Mock; // Type casting for clarity

describe('SidebarHeader component', () => {
    it('renders the upper and lower sections with icons and text', () => {
        // Render the component
        render(<SidebarHeader />);

        // Assert upper section is present
        const upperSection = screen.getByTestId('upper-section'); // Use data-testid for targeted selection
        expect(upperSection).toBeInTheDocument();

        // Assert upper section has items
        // const upperItems = screen.getAllByRole('listitem', { hidden: false });
        // expect(upperItems.length).toBe(SideIcons.Upper_SideIcons.length);

        // Assert lower section is present
        const lowerSection = screen.getByTestId('lower-section');
        expect(lowerSection).toBeInTheDocument();

        // // Assert lower section has items
        // const lowerItems = screen.getAllByRole('listitem', { hidden: false });
        // expect(lowerItems.length).toBe(SideIcons.Lower_SideIcons.length);


        // it('navigates to the correct path when an item is clicked', () => {
        //     // Render the component
        //     render(<SidebarHeader />);

        //     // Simulate a click on the first upper item
        //     const firstUpperItem = screen.getAllByRole('listitem', { hidden: false })[0];
        //     userEvent.click(firstUpperItem);

        //     // Expect useNavigate to be called with the correct path
        //     expect(mockNavigate).toHaveBeenCalledWith(SideIcons.Upper_SideIcons[0].path);

        //     // Simulate a click on the first lower item
        //     const firstLowerItem = screen.getAllByRole('listitem', { hidden: false })[SideIcons.Upper_SideIcons.length];
        //     userEvent.click(firstLowerItem);

        //     // Expect useNavigate to be called with the correct path for lower item
        //     expect(mockNavigate).toHaveBeenCalledWith(SideIcons.Lower_SideIcons[0].path);
    });

});
