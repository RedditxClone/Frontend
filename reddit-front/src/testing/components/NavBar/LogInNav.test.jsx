import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LogIn from '../../../components/Layout/LogIn/LogIn';
import { Store } from '../../../store/Store';

describe('Test for login button in nav bar in case not logged in', () => {
  it('Test for rendering the log in button and For logging in the home when click on it ', () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <LogIn clicked={() => {}} />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByText(/Log In/i);
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);
    expect(loginButton).toBeInTheDocument();
  });
});
