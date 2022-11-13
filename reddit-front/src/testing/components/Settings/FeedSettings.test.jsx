import { render, screen } from '@testing-library/react';
import FeedSettings from '../../../components/FeedSettings/FeedSettings';

describe('Test for Account settings component', () => {
  it('Test rendring of the component', () => {
    render(<FeedSettings />);
    const card = screen.getByTestId(/feed-settings-container/i);
    expect(card).toBeInTheDocument();
  });

  it('Test rendring of switches', () => {
    render(<FeedSettings />);
    const sw1 = screen.getByTestId(/adult-cont/i);
    expect(sw1).toBeInTheDocument();
    const sw2 = screen.getByTestId(/media-cont/i);
    expect(sw2).toBeInTheDocument();
  });
});
