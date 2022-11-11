import { render, screen } from '@testing-library/react';
import Login from '../../../pages/Login/Login';

describe('Test for Login', () => {
  it('Test Rendering Login components', () => {
    render(<Login />);
    const headerElement = screen.getByText(/login/i);
    expect(headerElement).toBeInTheDocument();
  });
});
