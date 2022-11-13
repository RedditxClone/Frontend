import { render, screen } from '@testing-library/react';
import EmailsSettings from '../../../components/Emails/Emails';

describe('Test for Emails settings component', () => {
  it('Test rendring of the component', () => {
    render(<EmailsSettings />);
    const card = screen.getByTestId(/emails-settings-container/i);
    expect(card).toBeInTheDocument();
  });

  it('Test rendring of switches', () => {
    render(<EmailsSettings />);
    const sw = screen.getByTestId(/new-followers-sw/i);
    expect(sw).toBeInTheDocument();
  });
});
