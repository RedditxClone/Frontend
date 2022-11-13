import { fireEvent, render, screen } from '@testing-library/react';
import AccountSettings from '../../../components/AccountSettings/AccountSettings';

describe('Test for Account settings component', () => {
  it('Test rendring of the component', () => {
    render(<AccountSettings />);
    const card = screen.getByTestId(/account-settings-container/i);
    expect(card).toBeInTheDocument();
  });

  it('Test the button of changing the email', () => {
    render(<AccountSettings />);
    const btn = screen.getByTestId(/chage-button/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    const confrimBox = screen.getByTestId(/confirmation-box-1/i);
    expect(confrimBox).toBeInTheDocument();

    const cancelButton = screen.getByTestId(/cancel-button/i);
    expect(cancelButton).toBeInTheDocument();

    const continueButton = screen.getByTestId(/continue-button/i);
    expect(continueButton).toBeInTheDocument();

    const closeIcon = screen.getByTestId(/close-icon/i);
    expect(closeIcon).toBeInTheDocument();

    fireEvent.click(closeIcon);
    expect(confrimBox).not.toBeInTheDocument();

    fireEvent.click(btn);
    fireEvent.click(cancelButton);
    expect(confrimBox).not.toBeInTheDocument();
  });

  it('Test the country component', () => {
    render(<AccountSettings />);
    const countrySelect = screen.getByTestId(/country-select/i);
    expect(countrySelect).toBeInTheDocument();
    fireEvent.click(countrySelect);
    const egyptOption = screen.getByText(/egypt/i);
    expect(egyptOption).toBeInTheDocument();
    fireEvent.click(egyptOption);
    expect(countrySelect.value).toBe('Egypt');
  });

  it('Test the connected accounts', () => {
    render(<AccountSettings />);
    const facebookIcon = screen.getByTestId(/facebook-ic/i);
    expect(facebookIcon).toBeInTheDocument();
    const googleIcon = screen.getByTestId(/google-ic/i);
    expect(googleIcon).toBeInTheDocument();
  });

  it('Test the button of deleting', () => {
    render(<AccountSettings />);
    const btn = screen.getByTestId(/delete-button/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    const confrimBox = screen.getByTestId(/confirmation-box-4/i);
    expect(confrimBox).toBeInTheDocument();

    const cancelButton = screen.getByTestId(/cancel-btn/i);
    expect(cancelButton).toBeInTheDocument();

    const continueButton = screen.getByTestId(/cont-btn/i);
    expect(continueButton).toBeInTheDocument();

    const closeIcon = screen.getByTestId(/close-ic/i);
    expect(closeIcon).toBeInTheDocument();

    fireEvent.click(closeIcon);
    expect(confrimBox).not.toBeInTheDocument();

    fireEvent.click(btn);
    fireEvent.click(cancelButton);
    expect(confrimBox).not.toBeInTheDocument();
  });
});
