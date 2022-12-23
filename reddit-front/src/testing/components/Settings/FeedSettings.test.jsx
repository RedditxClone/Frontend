import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from '../../../store/Store';
import FeedSettings from '../../../components/FeedSettings/FeedSettings';

describe('Test for Account settings component', () => {
  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <FeedSettings />
      </Provider>
    );
    const card = screen.getByTestId(/feed-settings-container/i);
    expect(card).toBeInTheDocument();
  });

  it('Test rendring of switches', () => {
    render(
      <Provider store={Store}>
        <FeedSettings />
      </Provider>
    );
    const sw1 = screen.getByTestId(/adult-cont/i);
    expect(sw1).toBeInTheDocument();
    const sw2 = screen.getByTestId(/media-cont/i);
    expect(sw2).toBeInTheDocument();
  });
});
