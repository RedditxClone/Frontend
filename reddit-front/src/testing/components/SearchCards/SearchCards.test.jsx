/* eslint-disable max-len */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PeopleResults from '../../../components/SearchCards/PeopleResults/PeopleResults';
import CommunitiesResults from '../../../components/SearchCards/CommunitiesResults/CommunitiesResults';
import PostsResults from '../../../components/SearchCards/PostsResults/PostsResults';
import CommentsResults from '../../../components/SearchCards/CommentsResults/CommentsResults';

describe('Test for Results Cards', () => {
  // People Card
  it('Test for rendering the People Results Card', () => {
    render(<PeopleResults searchKey="mustafa_hamzawy" />);
    const element = screen.getByTestId(/people-results/i);
    expect(element).toBeInTheDocument();
  });

  // Communities Card
  it('Test for rendering Communities Results the Card', () => {
    render(<CommunitiesResults searchKey="mustafa_hamzawy" />);
    const element = screen.getByTestId(/community-results/i);
    expect(element).toBeInTheDocument();
  });

  // Comments Card
  it('Test for rendering Comments Results the Card', () => {
    render(<CommentsResults searchKey="commment" />);
    const element = screen.getByTestId(/search-comments-results/i);
    expect(element).toBeInTheDocument();
  });

  // Posts Card
  it('Test for rendering Posts Results the Card', () => {
    render(
      <BrowserRouter>
        <PostsResults searchKey="test" />
      </BrowserRouter>
    );
    const element = screen.getByTestId(/search-posts-results/i);
    expect(element).toBeInTheDocument();
  });
});
