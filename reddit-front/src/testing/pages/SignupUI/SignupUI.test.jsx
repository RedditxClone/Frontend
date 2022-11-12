import { fireEvent, render, screen } from '@testing-library/react';
import SignUp from '../../../pages/SignUp/SignUp';

// describe('Test for Signup', () => {
it('Test Rendering Sign up Header', () => {
  render(<SignUp />);
  const headerElement = screen.getByText(/Sign up/i);
  expect(headerElement).toBeInTheDocument();
});
it('Test Rendering Sign up Header UserAggrement', () => {
  render(<SignUp />);
  const description = screen.getByTestId('SignUpHeaderUserAggrement');
  expect(description).toBeInTheDocument();
});
it('Test Rendering Signup input components', () => {
  render(<SignUp />);
  const SignupInput = screen.getByTestId('SignUpInputs');
  expect(SignupInput).toBeInTheDocument();
});
it('Test Rendering Signup Button', () => {
  render(<SignUp />);
  const SignupButton = screen.getByTestId('SignUpButton');
  expect(SignupButton).toBeInTheDocument();
});
it('Test Rendering errorParagraph components', () => {
  render(<SignUp />);
  const SignupInput = screen.getByTestId('SignUpInputs');
  fireEvent.focus(SignupInput);
  const errorParagraph = screen.getAllByTestId('SignUpInputsError');
  expect(errorParagraph).toBeInTheDocument();
});
// });
