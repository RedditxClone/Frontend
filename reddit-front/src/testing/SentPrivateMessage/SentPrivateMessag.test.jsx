import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SentPrivateMessage from '../../components/SentPrivateMessage/SentPrivateMessage';
import { Store } from '../../store/Store';

describe('UI Test for SendPrivateMessage Component', () => {
  it('Test rendering the components', () => {
    render(
      <Provider store={Store}>
        <SentPrivateMessage />
      </Provider>
    );
    const inputFromUserName = screen.getByLabelText(/From/i);
    const inputToUserName = screen.getByLabelText(/To/i);
    const inputSubject = screen.getByLabelText(/Subject/i);
    const inputMessage = screen.getByLabelText(/Message/i);
    expect(inputFromUserName).toBeInTheDocument();
    expect(inputToUserName).toBeInTheDocument();
    expect(inputSubject).toBeInTheDocument();
    expect(inputMessage).toBeInTheDocument();
  });
});
