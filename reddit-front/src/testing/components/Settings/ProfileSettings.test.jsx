import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from '../../../store/Store';
import ProfileSettings from '../../../components/ProfileSettings/ProfileSettings';

describe('Test for Profile settings component', () => {
  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <ProfileSettings />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const card = screen.getByTestId(/profile-settings-container/i);
    expect(card).toBeInTheDocument();
  });

  it('Test rendring of the display name', () => {
    render(
      <Provider store={Store}>
        <ProfileSettings />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const displayCont = screen.getByTestId(/display-cont/i);
    expect(displayCont).toBeInTheDocument();
    const displayContPH = screen.getByPlaceholderText(
      'Display name (optional)'
    );
    expect(displayContPH).toBeInTheDocument();
  });

  it('Test rendring of the about comp', () => {
    render(
      <Provider store={Store}>
        <ProfileSettings />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const displayCont = screen.getByTestId(/about-cont/i);
    expect(displayCont).toBeInTheDocument();
    const displayContPH = screen.getByPlaceholderText('About(optional)');
    expect(displayContPH).toBeInTheDocument();
  });

  it('Test rendring of add social links button', () => {
    render(
      <Provider store={Store}>
        <ProfileSettings />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const addSocialLinkBtn = screen.getByTestId(/social-btn/i);
    expect(addSocialLinkBtn).toBeInTheDocument();
    fireEvent.click(addSocialLinkBtn);
    const confrimBox = screen.getByTestId(/confirmation-box1/i);
    expect(confrimBox).toBeInTheDocument();
    const custom = screen.getByTestId(/custom-btn/i);
    expect(custom).toBeInTheDocument();
    const closeIcon = screen.getByTestId(/close-i/i);
    expect(closeIcon).toBeInTheDocument();
  });

  it('Test rendring of profile photo', () => {
    render(
      <Provider store={Store}>
        <ProfileSettings />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const profile = screen.getByTestId(/profile-ph/i);
    expect(profile).toBeInTheDocument();
    const cover = screen.getByTestId(/cover-ph/i);
    expect(cover).toBeInTheDocument();
  });
});
