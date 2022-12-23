/* eslint-disable react/jsx-boolean-value */
/* eslint-disable max-len */
import { render, screen } from '@testing-library/react';
import ModQueue from '../../../components/ModQueue/ModQueue';

describe('Test for Mod Queue Cards', () => {
  it('Test for rendering the spam queue', () => {
    render(<ModQueue whichQueue="spam" />);
    const element = screen.getByTestId(/posts-for-mod-queue/i);
    expect(element).toBeInTheDocument();
  });

  it('Test for rendering the un-moderated queue', () => {
    render(<ModQueue whichQueue="spam" />);
    const element = screen.getByTestId(/posts-for-mod-queue/i);
    expect(element).toBeInTheDocument();
  });
});
