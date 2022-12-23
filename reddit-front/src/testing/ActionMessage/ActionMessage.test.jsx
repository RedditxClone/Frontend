import { fireEvent, render, screen } from '@testing-library/react';
import ActionMessage from '../../components/ActionMessage/ActionMessage';

describe('Test for actionmessage in case show it by message save changes', () => {
  it('Test for rendering actionmessage button', () => {
    render(
      <ActionMessage
        show="true"
        message="changes saved"
      />
    );
    const actionMessageButton = screen.getByTestId('actionmessagebutton');
    expect(actionMessageButton).toBeInTheDocument();

    const closeButton = screen.getByTestId('closebutton');
    expect(closeButton).toBeInTheDocument();

    const enableButton = screen.getByTestId('enableclosing');
    expect(enableButton).toBeInTheDocument();
    fireEvent.mouseEnter(enableButton);

    const closeIcon = screen.getByTestId('closeicon');
    expect(closeIcon).toBeInTheDocument();

    fireEvent.mouseEnter(enableButton);
    fireEvent.mouseLeave(enableButton);
    expect(closeIcon).not.toBeInTheDocument();

    const redditIcon = screen.getByTestId('redditicon');
    expect(redditIcon).toBeInTheDocument();
  });
});
