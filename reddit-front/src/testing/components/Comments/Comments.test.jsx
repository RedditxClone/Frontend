import { render, screen } from '@testing-library/react';
import Comments from '../../../components/Comments/Comments';

describe('Test for Emails settings component', () => {
  it('Test rendring of the component', () => {
    render(<Comments />);
    const card = screen.getByTestId(/comment-container/i);
    expect(card).toBeInTheDocument();
  });
});
