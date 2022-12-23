/* eslint-disable no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from '../../../store/Store';
import Approved from '../../../components/Approved/Approved';
import ApprovedUsers from '../../../components/Approved/ApprovedUsers';
import SearchComp from '../../../components/Approved/SearchComp';

describe('Test for Account settings component', () => {
  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <Approved />
      </Provider>
    );
    const card = screen.getByTestId(/approved-container/i);
    expect(card).toBeInTheDocument();

    const btn = screen.getByTestId(/approved-btn/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    const textBox = screen.getByTestId(/apprpved-card/i);
    expect(textBox).toBeInTheDocument();
  });

  const approvedUsers = [
    {
      username: 'ahmed',
      reason: 'reasonBan',
      modNote: 'mod',
      permanent: true,
      duration: 3,
      message: ' messageBan'
    }
  ];

  const approvedUser = {
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
        <ApprovedUsers approvedUser={approvedUser} />
      </Provider>
    );
    const card = screen.getByTestId(/approved-user-container/i);
    expect(card).toBeInTheDocument();

    const btn = screen.getByTestId(/remove-btn/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    const textBox = screen.getByTestId(/confirm-dialog/i);
    expect(textBox).toBeInTheDocument();
  });
  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <SearchComp approvedUsers={approvedUsers} />
      </Provider>
    );
    const card = screen.getByTestId(/Search-container/i);
    expect(card).toBeInTheDocument();
  });
});
