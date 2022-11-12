import { fireEvent, render, screen } from '@testing-library/react';
import ForgetUserPassword from '../../../pages/ForgetUserPassword/ForgetUserPassword';
// describe('Test for Login', () => {
it('Test Rendering ForgetUserName Header', () => {
  render(<ForgetUserPassword />);
  const headerElement = screen.getByText(/Recover your password/i);
  expect(headerElement).toBeInTheDocument();
});
it('Test Rendering ForgetUserName Header UserAggrement', () => {
  render(<ForgetUserPassword />);
  const description = screen.getByTestId('ForgetUserPasswordHeaderUserAggrement');
  expect(description).toBeInTheDocument();
});
it('Test Rendering ForgetUserName input components', () => {
  render(<ForgetUserPassword />);
  const ForgetUserPasswordInput = screen.getAllByTestId('ForgetUserPasswordInputs');
  expect(ForgetUserPasswordInput.length).toBe(2);
});
it('Test Rendering ForgetUserName Button', () => {
  render(<ForgetUserPassword />);
  const forgetButton = screen.getByTestId('ForgetUserPasswordButton');
  expect(forgetButton).toBeInTheDocument();
});
it('Test Rendering errorParagraph components', () => {
  render(<ForgetUserPassword />);
  const ForgetUserPasswordInput = screen.getAllByTestId('ForgetUserPasswordInputs');
  fireEvent.focus(ForgetUserPasswordInput);
  const errorParagraph = screen.getAllByTestId('ForgetUserPasswordInputsError');
  expect(errorParagraph.length).toBe(2);
});
// });
