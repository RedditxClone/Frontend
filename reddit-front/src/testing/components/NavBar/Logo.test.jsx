import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Logo from '../../../components/Layout/Logo/Logo';

describe('Test for reddit img and reddit word in nav bar', () => {
  it('Test for rendering the logo', () => {
    render(
      <BrowserRouter>
        {' '}
        <Logo />
      </BrowserRouter>
    );
    const redditImg = screen.getByTestId('redditimg');
    expect(redditImg).toBeInTheDocument();
    const redditWord = screen.getByTestId('redditword');
    expect(redditWord).toBeInTheDocument();
  });
});
