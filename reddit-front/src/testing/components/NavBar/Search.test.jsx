import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBox from '../../../components/Layout/Search/Search';

describe('Test for search bar in nav bar in case not logged in', () => {
  it('Test for rendering the search bar and input', () => {
    render(
      <BrowserRouter>
        {' '}
        <SearchBox login="false" />
      </BrowserRouter>
    );
    const searchElement = screen.getByPlaceholderText(/RedditSearch.../i);
    expect(searchElement).toBeInTheDocument();

    fireEvent.change(searchElement, { target: { value: 'community' } });
    expect(searchElement.value).toBe('community');
  });
});

describe('Test for search bar in nav bar in case logged in', () => {
  it('Test for rendering the search bar and input', () => {
    render(
      <BrowserRouter>
        {' '}
        <SearchBox login="false" />
      </BrowserRouter>
    );
    const searchElement = screen.getByPlaceholderText(/RedditSearch.../i);
    expect(searchElement).toBeInTheDocument();

    fireEvent.change(searchElement, { target: { value: 'nada' } });
    expect(searchElement.value).toBe('nada');
  });
});
