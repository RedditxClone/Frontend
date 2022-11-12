import { fireEvent, render, screen } from '@testing-library/react';
import ForgetUserName from '../../../pages/ForgetUserName/ForgetUserName';
// describe('Test for Login', () => {
it('Test Rendering ForgetUserName Header', () => {
  render(<ForgetUserName />);
  const headerElement = screen.getByText(/Recover your username/i);
  expect(headerElement).toBeInTheDocument();
});
it('Test Rendering ForgetUserName Header UserAggrement', () => {
  render(<ForgetUserName />);
  const description = screen.getByTestId('ForgetUserNameHeaderUserAggrement');
  expect(description).toBeInTheDocument();
});
it('Test Rendering ForgetUserName input components', () => {
  render(<ForgetUserName />);
  const ForgetUserNameInput = screen.getByTestId('ForgetUserNameInputs');
  expect(ForgetUserNameInput).toBeInTheDocument();
});
it('Test Rendering ForgetUserName Button', () => {
  render(<ForgetUserName />);
  const forgetButton = screen.getByTestId('ForgetUserNameButton');
  expect(forgetButton).toBeInTheDocument();
});
it('Test Rendering errorParagraph components', () => {
  render(<ForgetUserName />);
  const ForgetUserNameInput = screen.getByTestId('ForgetUserNameInputs');
  fireEvent.focus(ForgetUserNameInput);
  const errorParagraph = screen.getAllByTestId('ForgetUserNameInputsError');
  expect(errorParagraph).toBeInTheDocument();
});
// });
