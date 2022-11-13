import { render, screen } from '@testing-library/react';
import Notifications from '../../../components/Notifications/Notifications';

describe('Test for Emails settings component', () => {
  it('Test rendring of the component', () => {
    render(<Notifications />);
    const card = screen.getByTestId(/notifi-settings-container/i);
    expect(card).toBeInTheDocument();
  });

  it('Test rendring of switches', () => {
    render(<Notifications />);
    const sw = screen.getByTestId(/new-follower-sw/i);
    expect(sw).toBeInTheDocument();
  });
});
