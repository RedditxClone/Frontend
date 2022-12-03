import { render, screen } from '@testing-library/react';
import PeopleResults from '../../../components/SearchCards/PeopleResults/PeopleResults';
import CommunitiesResults from '../../../components/SearchCards/CommunitiesResults/CommunitiesResults';
import PostsResults from '../../../components/SearchCards/PostsResults/PostsResults';
import CommentsResults from '../../../components/SearchCards/CommentsResults/CommentsResults';

describe('Test for Results Cards', () => {
  // People Card
  it('Test for rendering the People Results Card', () => {
    render(<PeopleResults />);
    const element = screen.getByTestId(/people-results/i);
    expect(element).toBeInTheDocument();
  });

  it('Test for the follow button', () => {
    render(<PeopleResults />);
    const buttons = screen.getAllByRole(/community-follow-button/i);
    expect(buttons).toBeInTheDocument();

    const button = buttons[0]; // pick any button
    const text = button.innerHTML;
    fireEvent.click(button);

    if (text === 'Follow') {
      expect(button.innerHTML === 'Following');
    } else {
      expect(button.innerHTML === 'Follow');
    }
  });

  // Communities Card
  it('Test for rendering Communities Results the Card', () => {
    render(<CommunitiesResults />);
    const element = screen.getByTestId(/community-results/i);
    expect(element).toBeInTheDocument();
  });

  it('Test for the join button', () => {
    render(<CommunitiesResults />);
    const buttons = screen.getAllByRole(/community-join-button/i);
    expect(buttons).toBeInTheDocument();

    const button = buttons[0]; // pick any button
    const text = button.innerHTML;
    fireEvent.click(button);

    if (text === 'Join') {
      expect(button.innerHTML === 'Joined');
    } else {
      expect(button.innerHTML === 'Join');
    }
  });

  // Comments Card
  it('Test for rendering Comments Results the Card', () => {
    render(<CommentsResults />);
    const element = screen.getByTestId(/search-comments-results/i);
    expect(element).toBeInTheDocument();
  });

  // Posts Card
  it('Test for rendering Posts Results the Card', () => {
    render(<PostsResults />);
    const element = screen.getByTestId(/search-posts-results/i);
    expect(element).toBeInTheDocument();
  });
});
