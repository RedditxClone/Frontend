import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../../../pages/Login/Login';

// describe('Test for Login', () => {
it('Test Rendering Login Header', () => {
  render(<Login />);
  const headerElement = screen.getByText(/Log in/i);
  expect(headerElement).toBeInTheDocument();
});
it('Test Rendering Login Header UserAggrement', () => {
  render(<Login />);
  const description = screen.getByTestId('LoginHeaderUserAggrement');
  expect(description).toBeInTheDocument();
});
it('Test Rendering Login input components', () => {
  render(<Login />);
  const LoginInput = screen.getAllByTestId('LoginInputs');
  expect(LoginInput.length).toBe(2);
});
it('Test Rendering Login Button', () => {
  render(<Login />);
  const loginButton = screen.getByTestId('LoginButton');
  expect(loginButton).toBeInTheDocument();
});
it('Test Rendering errorParagraph components', () => {
  render(<Login />);
  const LoginInput = screen.getAllByTestId('LoginInputs');
  fireEvent.focus(LoginInput);
  const errorParagraph = screen.getAllByTestId('LoginInputsError');
  expect(errorParagraph).toBeInTheDocument();
  expect(errorParagraph.length).toBe(2);
});
// });
