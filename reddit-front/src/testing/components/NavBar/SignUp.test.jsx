import { fireEvent, render, screen } from '@testing-library/react';
import SignUp from '../../../components/Layout/SignUp/SignUp';

describe('Test for signup button in nav bar in case not logged in', () => {
  it('Test for rendering the signup button and For logging in the home when click on it ', () => {
    render(<SignUp clicked={() => {}} />);
    const SignUpButton = screen.getByText(/Sign Up/i);
    expect(SignUpButton).toBeInTheDocument();
    fireEvent.click(SignUpButton);
    expect(SignUpButton).toBeInTheDocument();
  });
});
