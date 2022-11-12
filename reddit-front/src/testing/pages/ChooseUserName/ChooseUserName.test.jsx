import { fireEvent, render, screen } from '@testing-library/react';
import ChooseUserName from '../../../pages/ChooseUserName/ChooseUserName';
// describe('Test for Login', () => {
it('Test Rendering ChooseUserName Header', () => {
  render(<ChooseUserName />);
  const headerElement = screen.getByText(/Choose your username/i);
  expect(headerElement).toBeInTheDocument();
});
it('Test Rendering ChooseUserName Header UserAggrement', () => {
  render(<ChooseUserName />);
  const description = screen.getByTestId('ChooseUserNameDescription');
  expect(description).toBeInTheDocument();
});
it('Test Rendering ChooseUserName input components', () => {
  render(<ChooseUserName />);
  const ChooseUserNameInput = screen.getAllByTestId('ChooseUserNameInputs');
  expect(ChooseUserNameInput.length).toBe(2);
});
it('Test Rendering ChooseUserName Buttons', () => {
  render(<ChooseUserName />);
  const backButton = screen.getByTestId('ChooseUserNameBackButton');
  expect(backButton).toBeInTheDocument();
  const signUpbutton = screen.getByTestId('ChooseUserNameSignUpButton');
  expect(signUpbutton).toBeInTheDocument();
});
it('Test Rendering errorParagraph components', () => {
  render(<ChooseUserName />);
  const ChooseUserNameInput = screen.getAllByTestId('ChooseUserNameInputs');
  fireEvent.focus(ChooseUserNameInput);
  const errorParagraph = screen.getAllByTestId('ChooseUserNameInputsError');
  expect(errorParagraph.length).toBe(2);
});
// });
