import { fireEvent, render, screen } from '@testing-library/react';
import ProfileLogin from '../../../components/Layout/ProfileLogging/ProfileLogging';

describe('Test for profile in nav bar in case not logged in', () => {
  it('Test for rendering profile buttons', () => {
    render(<ProfileLogin />);
    const profileButton = screen.getByTestId('profileselect');
    fireEvent.click(profileButton);
    const recentCommunity = screen.getByText(/Recent Communities/i);
    const settings = screen.getByText(/Settings/i);
    const signupOrlogin = screen.getByText(/Sign Up or Log In/i);

    expect(recentCommunity).toBeInTheDocument();
    expect(settings).toBeInTheDocument();
    expect(signupOrlogin).toBeInTheDocument();
  });

  it('Test for rendering HomeList Buttonclicks', () => {
    render(<ProfileLogin />);
    // const profileButton = screen.getByTestId('profileselect');
    expect(screen.getAllByTestId('elements').length).toBe(4);
    // const recentCommunity = screen.getByText(/Recent Communities/i);
    // fireEvent.click(recentCommunity);
    // const anyCommunity = screen.getByText(/any community/i);
    // expect(anyCommunity).toBeInTheDocument();

    // const settings = screen.getByText(/Settings/i);
    // fireEvent.click(settings);
    // const darkMode = screen.getByText(/Dark Mode/i);
    // expect(darkMode).toBeInTheDocument();
  });
});
