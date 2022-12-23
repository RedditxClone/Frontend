/* eslint-disable no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from '../../../store/Store';
import Muted from '../../../components/Muted/Muted';
import MutedUsers from '../../../components/Muted/MutedUsers';
import SearchComp from '../../../components/Muted/SearchComp';

describe('Test for Account settings component', () => {
  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <Muted />
      </Provider>
    );
    const card = screen.getByTestId(/muted-container/i);
    expect(card).toBeInTheDocument();

    const btn = screen.getByTestId(/mute-btn/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    const textBox = screen.getByTestId(/mute-card/i);
    expect(textBox).toBeInTheDocument();
  });

  const mutedUsers = [
    {
      username: 'ahmed',
      reason: 'reasonBan',
      modNote: 'mod',
      permanent: true,
      duration: 3,
      message: ' messageBan'
    }
  ];

  const mutedUser = {
    username: 'ahmed',
    reason: 'reasonBan',
    modNote: 'mod',
    permanent: true,
    duration: 3,
    message: ' messageBan'
  };
  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <MutedUsers mutedUser={mutedUser} />
      </Provider>
    );
    const card = screen.getByTestId(/muted-user-container/i);
    expect(card).toBeInTheDocument();

    const btn = screen.getByTestId(/unmute-btn/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    const textBox = screen.getByTestId(/confirm-card/i);
    expect(textBox).toBeInTheDocument();
  });
  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <SearchComp mutedUsers={mutedUsers} />
      </Provider>
    );
    const card = screen.getByTestId(/Search-container/i);
    expect(card).toBeInTheDocument();
  });
});
