import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ProfileLogin from '../../../components/Layout/ProfileLogging/ProfileLogging';
import { Store } from '../../../store/Store';

describe('Test for profile in nav bar in case not logged in', () => {
  it('Test for rendering profile buttons', () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <ProfileLogin />
        </Provider>
      </BrowserRouter>
    );
    const profileButton = screen.getByTestId('profileselect');
    fireEvent.click(profileButton);
    // const recentCommunity = screen.getByText(/Recent Communities/i);
    const recentCommunity = screen.getByTestId('recent-comm');
    // const settings = screen.getByText(/Settings/i);
    const settings = screen.getByTestId('Settings');
    // const signupOrlogin = screen.getByText(/Sign Up or Log In/i);
    const signupOrlogin = screen.getByTestId('Sign Up or Log In');
    expect(recentCommunity).toBeInTheDocument();
    expect(settings).toBeInTheDocument();
    expect(signupOrlogin).toBeInTheDocument();
  });

  it('Test for rendering HomeList Buttonclicks', () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <ProfileLogin />
        </Provider>
      </BrowserRouter>
    );
    // const profileButton = screen.getByTestId('profileselect');
    expect(screen.queryAllByTestId('items').length).toBe(4);
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
