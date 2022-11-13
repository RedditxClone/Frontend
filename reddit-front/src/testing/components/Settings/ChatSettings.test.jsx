import { render, screen } from '@testing-library/react';
import Chats from '../../../components/ChatMessaging/ChatMessaging';

describe('Test for Emails settings component', () => {
  it('Test rendring of the component', () => {
    render(<Chats />);
    const card = screen.getByTestId(/chat-mes-settings-container/i);
    expect(card).toBeInTheDocument();
  });

  it('Test rendring of switches', () => {
    render(<Chats />);
    const sw = screen.getByTestId(/copy-btn/i);
    expect(sw).toBeInTheDocument();
  });
});
