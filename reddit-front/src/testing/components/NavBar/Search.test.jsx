import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '../../../components/Layout/Search/Search';

describe('Test for search bar in nav bar in case not logged in', () => {
  it('Test for rendering the search bar and input', () => {
    render(<SearchBox login="false" />);
    const searchElement = screen.getByPlaceholderText(/RedditSearch.../i);
    expect(searchElement).toBeInTheDocument();

    fireEvent.change(searchElement, { target: { value: 'community' } });
    expect(searchElement.value).toBe('community');
  });
});

describe('Test for search bar in nav bar in case logged in', () => {
  it('Test for rendering the search bar and input', () => {
    render(<SearchBox login="true" />);
    const searchElement = screen.getByPlaceholderText(/RedditSearch.../i);
    expect(searchElement).toBeInTheDocument();

    fireEvent.change(searchElement, { target: { value: 'nada' } });
    expect(searchElement.value).toBe('nada');
  });
});
