/* eslint-disable no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from '../../../store/Store';
import Banned from '../../../components/Banned/Banned';
import BannedUsers from '../../../components/Banned/BannedUsers';
import SearchComp from '../../../components/Banned/SearchComp';

describe('Test for Account settings component', () => {
  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <Banned />
      </Provider>
    );
    const card = screen.getByTestId(/banned-container/i);
    expect(card).toBeInTheDocument();

    const btn = screen.getByTestId(/ban-btn/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    const textBox = screen.getByTestId(/ban-card/i);
    expect(textBox).toBeInTheDocument();
  });

  const bannedUsers = [
    {
      username: 'ahmed',
      reason: 'reasonBan',
      modNote: 'mod',
      permanent: true,
      duration: 3,
      message: ' messageBan'
    }
  ];

  const bannedUser = {
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
        <BannedUsers bannedUser={bannedUser} />
      </Provider>
    );
    const card = screen.getByTestId(/banned-user-container/i);
    expect(card).toBeInTheDocument();

    const btn = screen.getByTestId(/edit-btn/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    const textBox = screen.getByTestId(/edit-dialog/i);
    expect(textBox).toBeInTheDocument();
  });
  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <SearchComp bannedUsers={bannedUsers} />
      </Provider>
    );
    const card = screen.getByTestId(/Search-container/i);
    expect(card).toBeInTheDocument();
  });
});
