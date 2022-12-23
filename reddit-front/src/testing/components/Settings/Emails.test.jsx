import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from '../../../store/Store';
import EmailsSettings from '../../../components/Emails/Emails';

describe('Test for Emails settings component', () => {
  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <EmailsSettings />
      </Provider>
    );
    const card = screen.getByTestId(/emails-settings-container/i);
    expect(card).toBeInTheDocument();
  });

  it('Test rendring of switches', () => {
    render(
      <Provider store={Store}>
        <EmailsSettings />
      </Provider>
    );
    const sw = screen.getByTestId(/new-followers-sw/i);
    expect(sw).toBeInTheDocument();
  });
});
