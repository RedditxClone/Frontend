import { fireEvent, render, screen } from '@testing-library/react';
import LogIn from '../../../components/Layout/LogIn/LogIn';

describe('Test for login button in nav bar in case not logged in', () => {
  it('Test for rendering the log in button and For logging in the home when click on it ', () => {
    render(<LogIn clicked={() => {}} />);
    const loginButton = screen.getByText(/Log In/i);
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);
    expect(loginButton).toBeInTheDocument();
  });
});
