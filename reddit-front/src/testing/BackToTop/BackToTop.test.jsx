import { fireEvent, render, screen } from '@testing-library/react';
import BackTop from '../../components/BackToTop/BackToTop';

describe('Test for backtop in case show it by message save changes', () => {
  it('Test for rendering backtop button', () => {
    render(<BackTop id="navbar" />);
    const backToTop = screen.getByText('Back to Top');
    expect(backToTop).toBeInTheDocument();

    const scrollUp = screen.getByTestId('scrollup');
    fireEvent.click(scrollUp);
    expect(scrollUp).toBeInTheDocument();
    expect(backToTop).not.toBeVisible();
  });
});
