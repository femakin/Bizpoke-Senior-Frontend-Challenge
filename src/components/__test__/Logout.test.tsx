import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Logout from '../Logout';

describe('Logout component', () => {
    it('renders user info and more options button', () => {

        render(<Logout />);

        const userNameElement = screen.getByText(/Bolu Adebayo/i);
        expect(userNameElement).toBeInTheDocument();

        const moreOptionsButton = screen.getByLabelText(/Logout/i);
        expect(moreOptionsButton).toBeInTheDocument();
        userEvent.click(moreOptionsButton);
    });

});
